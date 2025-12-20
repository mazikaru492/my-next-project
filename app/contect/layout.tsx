import Hero from "@/app/components/Hero";
import sheet from "@/app/components/sheet";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <sheet>{children}</sheet>
    </>
  );
}
