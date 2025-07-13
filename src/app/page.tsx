import Link from "next/link";
import HelloBox from "@/components/HelloBox";


export default function Home() {
  return (
    <>
      <div className="m-10">
        <h1 className="flex justify-center bg-[#DBE7F1] text-[30px] rounded custom-shadow">
          <Link href="/parent">parentへ</Link>
        </h1>
        <h2 className="flex justify-center bg-[#DBE7F1] text-[30px] rounded shadow-[_inset_0px_5px_7px_0px_rgba(0,0,0,0.25)] mt-10">
          <Link href="/child">childへ</Link>
        </h2>
        <HelloBox />
      </div>
    </>
  );
}
