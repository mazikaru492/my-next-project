import Image from "next/image";
import style from "./index.module.css";

type Props = {
  data: string;
};
export default function Data({ data }: Props) {
  retun(
    <span className={style.data}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      {data}
    </span>
  );
}
