"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import RatingStars from "@/components/RatingStars";
import { FoodItem } from "@/app/types/item";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function ItemDetail({ id }: { id: string }) {
    const itemId = Number(id);
    const [rating, setRating] = useState(0);
    const [item, setItem] = useState<FoodItem | null>(null);
    const [role, setRole] = useState<"mother" | "child" | null>(null);
    const router = useRouter();

    useEffect(() => {
        // ロール取得
        const userStr = sessionStorage.getItem("user");
        if (userStr) {
            const user = JSON.parse(userStr);
            setRole(user.role);
        }

        fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/foodList.php")
            .then((res) => res.json())
            .then((data: FoodItem[]) => {
                const foundItem = data.find((i) => i.id === itemId);
                if (foundItem) setItem(foundItem);
            })
            .catch((err) => console.error("データ取得失敗:", err));
    }, [itemId]);

    if (!item) return <div>アイテムが見つかりませんでした</div>;

    const imageSrc = `/${item.category}.png`;

    const handleChildAction = async () => {
        try {
            const userStr = sessionStorage.getItem("user");
            if (!userStr) {
                alert("ユーザー情報が見つかりません");
                return;
            }
            const user = JSON.parse(userStr);

            const beforeLevel = user.level;

            const response = await fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/report_eaten.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ food_id: item.id, rating, user_id: user.id }),
            });

            const data = await response.json();
            if (data.status === "success") {
                alert("食べた報告を登録しました！");
                router.push("/child");
            } else {
                alert("エラー: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("通信エラーが発生しました");
        }
    };

    const handleParentAction = async () => {
        try {
            const response = await fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/delete_food.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ food_id: item.id }),
            });
            const data = await response.json();
            if (data.status === "success") {
                alert("アイテムを削除しました！");
                setItem({ ...item, delete_flag: true });
                router.push("/parent");
            } else {
                alert("エラー: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("通信エラーが発生しました");
        }
    };

    return (
        <div>
            <main className="custom-shadow mx-10 my-15 h-[500px] p-7">
                <h1>
                    <Image src={imageSrc} alt="" width={140} height={145} className="mx-auto" />
                </h1>
                <section className="font-black my-5 text-center">
                    <h2 className="text-[36px]">{item.name}</h2>
                    <p className="text-[15px] mt-5 h-[40px]">{item.message}</p>
                    {role === "child" && (
                        <section className="m-5">
                            <h3>好き度</h3>
                            <RatingStars rating={rating} onRate={setRating} />
                        </section>
                    )}
                    {!item.delete_flag && (
                        <button
                            onClick={role === "child" ? handleChildAction : handleParentAction}
                            className="custom-button w-[200px] mt-5"
                        >
                            {role === "child" ? "食べた" : "削除"}
                        </button>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}
