import ItemDetail from "./ItemDetail";

export default function Page({ params }: {params}:any) {
    return <ItemDetail id={params.id} />;
}
