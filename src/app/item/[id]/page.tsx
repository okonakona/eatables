import ItemDetail from "./ItemDetail";

export default function Page({ params }: { params: { id: string } }) {
    return <ItemDetail id={params.id} />;
}
