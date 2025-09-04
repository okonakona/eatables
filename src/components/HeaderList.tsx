import Link from "next/link";
import Image from "next/image";

export default function HeaderList (){
    return(
        <div>
            <nav className="custom-shadow p-4 mx-7 my-3">
                <ul className="flex justify-around">
                    <Link href="/" className="bg-[#E7F0F7] rounded-xl shadow-[0px_0px_7px_0px_rgba(0,0,0,0.25)] w-[75px] h-[75px] p-1.5">
                        <Image  src="/requestIcon.svg" alt="" width={0} height={0} className="w-auto h-auto m-auto" />
                        <li className="text-[12px] text-center font-black">おやつ<br />リクエスト</li>
                    </Link>
                    <Link href="/" className="bg-[#E7F0F7] rounded-xl shadow-[0px_0px_7px_0px_rgba(0,0,0,0.25)] w-[75px] h-[75px] p-1.5">
                        <Image  src="/surveyIcon.svg" alt="" width={0} height={0} className="w-auto h-auto m-auto" />
                        <li className="text-[12px] text-center font-black">ご飯<br />アンケート</li>
                    </Link>
                    <Link href="/history/" className="bg-[#E7F0F7] rounded-xl shadow-[0px_0px_7px_0px_rgba(0,0,0,0.25)] w-[75px] h-[75px] p-1.5">
                        <Image  src="/historyIcon.svg" alt="" width={0} height={0} className="w-auto h-auto m-auto" />
                        <li className="text-[12px] text-center font-black">食べたもの<br />履歴</li>
                    </Link>
                </ul>
            </nav> 
        </div>
    )
}