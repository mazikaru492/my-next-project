import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiDocker,
  SiLinux,
  SiGnubash,
  SiNginx,
  SiPostgresql,
  SiRedis,
  SiGraphql,
} from "react-icons/si";
import {
  RiShieldKeyholeLine,
  RiGlobalLine,
  RiPagesLine,
} from "react-icons/ri";

type Item = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const ROW_1: Item[] = [
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "React", Icon: SiReact },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "microCMS", Icon: RiPagesLine },
  { label: "GitHub", Icon: SiGithub },
  { label: "Docker", Icon: SiDocker },
];

const ROW_2: Item[] = [
  { label: "Linux", Icon: SiLinux },
  { label: "Bash", Icon: SiGnubash },
  { label: "Nginx", Icon: SiNginx },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "Redis", Icon: SiRedis },
  { label: "GraphQL", Icon: SiGraphql },
  { label: "Web Security", Icon: RiShieldKeyholeLine },
  { label: "Networking", Icon: RiGlobalLine },
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
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90"
          >
            <item.Icon className="h-4 w-4 text-white/75" aria-hidden />
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
