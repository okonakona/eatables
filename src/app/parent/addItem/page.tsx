

const AddItem = () => {
    return (
        <section className="m-7">
            <h1>食品追加</h1>
            <form action="" method="POST">
                <div className="custom-shadow">
                    <label htmlFor=""></label>
                        <input type="text" name="" placeholder="食べていいもの" className="custom-border border-[#E7F0F7]"/>
                </div>
                <div>
                    <label htmlFor=""></label>
                    <textarea name="" id=""  placeholder="例）冷蔵庫開けてすぐ左側にあるよ" className="custom-shadow"></textarea>
                </div>
                <div>
                    <label htmlFor=""></label>
                </div>
            </form>
        </section>
    )
};

export default AddItem;
