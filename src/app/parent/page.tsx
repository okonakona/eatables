import Link from "next/link";
import Image from "next/image";
import HeaderList from "@/components/HeaderList";
import MainCnt from "@/components/MainCnt";

const ParentTop = () => {
    return (
        <section className="m-7">
            <header>
                <h1 className="custom-border my-7">トップページ</h1>
                <HeaderList />
            </header>
            <MainCnt />
            <footer className="bg-[#D9D9D9] bottom-0 left-0 fixed min-w-screen h-15 text-[15px]/15">
                <Link href="/parent/addItem" className="flex justify-center gap-5">
                    <Image src="/addBtn.svg" alt="" width={0} height={0} className="w-auto h-auto" />
                    <p className="font-black">食品を追加</p>
                </Link>
            </footer>

        </section>
    );
};

export default ParentTop;
