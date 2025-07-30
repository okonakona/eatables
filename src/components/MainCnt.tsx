"use client";

import FoodList from "./FoodList"
import { FoodItem } from "@/app/types/item";
import { useState,useEffect } from "react";

export default function MainCnt () {
    const [eatenIds, setEatenIds] = useState<number[]>([]);
    const [userItems, setUserItems] = useState<FoodItem[]>([]); 
    
    useEffect(() => {
        const eaten: { id: number }[] = JSON.parse(localStorage.getItem('eatenItems') || '[]');
        setEatenIds(eaten.map((i) => i.id));

        const stored: FoodItem[] = JSON.parse(localStorage.getItem('userItems') || '[]');
        setUserItems(stored);
    }, []);

    const allItems = [...userItems];
    const filteredItems = allItems
        .filter((item) => !eatenIds.includes(item.id))
        .sort((a, b) => {
            if (a.isPriority === b.isPriority) return 0;
            return a.isPriority ? -1 : 1;
        })

        return (
        <main>
            <h2 className="text-center m-2">食べていいもの</h2>
            {filteredItems.length === 0 ? (
                <p className="custom-shadow text-center p-7 text-gray-500">いま食べていいものはないみたい…</p>
            ):(
                <ul className="overflow-scroll max-h-[400px] pb-30">
                    {filteredItems.map((item) => (
                        <FoodList key={item.id} item={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}