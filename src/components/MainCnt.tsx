"use client";

import FoodList from "./FoodList"
import { FoodItem } from "@/app/types/item";
import { useState,useEffect } from "react";

export default function MainCnt () {
    const [eatenIds] = useState<number[]>([]);
    const [items, setItems] = useState<FoodItem[]>([]);
    
    useEffect(() => {
        fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/foodList.php")
        .then((res) => res.json())
        .then((data: FoodItem[]) => {
            console.log("DBから取得:", data);
            setItems(data);
        })
        .catch((err) => console.error("データ取得失敗:", err));
    }, []);

    // useEffect(() => {
    //     const eaten: { id: number }[] = JSON.parse(localStorage.getItem('eatenItems') || '[]');
    //     setEatenIds(eaten.map((i) => i.id));

    //     const stored: FoodItem[] = JSON.parse(localStorage.getItem('userItems') || '[]');
    //     setUserItems(stored);
    // }, []);

    
    const allItems = [...items];
    const filteredItems = allItems
        .filter((item) => !eatenIds.includes(item.id))
        .sort((a, b) => {
            if (a.is_priority === b.is_priority) return 0;
            return a.is_priority ? -1 : 1;
        })
    
    
        return (
        <main>
            <h2 className="text-center m-2 mt-65">食べていいもの</h2>
            {filteredItems.length === 0 ? (
                <p className="custom-shadow text-center p-7 text-gray-500">いま食べていいものはないみたい…</p>
            ):(
                <ul className="overflow-scroll max-h-[500px] pb-10">
                    {filteredItems.map((item) => (
                        <FoodList key={item.id} item={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}