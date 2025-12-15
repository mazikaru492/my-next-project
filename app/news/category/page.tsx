import { getNewsList } from "@/app/lids/microcms";
import NewsList from "@/app/components/NewsList";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { constents: news } = await getNewsList({
    filters: `category[equals]${params.id}`,
  });
  return <NewsList news={news} />;
}
