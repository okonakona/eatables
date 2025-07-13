import Image from "next/image";
import Link from "next/link";

export default function FoodList (){
    return(
        <div>
            <Link href="/">
                <li className="custom-shadow mb-2 p-4 flex">
                    <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto" />
                    <section className="mx-3">
                        <h3 className="font-black text-[21px]">チーズ</h3>
                        <p className="text-[12px] text-stone-500">冷蔵庫開けてすぐ右にあるよ</p>
                    </section>
                </li>
            </Link>
        </div>
    )
}