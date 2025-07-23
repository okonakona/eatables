import ItemDetail from "./ItemDetail";

// 型を明示して補う（重要）
export default function Page({ params }: { params: { id: string } }) {
    return <ItemDetail id={params.id} />;
}

  // ↓これを追加（存在する id を列挙）
export async function generateStaticParams() {
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
    ];
}