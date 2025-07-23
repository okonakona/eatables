import ItemDetail from "./ItemDetail";

export const dynamicParams = true;

interface PageProps {
    params: { id: string };
}
export default async function Page({ params }: PageProps) {
    return <ItemDetail id={params.id} />;
}