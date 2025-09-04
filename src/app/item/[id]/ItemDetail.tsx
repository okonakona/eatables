"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import RatingStars from "@/components/RatingStars";
import { FoodItem } from "@/app/types/item";

export default function ItemDetail({ id }: { id: string }) {
    const itemId = Number(id);
    const [rating, setRating] = useState(0);
    const [item, setItem] = useState<FoodItem | null>(null);
    

    // ✅ userItems から該当アイテムを取得
    useEffect(() => {
        fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/foodList.php")
        .then((res) => res.json())
        .then((data: FoodItem[]) => {
            const foundItem = data.find((i) => i.id === itemId);
            if (foundItem) setItem(foundItem);
        })
        .catch((err) => console.error("データ取得失敗:", err));

        // const storedItems = localStorage.getItem("userItems");
        // if (storedItems) {
        //     const items: FoodItem[] = JSON.parse(storedItems);
        //     const foundItem = items.find((i) => i.id === itemId);
        //     if (foundItem) {
        //         setItem(foundItem);
        //     }
        // }
    }, [itemId]);

    if (!item) return <div>アイテムが見つかりませんでした</div>;

    const imageSrc = item ? `/${item.category}.png` : "";
    
    const handleSubmit = async (foodId: number, rating: number) => {
        try {
            const response =  await fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/report_eaten.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ food_id: foodId, rating }),
            });
        
            const data = await response.json();
            console.log(data);
            console.log("body:", new URLSearchParams({ food_id: String(foodId), rating: String(rating) }).toString());
            console.log("送信する body:", { food_id: foodId, rating });

        
            if (data.status === "success") {
                alert("食べた報告を登録しました！");
            } else {
                alert("エラー: " + data.message);
            }
            } catch (err) {
            console.error(err);
            alert("通信エラーが発生しました");
        }
    };

    // // ✅ 食べた報告＆評価を保存
    // const handleSubmit = () => {
    //     const eatenItems = JSON.parse(localStorage.getItem('eatenItems') || '[]');
    //     eatenItems.push({ ...item, rating });
    //     localStorage.setItem('eatenItems', JSON.stringify(eatenItems));

    //     // userItemsから削除（表示対象から除く）
    //     const storedItems = JSON.parse(localStorage.getItem('userItems') || '[]');
    //     const updatedItems = storedItems.filter((i: FoodItem) => i.id !== item.id);
    //     localStorage.setItem('userItems', JSON.stringify(updatedItems));

    //     router.push('/child/');
    // };
    
    return (
        <div>
            <main className="custom-shadow mx-10 my-15 h-[500px] p-7">
                <h1><Image  src={imageSrc} alt="" width={140} height={145} className="mx-auto" /></h1>
                <section className="font-black my-5 text-center">
                    <h2 className="text-[36px]">{item.name}</h2>
                    <p className="text-[15px] mt-5 h-[40px]">{item.message}</p>
                    <section className="m-5">
                        <h3>好き度</h3>
                        <RatingStars rating={rating} onRate={setRating} />
                    </section>
                    <button onClick={() => handleSubmit(item!.id, rating)} className="custom-button w-[200px] mt-5">食べた</button>
                </section>
            </main>
            <footer className="bg-[#D9D9D9] bottom-0 left-0 fixed min-w-screen h-15 text-[15px]/15">
                <Link href="/child/" className="flex justify-center gap-5">
                    <Image src="/backPage.svg" alt="" width={0} height={0} className="w-auto h-auto" />
                    <p className="font-black">戻る</p>
                </Link>
            </footer>
        </div>
    )
}