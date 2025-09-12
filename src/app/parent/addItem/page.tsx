"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "@/components/Footer";
import clsx from "clsx";

const categories = [
    { id: "meat", label: "肉", icon: "/meat.png" },
    { id: "fish", label: "魚", icon: "/fish.png" },
    { id: "fruit", label: "果物", icon: "/fruit.png" },
    { id: "vegetable", label: "野菜", icon: "/vegetable.png" },
    { id: "milk", label: "ミルク", icon: "/milk.png" },
    { id: "juice", label: "飲み物", icon: "/juice.png" },
    { id: "snack", label: "おやつ", icon: "/snack.png" },
    { id: "other", label: "その他", icon: "/other.png" }, 
]

const AddItem = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [isPriority, setIsPriority] = useState(false);
    const [message, setMessage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const res = await fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/addFood.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    category: selectedCategory,
                    is_priority: isPriority,
                    message,
                }),
            });
    
            const data = await res.json();
            console.log("追加結果:", data);
    
            if (data.status === "success") {
                alert("食品を追加しました！");
                router.push("/parent/");
            } else {
                alert("エラー: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("通信エラーが発生しました");
        }
    };

    return (
        <section className="m-7">
            <header>
                <h1 className="">食品を追加</h1>
            </header>
            <main>
                <form action="/parent/" method="POST" onSubmit={handleAdd}>
                    <div>
                        <label htmlFor="" className="text-[14px]">1. 食品名( 食べていいもの )</label>
                        <div className="custom-shadow my-2 px-7 py-3">
                                <input type="text" name="" placeholder="食べていいもの"
                                    value={name} onChange={(e) => setName(e.target.value)} className="custom-border border-[#E7F0F7] w-full"/>
                                <label className="flex items-center">
                                    <input type="checkbox" name="isPriority"
                                        checked={isPriority} onChange={(e) => setIsPriority(e.target.checked)} className="mr-2"/>
                                    優先的に食べてほしい
                                </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor=""  className="text-[14px]">2. 備考( 場所や食べ方など )</label>
                        <div className="custom-shadow  my-2">
                            <textarea name="" id=""  placeholder="例）冷蔵庫開けてすぐ左側にあるよ" value={message} onChange={(e) => setMessage(e.target.value)}  className="w-full text-[12px] min-h-24 p-3"></textarea>
                        </div>
                    </div>
                    <div>
                    <label className="text-[14px] block mb-2">3. カテゴリー（近いものを選択してください）</label>
                    <div className="flex flex-wrap gap-1 items-center justify-center">
                        {categories.map((category) => (
                        <label key={category.id} className="cursor-pointer">
                            <input
                            type="radio"
                            name="category"
                            value={category.id}
                            className="sr-only peer"
                            onChange={() => setSelectedCategory(category.id)}
                            checked={selectedCategory === category.id}
                            />
                            <div 
                            className={clsx(
                                'w-[80px] h-[80px] custom-shadow flex items-center justify-center rounded',
                                'peer-checked:bg-gradient-to-r from-[#6EFFEE] to-[#FFFC47]'
                            )}>                            
                            {category.icon ? (
                                <Image
                                src={category.icon}
                                alt={category.label}
                                width={75}
                                height={75}
                                className="my-auto"
                                />
                            ) : (
                                <span className="text-sm text-gray-600">？</span>
                            )}
                            </div>
                        </label>
                        ))}
                        </div>
                    </div>
                    <div className=" my-5">
                        <button type="submit" className="custom-button  w-full">追加</button>
                    </div>
                </form>
            </main>
            <Footer />

        </section>
    )
};

export default AddItem;
