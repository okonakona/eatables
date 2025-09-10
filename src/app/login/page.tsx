"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("mother@example.com");
    const [password, setPassword] = useState("password123");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await fetch("https://click.ecc.ac.jp/ecc/kendo/works/2/DB/login.php", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ email, password }).toString(),
            });

            const data = await res.json();

            if (data.status === "success") {
                sessionStorage.setItem("user", JSON.stringify(data.user));

                // role によってリダイレクト
                if (data.user.role === "mother") {
                router.push("/parent"); 
                } else {
                router.push("/child");
                }
            } else {
                setMessage("ログイン失敗: " + data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setMessage("サーバーに接続できません");
        }
    };

    return (
        <main className="bg-[#FFBC44] h-screen">
            <div className=" p-7 pt-20">
                <div className="bg-white p-10 rounded-xl border-[#DBDBDB] border-4 relative">
                <div className="w-[50px] h-[5px] rounded-md -rotate-45 border-[#EC6F7C] border-4 absolute left-0 -top-1"></div>
                <div className="w-[50px] h-[5px] rounded-md -rotate-45 border-[#EC6F7C] border-4 absolute right-0 -bottom-1"></div>
                <p className="text-xl font-bold mb-4">ログイン</p>
                    <div className="mb-3">
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full rounded-md"
                        placeholder="メールアドレス"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full rounded-md"
                        placeholder="パスワード"
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        className="custom-button w-[200px] mt-5 m-auto"
                    >
                        ログイン
                    </button>
                    {message && <p className="mt-3 text-red-500">{message}</p>}
                </div>
            </div>
            <div className="w-[100px] h-[15px] bg-[#DBDBDB] m-7 rounded"></div>
            <hr className="w-screen" />
            <div className="w-[100px] h-[15px] bg-[#DBDBDB] m-7 rounded"></div>
        </main>
    );
}
