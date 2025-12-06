import Image from "next/image";
import style from "./index.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <a href="/" className={style.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={style.logo}
          width={180}
          height={62}
          priority
        />
      </a>
    </header>
  );
}
