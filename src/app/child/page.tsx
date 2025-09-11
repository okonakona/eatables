"use client";

import Link from "next/link";
import HeaderList from "@/components/HeaderList";
import MainCnt from "@/components/MainCnt";
import { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    role: string;
    family_id: number;
    level: number;
    experience: number;
}

const ChildTop = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const keysStr = sessionStorage.getItem("keys");
        if (!keysStr) {
            console.warn("ログイン情報が見つかりません。");
            return;
        }
    
        try {
            const { email, password } = JSON.parse(keysStr);
    
            fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/login.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ email, password }).toString(),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === "success") {
                        setUser(data.user);
                    } else {
                        console.error("ユーザー情報取得失敗:", data.message);
                    }
                })
                .catch((err) => console.error("通信エラー:", err));
        } catch (err) {
            console.error("keys の JSON.parse に失敗:", err, keysStr);
        }
    }, []);

    const nextExp = user ? user.level * 10 : 0;
    const remainExp = user ? nextExp - user.experience : 0;

    return (
        <section className="m-7">
            <header className="fixed left-0 top-5 w-screen">
                <div className="text-center before:content-['レベル']">
                    <h1 className="font-bold text-[2rem] m-[-5px]">
                        {user ? user.level : "--"}
                    </h1>
                    <div className="w-64 h-4 rounded-full bg-gray-300 m-auto">
                        <div
                            className="h-4 rounded-full bg-gradient-to-r from-[#A5FEF9] to-[#FFB8BF]"
                            style={{
                                width: user
                                    ? `${(user.experience / nextExp) * 100}%`
                                    : "0%",
                            }}
                        ></div>
                    </div>
                    <p className="m-2">
                        次のレベルまで... {user ? `${remainExp}pt` : "--"}
                    </p>
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

export default ChildTop;
