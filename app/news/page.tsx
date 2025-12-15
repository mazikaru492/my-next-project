import { getNewsList } from "@/app/lids/microcms";
import NewsList from "@/app/components/NewsList";

export default async function Page() {
  const { contents: news } = await getNewsList();
  return <NewsList news={news} />;
}
