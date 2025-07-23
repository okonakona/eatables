"use client";

import Image from "next/image";
import Link from "next/link";
import { FoodItem } from "@/app/types/item";
import clsx from 'clsx';

type Props = {
    item: FoodItem;
};


export default function FoodList ({ item }: Props){
    const imageSrc = `/${item.category}.svg`;
    return(
        <div>
            <Link href={`/item/${item.id}`}>
                <li  className={clsx('custom-shadow mb-2 p-4 flex',item.isPriority && 'border-l-8 border-red-500')}>
                    <Image  src={imageSrc} alt="" width={70} height={75} className="my-auto" />
                    <section className="mx-3">
                        <h3 className="font-black text-[21px]">{item.name}</h3>
                        <p className="text-[12px] text-stone-500">{item.message}</p>
                    </section>
                </li>
            </Link>
        </div>
    )
}