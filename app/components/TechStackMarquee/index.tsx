type Item = {
  label: string;
};

const ROW_1: Item[] = [
  { label: "Next.js" },
  { label: "TypeScript" },
  { label: "React" },
  { label: "Node.js" },
  { label: "Tailwind CSS" },
  { label: "microCMS" },
  { label: "GitHub" },
  { label: "Docker" },
];

const ROW_2: Item[] = [
  { label: "Linux" },
  { label: "Bash" },
  { label: "Nginx" },
  { label: "PostgreSQL" },
  { label: "Redis" },
  { label: "GraphQL" },
  { label: "Web Security" },
  { label: "Networking" },
];

function MarqueeRow({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className={
          "flex w-[200%] gap-3 will-change-transform " +
          (reverse ? "animate-marquee-reverse" : "animate-marquee")
        }
      >
        {doubled.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="w-full bg-black py-10">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="text-xl font-extrabold tracking-tight text-white">
          Tech Stack
        </h2>
        <p className="mt-2 text-sm text-white/65">
          技術スタック（無限スクロール）
        </p>

        <div className="mt-6 space-y-4">
          <MarqueeRow items={ROW_1} />
          <MarqueeRow items={ROW_2} reverse />
        </div>
      </div>
    </section>
  );
}
