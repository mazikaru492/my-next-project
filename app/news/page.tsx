import { getNewsList } from "@/app/lids/microcms";
import NewsList from "@/app/components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/constants";

export default async function Page() {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return <NewsList news={news} />;
}
