import Link from "next/link";
import HelloBox from "@/components/HelloBox";


export default function Home() {
  const baseURL = "https://click.ecc.ac.jp/ecc/kendo/works/2/DB/index.php";
  fetch(baseURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    })  
  return (
    <>
      <div className="m-10">
        <h1 className="flex justify-center bg-[#DBE7F1] text-[30px] rounded custom-shadow">
          <Link href="/parent">parentへ</Link>
        </h1>
        <h2 className="flex justify-center bg-[#DBE7F1] text-[30px] rounded custom-shadow mt-10">
          <Link href="/child">childへ</Link>
        </h2>
        <HelloBox />
      </div>
    </>
  );
}
