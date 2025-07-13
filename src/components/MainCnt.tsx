import FoodList from "./FoodList"

export default function MainCnt () {
    return (
        <main>
            <h2 className="text-center m-2">食べていいもの</h2>
            <ul className="overflow-scroll max-h-[400px] pb-30">
                <FoodList />
                <FoodList />
                <FoodList />
                <FoodList />
                <FoodList />
                <FoodList />
                <FoodList />
            </ul>
        </main>
    )
}