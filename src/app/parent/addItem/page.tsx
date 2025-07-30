"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FoodItem } from "@/app/types/item";

// import { FaQuestion } from "react-icons/fa6";

const categories = [
    { id: "meat", label: "肉", icon: "/meat.svg" },
    { id: "fish", label: "魚", icon: "/fish.svg" },
    { id: "fruit", label: "果物", icon: "/fruit.svg" },
    { id: "vegetable", label: "野菜", icon: "/vegetable.svg" },
    { id: "milk", label: "ミルク", icon: "/milk.svg" },
    { id: "juice", label: "飲み物", icon: "/juice.svg" },
    { id: "snack", label: "おやつ", icon: "/snack.svg" },
    { id: "other", label: "その他", icon: "" }, // 他のアイコンなし
]

const AddItem = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [isPriority, setIsPriority] = useState(false);
    const [message, setMessage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const handleAdd = () => {
    const newItem: FoodItem = {
        id: Date.now(), // ユニークIDにするため
        name,
        selectedCategory,
        isPriority,
        message,
    };
    const stored = JSON.parse(localStorage.getItem('userItems') || '[]');
    stored.push(newItem);
    localStorage.setItem('userItems', JSON.stringify(stored));

    router.push('/');
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
                                {/* <button>履歴</button>
                                <button>テンプレ</button> */}
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
                    <div className="flex flex-wrap gap-1">
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
                            <div className="w-[80px] h-[80px] p-2 custom-shadow peer-checked:bg-[#BFCCD6] flex items-center justify-center rounded">
                            {category.icon ? (
                                <Image
                                src={category.icon}
                                alt={category.label}
                                width={70}
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
            <footer className="bg-white bottom-0 left-0 fixed min-w-screen h-15 text-[15px]/15">
                <Link href="/parent" className="flex justify-center gap-5">
                    <Image src="/backPage.svg" alt="" width={0} height={0} className="w-auto h-auto" />
                    <p className="font-black">戻る</p>
                </Link>
            </footer>


        </section>
    )
};

export default AddItem;
