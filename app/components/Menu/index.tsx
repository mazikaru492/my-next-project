"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import style from "./index.module.css";

export default function Menu() {
  const [is0pen, set0pen] = useState<boolean>(false);
  const open = () => set0pen(true);
  const close = () => set0pen(false);
  return (
    <div>
      <nav className={cx(style.nav, is0pen && style.opne)}>
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
        <button className={cx(style.bootton, style.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={style.button}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}
