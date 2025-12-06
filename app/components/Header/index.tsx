import Image from "next/image";
import Link from "next/link";
import style from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/" className={style.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={style.logo}
          width={180}
          height={62}
          priority
        />
      </Link>
      <nav className={style.nav}>
        <ul className={style.item}>
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
      <Menu />
    </header>
  );
}
