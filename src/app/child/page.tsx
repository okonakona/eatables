import Link from "next/link";
import HeaderList from "@/components/HeaderList";
import MainCnt from "@/components/MainCnt";


const ParentTop = () => {
    return(
        <section className="m-7">
            <header>
                <h1>child</h1>
                <HeaderList /> 
            </header>
            <MainCnt />
            <footer className="bg-white bottom-0 left-0 fixed min-w-screen h-17 text-center text-[15px]/17">
                <Link href="/">戻る</Link>
            </footer>
        </section>
    )
}

export default ParentTop;
