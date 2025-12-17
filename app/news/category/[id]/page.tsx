import { getNewsList, getCategorise } from "@/app/lids/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/components/NewsList";
import Category from "@/app/components/Category";
import { NEWS_LIST_LIMIT } from "@/app/constants";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategorise(params.id).catch(notFound);

  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <p>
        <Category category={category} /> の一覧
      </p>
      <NewsList news={news} />
    </>
  );
}
