
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import RatingStars from "@/components/RatingStars";
import { FoodItem } from "@/app/types/item";

const mockItems: FoodItem[] = [
    { id: 1, name: "トマト", category: "vegetable", isPriority: false, message:"野菜室開けて右" },
    { id: 2, name: "チーズ", category: "milk", isPriority: true, message:"冷蔵庫開けてすぐ右にあるよ" },
    { id: 3, name: "りんご", category: "fruit", isPriority: false, message:"レンジ上のバスケットの中" },
    { id: 4, name: "アイス", category: "snack", isPriority: false, message:"冷凍庫の中" },
];

interface Props {
    params: {
        id: string;
    };
}


export default function ItemDetail ({params}: Props) {
    const router = useRouter();
    const itemId = Number(params.id);
    const item = mockItems.find((i) => i.id === itemId);
    const imageSrc = `/${item.category}.svg`;

    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (!item) {
          router.push('/child/'); // IDが無効なら戻す
        }
    }, [item, router]);

    const handleSubmit = () => {
        const eatenItems = JSON.parse(localStorage.getItem('eatenItems') || '[]');
        eatenItems.push({ ...item, rating });
        localStorage.setItem('eatenItems', JSON.stringify(eatenItems));
        router.push('/child/');
    };

    if (!item) return null;

    return (
        <div>
            <main className="custom-shadow mx-10 my-15 h-[500px] p-7">
                <h1><Image  src={imageSrc} alt="" width={140} height={145} className="mx-auto" /></h1>
                <section className="font-black my-5 text-center">
                    <h2 className="text-[36px]">{item.name}</h2>
                    <p className="text-[15px] mt-5 h-[40px]">{item.message}</p>
                    <section className="m-5">
                        <h3>好き度</h3>
                        <RatingStars rating={rating} onRate={setRating} />
                    </section>
                    <button onClick={handleSubmit} className="custom-button w-[200px] mt-5">食べた</button>
                </section>
            </main>
            <footer className="bg-[#D9D9D9] bottom-0 left-0 fixed min-w-screen h-15 text-[15px]/15">
                <Link href="/parent" className="flex justify-center gap-5">
                    <Image src="/backPage.svg" alt="" width={0} height={0} className="w-auto h-auto" />
                    <p className="font-black">戻る</p>
                </Link>
            </footer>
        </div>
    )
}