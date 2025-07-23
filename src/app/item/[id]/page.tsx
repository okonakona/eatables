import ItemDetail from "./ItemDetail";

interface PageProps {
    params: { id: string };
}

export default function Page({ params }: PageProps) {
    return <ItemDetail id={params.id} />;
}