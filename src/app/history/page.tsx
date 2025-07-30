'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FoodItem } from '../types/item';

type EatenItem = FoodItem & { rating: number };

export default function HistoryPage() {
    const [eatenItems, setEatenItems] = useState<EatenItem[]>([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('eatenItems') || '[]');
        setEatenItems(stored);
    }, []);



    return (
        <div>
            <main className="p-5">
            <h1 className="text-2xl font-bold mb-4">食べたもの履歴</h1>
            <section>
                {eatenItems.length === 0 ? (
                    <p>まだ何も食べていません。</p>
                ) : (
                    <ul className="space-y-3 flex flex-wrap gap-3">
                    {eatenItems.slice().reverse().map((item) => (
                        <li key={item.id} className="custom-shadow p-1 text-center w-30 h-30 pt-4">
                            <div className='h-[80px]'>
                                <Image  src={`/${item.selectedCategory}.svg`} alt="" width={70} height={75} className="mx-auto my-auto h-[80px]" />
                            </div>
                            <p className="font-bold">{item.name}</p>
                            <div className="flex justify-center items-center">
                                {Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                    key={i}
                                    color={i < item.rating ? '#facc15' : '#AEAEAE'} // 黄色かグレー
                                    className="w-5 h-5"
                                />
                                ))}
                            </div>
                        </li>
                    ))}
                    </ul>
                )}
            </section>
            </main>
            <footer className="bg-[#D9D9D9] bottom-0 left-0 fixed min-w-screen h-15 text-[15px]/15">
                <Link href="/child/" className="flex justify-center gap-5">
                    <Image src="/backPage.svg" alt="" width={0} height={0} className="w-auto h-auto" />
                    <p className="font-black">戻る</p>
                </Link>
            </footer>

        </div>
    );
}
