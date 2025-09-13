"use client";

import Image from "next/image";
import Link from "next/link";
import { FoodItem } from "@/app/types/item";
import clsx from 'clsx';

type Props = {
    item: FoodItem;
};

export default function FoodList ({ item }: Props){
    const imageSrc = `/${item.category}.png`;
    return(
        <div>
            <Link href={`/item/${item.id}`}>
            <li
                className={clsx(
                    'custom-shadow mb-4 p-2 h-[105px] flex relative rounded-xs',
                    item.is_priority
                    ? 'p-[4px] bg-gradient-to-r from-[#EA2E2E] to-[#FFED63]'
                    : 'border border-gray-300'
                )}
                >
                <div className="flex w-full rounded-xs bg-[#DBE7F1] p-2">
                    <Image
                    src={imageSrc}
                    alt=""
                    width={75}
                    height={75}
                    className="my-auto"
                    />
                    <section className="mx-3">
                    <h3 className="font-black text-[21px] w-[155px]">{item.name}</h3>
                    <p className="text-[12px] text-stone-500 w-[155px] h-[50px]">{item.message}</p>
                    </section>
                    <p className="absolute right-7 top-1/3 font-bold">{item.exp_points}pt</p>
                </div>
            </li>
            </Link>
        </div>
    )
}