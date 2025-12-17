import Link from "next/link";
import Image from "next/image";
import style from "./index.module.css";
import { News } from "@/app/lids/microcms";
import Date from "../Data";
import Category from "../Category";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <h1 className={style.title}>{data.title}</h1>
      <p className={style.description}>{data.description}</p>
      <div className={style.meta}>
        {data.category && (
          <Link
            href={`/news/category/${data.category.id}`}
            className={style.categoryLink}
          >
            <Category category={data.category} />
          </Link>
        )}
        <Date data={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={style.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
  );
}
