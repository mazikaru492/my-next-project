import Hero from "@/app/components/Hero";
import Sheet from "@/app/components/sheet";

export const revalidate = 60;

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
