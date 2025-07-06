import Link from "next/link";
import HeaderBox from "@/components/HeaderBox";
import MainCnt from "@/components/MainCnt";

const ParentTop = () => {
    return (
        <>
            <header>
                <h1>トップページ</h1>
                <HeaderBox />
            </header>
            <MainCnt />
            <p><Link href="/">戻る</Link></p>

        </>
    );
};

export default ParentTop;
