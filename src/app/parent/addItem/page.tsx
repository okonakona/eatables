import Image from "next/image";
import Link from "next/link";

const AddItem = () => {
    return (
        <section className="m-7">
            <header>
                <h1 className="">食品を追加</h1>
            </header>
            <main>
                <form action="" method="POST">
                    <div>
                        <label htmlFor="" className="text-[14px]">1. 食品名( 食べていいもの )</label>
                        <div className="custom-shadow my-2 px-7 py-3">
                                <input type="text" name="" placeholder="食べていいもの" className="custom-border border-[#E7F0F7] w-full"/>
                                <button>履歴</button>
                                <button>テンプレ</button>
                                <input type="button" value="優先" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor=""  className="text-[14px]">2. 備考( 場所や食べ方など )</label>
                        <div className="custom-shadow  my-2">
                            <textarea name="" id=""  placeholder="例）冷蔵庫開けてすぐ左側にあるよ" className="w-full text-[12px] min-h-24 p-3"></textarea>
                        </div>
                    </div>
                    <div>
                        <label htmlFor=""  className="text-[14px]">3. カテゴリー( 近いものを選択してください )</label>
                        <div className="flex flex-wrap justify-between gap-3 mt-2">
                            <label><input type="radio" name="category" id="" className="sr-only peer" />
                                <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto custom-shadow p-2 peer-checked:bg-amber-400" />
                            </label>
                            <label><input type="radio" name="category" id="" className="sr-only peer" />
                                <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto custom-shadow p-2 peer-checked:bg-amber-400" />
                            </label>
                            <label><input type="radio" name="category" id="" className="sr-only peer" />
                                <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto custom-shadow p-2 peer-checked:bg-amber-400" />
                            </label>
                            <label><input type="radio" name="category" id="" className="sr-only peer" />
                                <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto custom-shadow p-2 peer-checked:bg-amber-400" />
                            </label>
                            <label><input type="radio" name="category" id="" className="sr-only peer" />
                                <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto custom-shadow p-2 peer-checked:bg-amber-400" />
                            </label>
                            <label><input type="radio" name="category" id="" className="sr-only peer" />
                                <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto custom-shadow p-2 peer-checked:bg-amber-400" />
                            </label>
                            <label><input type="radio" name="category" id="" className="sr-only peer" />
                                <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto custom-shadow p-2 peer-checked:bg-amber-400" />
                            </label>
                            <label><input type="radio" name="category" id="" className="sr-only peer" />
                                <Image  src="/foodMilk.svg" alt="" width={70} height={75} className="my-auto custom-shadow p-2 peer-checked:bg-amber-400" />
                            </label>
                        </div>
                    </div>
                    <div className=" my-5">
                        <input type="submit" value="追加"  className="custom-button  w-full"/>
                    </div>
                </form>
            </main>
            <footer className="bg-white bottom-0 left-0 fixed min-w-screen h-15 text-[15px]/15">
                <Link href="/parent" className="flex justify-center gap-5">
                    <Image src="/backPage.svg" alt="" width={0} height={0} className="w-auto h-auto" />
                    <p className="font-black">戻る</p>
                </Link>
            </footer>


        </section>
    )
};

export default AddItem;
