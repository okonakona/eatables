import ItemDetail from "./ItemDetail";

// ✅ サーバーコンポーネントで params を受け取る(エラー対策)
export default function Page({ params }: { params: { id: string } }) {
    return <ItemDetail id={params.id} />;
}