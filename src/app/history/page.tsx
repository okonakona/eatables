'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FoodItem } from '../types/item';
import Footer from '@/components/Footer';

type EatenItem = FoodItem & { rating: number };

export default function HistoryPage() {
    const [eatenItems, setEatenItems] = useState<EatenItem[]>([]);

    useEffect(() => {
        fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/eatenFood.php")
        .then(response => response.json())
        .then((data: EatenItem[]) => {
            console.log("DBから取得:", data);
            setEatenItems(data);
        })
        .catch((err) => console.error("データ取得失敗:", err));
    }, []);



    return (
        <div>
            <main className="m-3">
            <h1 className="text-2xl font-bold my-10 text-center">食べたもの履歴</h1>
            <section>
                {eatenItems.length === 0 ? (
                    <p>まだ何も食べていません。</p>
                ) : (
                    <ul className="space-y-5 flex flex-wrap gap-0.5">
                    {eatenItems.slice().reverse().map((item) => (
                        <li key={item.id} className="custom-shadow p-1 text-center w-30 h-30">
                            <div>
                                <Image  src={`/${item.category}.png`} alt="" width={75} height={75} className="mx-auto my-auto" />
                            </div>
                            <p className="font-bold text-[12px]">{item.name}</p>
                            <div className="flex justify-center items-center">
                                {Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                    key={i}
                                    color={i < item.rating ? '#facc15' : '#AEAEAE'} // 黄色かグレー
                                    className="w-5 h-5"
                                />
                                ))}
                            </div>
                            <p className='text-[#818181]'>
                                {new Date(item.created_at).toLocaleString("ja-JP", {
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </li>
                    ))}
                    </ul>
                )}
            </section>
            </main>
            <Footer />
        </div>
    );
}
