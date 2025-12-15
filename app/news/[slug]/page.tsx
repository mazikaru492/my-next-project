import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/libs/microcms";
import article from "@/app/components/Article";
import ButtonLink from "@/app/components/ButtonLink";
import style from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};
export default async function Page({ props }: Props) {
  const date = await getNewsDetail(props.params.slug);
  return (
    <>
      <article date={date} />
      <div className={style.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
