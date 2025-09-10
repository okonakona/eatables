"use client";

import Link from "next/link";
import Image from "next/image";

interface FooterProps {
    role?: "mother" | "child"; 
}

export default function Footer({ role }: FooterProps) {
  let path = "/"; // デフォルト
    if (!role && typeof window !== "undefined") {
        const userStr = sessionStorage.getItem("user");
        if (userStr) {
            const user = JSON.parse(userStr);
            role = user.role;
        }
    }

    if (role === "mother") {
        path = "/parent";
    } else if (role === "child") {
        path = "/child";  
    }

    return (
        <footer className="bg-[#D9D9D9] bottom-0 left-0 fixed min-w-screen h-15 text-[15px]/15">
        <Link href={path} className="flex justify-center gap-5">
            <Image
            src="/backPage.svg"
            alt="戻る"
            width={0}
            height={0}
            className="w-auto h-auto"
            />
            <p className="font-black">戻る</p>
        </Link>
        </footer>
    );
}
