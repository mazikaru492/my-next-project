import Link from "next/link";
import Image from "next/image";
import style from "./index.module.css";

export default function Menu() {
  return (
    <div>
      <nav className={style.nav}>
        <ul className={style.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <button className={style.button}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
