import Link from "next/link";
import HelloBox from "@/components/HelloBox";


export default function Home() {
  return (
    <>
      <h1>
        <Link href="/parent">parentへ</Link>
      </h1>

      <h2>
        <Link href="/child">childへ</Link>
      </h2>
      <HelloBox />
    </>
  );
}
