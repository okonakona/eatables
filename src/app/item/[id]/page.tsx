import ItemDetail from "./ItemDetail";

// ✅ Promise型として params を明示
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    return <ItemDetail id={resolvedParams.id} />;
}
