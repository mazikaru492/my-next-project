import Image from "next/image";
import style from "./index.module.css";
import { formatDate } from "@/app/lids/utils";

type Props = {
  data: string;
};
export default function Data({ data }: Props) {
  return (
    <span className={style.data}>
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      {formatDate(data)}
    </span>
  );
}
