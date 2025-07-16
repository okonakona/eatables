import Link from "next/link";
import HeaderList from "@/components/HeaderList";
import MainCnt from "@/components/MainCnt";


const ParentTop = () => {
    return(
        <section className="m-7">
            <header>
                <div className="text-center">
                    <h1>5</h1>
                    <p>次のレベルまで......あと</p>
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
