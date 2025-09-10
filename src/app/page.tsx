"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "mother") {
      router.replace("/mother");
    } else if (role === "child") {
      router.replace("/child");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return <p>Loading...</p>;
}
