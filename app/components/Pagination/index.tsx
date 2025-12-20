import { NEWS_LIST_LIMIT } from "@/app/constants";
import Link from "next/link";
import Styles from "./index.module.css";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={Styles.container}>
        {pages.map((p) => (
          <li className={Styles.list} key={p}>
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} className={Styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${Styles.item} ${Styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
