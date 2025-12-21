import { getNewsList } from "@/app/lids/microcms";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import NewsList from "@/app/components/NewsList";
import Pagination from "@/app/components/Pagination";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q,
  });

  return (
    <>
      <NewsList news={news} />
    </>
  );
}
