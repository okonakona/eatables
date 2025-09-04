import Link from "next/link";
import HeaderList from "@/components/HeaderList";
import MainCnt from "@/components/MainCnt";


const ParentTop = () => {
    return(
        <section className="m-7">
            <header className="fixed left-0 top-5">
                <div className="w-screen text-center before:content-['レベル']">
                    <h1 className="font-bold text-[2rem] m-[-5px]">5</h1>
                    <div className="w-64 h-4 rounded-full bg-gray-300 m-auto">
                        <div
                            className="h-4 rounded-full bg-gradient-to-r from-[#A5FEF9] to-[#FFB8BF] border-gray-300 border-3 " style={{ width: '75%' }}
                        ></div>
                    </div>
                    <p className="m-2">次のレベルまで......あと10pt</p>
                </div>
                <HeaderList /> 
            </header>
            <MainCnt />
            <footer className="bg-white bottom-0 left-0 fixed min-w-screen h-17 text-center text-[15px]/17">
                <Link href="/">メニュー</Link>
            </footer>
        </section>
    )
}

export default ParentTop;
