import Link from "next/link";
import Image from "next/image";

export default function HeaderList (){
    return(
        <div>
            <nav className="custom-shadow p-4">
                <ul className="flex justify-between">
                    <Link href="/" className="bg-[#E7F0F7] rounded-xl shadow-[0px_5px_7px_0px_rgba(0,0,0,0.25)] w-[70px] h-[70px] py-1">
                        <Image  src="/requestIcon.svg" alt="" width={0} height={0} className="w-auto h-auto m-auto" />
                        <li className="text-[12px] text-center font-black">おやつ<br />リクエスト</li>
                    </Link>
                    <Link href="/" className="bg-[#E7F0F7] rounded-lg shadow-[0px_5px_7px_0px_rgba(0,0,0,0.25)] w-[70px] h-[70px] py-1">
                        <Image  src="/surveyIcon.svg" alt="" width={0} height={0} className="w-auto h-auto m-auto" />
                        <li className="text-[12px] text-center">ご飯<br />アンケート</li>
                    </Link>
                    <Link href="/" className="bg-[#E7F0F7] rounded-lg shadow-[0px_5px_7px_0px_rgba(0,0,0,0.25)] w-[70px] h-[70px] py-1">
                        <Image  src="/historyIcon.svg" alt="" width={0} height={0} className="w-auto h-auto m-auto" />
                        <li className="text-[12px] text-center">食べたもの<br />履歴</li>
                    </Link>
                </ul>
            </nav> 
        </div>
    )
}