import Link from "next/link"

export default function HeaderList (){
    return(
        <div>
            <ul>
                <li><Link href="/">おやつリクエスト</Link></li>
                <li><Link href="/">ご飯アンケート</Link></li>
                <li><Link href="/">食べたもの履歴</Link></li>
            </ul>
        </div>
    )
}