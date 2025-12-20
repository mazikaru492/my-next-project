import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/lids/microcms";
import Article from "@/app/components/Article";
import ButtonLink from "@/app/components/ButtonLink";
import style from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export const revalidate = 0;

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, { draftKey: searchParams.dk });

  if (!data) {
    notFound();
  }

  return (
    <>
      <Article data={data} />
      <div className={style.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
