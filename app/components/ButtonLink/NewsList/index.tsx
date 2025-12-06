import Image from "next/image";
import style from "./index.module.css";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={style.newsItem}>
          <div className={style.link}>
            <Image
              className={style.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
            />
            <dl className={style.contents}>
              <dt className={style.title}>{article.title}</dt>
              <dd className={style.meta}>
                <span className={style.tag}>{article.category.name}</span>
                <span className={style.data}>
                  <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    priority
                  />
                  {article.publishedAt}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
