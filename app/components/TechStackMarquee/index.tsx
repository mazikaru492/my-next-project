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
import { RiShieldKeyholeLine, RiGlobalLine, RiPagesLine } from "react-icons/ri";
import type { ComponentType } from "react";

type Item = {
  label: string;
  Icon: ComponentType<{ className?: string }>;
  colorClass: string;
  url: string;
};

const ROW_1: Item[] = [
  {
    label: "Next.js",
    Icon: SiNextdotjs,
    colorClass: "text-zinc-100",
    url: "https://nextjs.org",
  },
  {
    label: "TypeScript",
    Icon: SiTypescript,
    colorClass: "text-sky-400",
    url: "https://www.typescriptlang.org",
  },
  {
    label: "React",
    Icon: SiReact,
    colorClass: "text-cyan-300",
    url: "https://react.dev",
  },
  {
    label: "Node.js",
    Icon: SiNodedotjs,
    colorClass: "text-emerald-400",
    url: "https://nodejs.org",
  },
  {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    colorClass: "text-teal-300",
    url: "https://tailwindcss.com",
  },
  {
    label: "microCMS",
    Icon: RiPagesLine,
    colorClass: "text-violet-300",
    url: "https://microcms.io",
  },
  {
    label: "GitHub",
    Icon: SiGithub,
    colorClass: "text-zinc-200",
    url: "https://github.com",
  },
  {
    label: "Docker",
    Icon: SiDocker,
    colorClass: "text-sky-300",
    url: "https://www.docker.com",
  },
];

const ROW_2: Item[] = [
  {
    label: "Linux",
    Icon: SiLinux,
    colorClass: "text-amber-200",
    url: "https://www.linux.org",
  },
  {
    label: "Bash",
    Icon: SiGnubash,
    colorClass: "text-lime-300",
    url: "https://www.gnu.org/software/bash/",
  },
  {
    label: "Nginx",
    Icon: SiNginx,
    colorClass: "text-emerald-300",
    url: "https://nginx.org",
  },
  {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    colorClass: "text-sky-400",
    url: "https://www.postgresql.org",
  },
  {
    label: "Redis",
    Icon: SiRedis,
    colorClass: "text-rose-400",
    url: "https://redis.io",
  },
  {
    label: "GraphQL",
    Icon: SiGraphql,
    colorClass: "text-fuchsia-300",
    url: "https://graphql.org",
  },
  {
    label: "Web Security",
    Icon: RiShieldKeyholeLine,
    colorClass: "text-emerald-200",
    url: "https://owasp.org",
  },
  {
    label: "Networking",
    Icon: RiGlobalLine,
    colorClass: "text-indigo-300",
    url: "https://www.cisco.com",
  },
];

function MarqueeRow({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  const repeated = Array(20).fill(items).flat();

  return (
    <div className="w-full overflow-hidden bg-black">
      <div
        className={
          "flex w-max items-center gap-16 will-change-transform hover:[animation-play-state:paused] " +
          (reverse ? "animate-marquee-reverse" : "animate-marquee")
        }
      >
        {repeated.map((item, index) => (
          <a
            key={`${item.label}-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex flex-col items-center justify-center no-underline opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <item.Icon className={`h-10 w-10 ${item.colorClass}`} aria-hidden />
            <span className="text-sm font-medium text-gray-300 mt-2">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="w-full max-w-none bg-[var(--color-bg-sub)] py-10">
      <div className="mx-auto w-full max-w-none px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Tech Stack
          </h2>
          <p className="mt-2 text-sm text-white/60">
            技術スタック（無限スクロール）
          </p>
        </div>

        <div className="mt-8 w-full max-w-none space-y-6">
          <MarqueeRow items={ROW_1} />
          <MarqueeRow items={ROW_2} reverse />
        </div>
      </div>
    </section>
  );
}
