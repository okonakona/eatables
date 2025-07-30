"use client";

import FoodList from "./FoodList"
import { FoodItem } from "@/app/types/item";
import { useState,useEffect } from "react";

const mockItems: FoodItem[] = [
    { id: 1, name: "トマト", selectedCategory: "vegetable", isPriority: false, message:"野菜室開けて右" },
    { id: 2, name: "チーズ", selectedCategory: "milk", isPriority: true, message:"冷蔵庫開けてすぐ右にあるよ" },
    { id: 3, name: "りんご", selectedCategory: "fruit", isPriority: false, message:"レンジ上のバスケットの中" },
    { id: 4, name: "アイス", selectedCategory: "snack", isPriority: false, message:"冷凍庫の中" },
    { id: 5, name: "トマト", selectedCategory: "vegetable", isPriority: false, message:"野菜室開けて右" },
    { id: 6, name: "チーズ", selectedCategory: "milk", isPriority: false, message:"冷蔵庫開けてすぐ右にあるよ" },
    { id: 7, name: "りんご", selectedCategory: "fruit", isPriority: false, message:"レンジ上のバスケットの中" },
    { id: 8, name: "アイス", selectedCategory: "snack", isPriority: false, message:"冷凍庫の中" },
];


export default function MainCnt () {
    const [eatenIds, setEatenIds] = useState<number[]>([]);
    const [userItems, setUserItems] = useState<FoodItem[]>([]); // ← FoodList ではなく FoodItem 
    
    useEffect(() => {
        const eaten: { id: number }[] = JSON.parse(localStorage.getItem('eatenItems') || '[]');
        setEatenIds(eaten.map((i) => i.id));

        const stored: FoodItem[] = JSON.parse(localStorage.getItem('userItems') || '[]');
        setUserItems(stored);
    }, []);

    const allItems = [...mockItems, ...userItems];
    const filteredItems = allItems.filter((item) => !eatenIds.includes(item.id));
    
    
        return (
        <main>
            <h2 className="text-center m-2">食べていいもの</h2>
            <ul className="overflow-scroll max-h-[400px] pb-30">
                {filteredItems.map((item) => (
                    <FoodList key={item.id} item={item} />
                ))}
            </ul>
        </main>
    )
}