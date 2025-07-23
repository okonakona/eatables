"use client";

import FoodList from "./FoodList"
import { FoodItem } from "@/app/types/item";
import { useState } from "react";

const mockItems: FoodItem[] = [
    { id: 1, name: "トマト", category: "vegetable", isPriority: false, message:"野菜室開けて右" },
    { id: 2, name: "チーズ", category: "milk", isPriority: true, message:"冷蔵庫開けてすぐ右にあるよ" },
    { id: 3, name: "りんご", category: "fruit", isPriority: false, message:"レンジ上のバスケットの中" },
    { id: 4, name: "アイス", category: "snack", isPriority: false, message:"冷凍庫の中" },
];


export default function MainCnt () {
    const [items,setItems] = useState<FoodItem[]> (mockItems)
    return (
        <main>
            <h2 className="text-center m-2">食べていいもの</h2>
            <ul className="overflow-scroll max-h-[400px] pb-30">
                {items.map((item) => (
                    <FoodList key={item.id} item={item} />
                ))}
            </ul>
        </main>
    )
}