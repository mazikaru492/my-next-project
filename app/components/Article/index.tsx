import Link from "next/link";
import Image from "next/image";
import style from "./index.module.css";
import { News } from "@/app/lids/microcms";
import Date from "../Data";
import Category from "../Category";

type Props = {
  date: News;
};

export default function article({ date }: Props) {
  return (
    <main>
      <h1 className={style.title}>{date.title}</h1>
      <p className={style.description}>{date.description}</p>
      <div className={style.meta}>
        <Link
          href={`/news/category/${date.category.id}`}
          className={style.categoryLink}
        >
          <Category category={date.category} />
        </Link>
        <Date data={date.publishedAt ?? date.createdAt} />
      </div>
      {date.thumbnail && (
        <Image
          src={date.thumbnail.url}
          alt=""
          className={style.thumbnail}
          width={date.thumbnail.width}
          height={date.thumbnail.height}
        />
      )}
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: date.content }}
      />
    </main>
  );
}
