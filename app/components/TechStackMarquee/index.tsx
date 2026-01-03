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
};

const ROW_1: Item[] = [
  { label: "Next.js", Icon: SiNextdotjs, colorClass: "text-zinc-100" },
  { label: "TypeScript", Icon: SiTypescript, colorClass: "text-sky-400" },
  { label: "React", Icon: SiReact, colorClass: "text-cyan-300" },
  { label: "Node.js", Icon: SiNodedotjs, colorClass: "text-emerald-400" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, colorClass: "text-teal-300" },
  { label: "microCMS", Icon: RiPagesLine, colorClass: "text-violet-300" },
  { label: "GitHub", Icon: SiGithub, colorClass: "text-zinc-200" },
  { label: "Docker", Icon: SiDocker, colorClass: "text-sky-300" },
];

const ROW_2: Item[] = [
  { label: "Linux", Icon: SiLinux, colorClass: "text-amber-200" },
  { label: "Bash", Icon: SiGnubash, colorClass: "text-lime-300" },
  { label: "Nginx", Icon: SiNginx, colorClass: "text-emerald-300" },
  { label: "PostgreSQL", Icon: SiPostgresql, colorClass: "text-sky-400" },
  { label: "Redis", Icon: SiRedis, colorClass: "text-rose-400" },
  { label: "GraphQL", Icon: SiGraphql, colorClass: "text-fuchsia-300" },
  {
    label: "Web Security",
    Icon: RiShieldKeyholeLine,
    colorClass: "text-emerald-200",
  },
  { label: "Networking", Icon: RiGlobalLine, colorClass: "text-indigo-300" },
];

function MarqueeRow({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={
          "flex w-max min-w-full items-center gap-16 will-change-transform hover:[animation-play-state:paused] " +
          (reverse ? "animate-marquee-reverse" : "animate-marquee")
        }
      >
        {repeated.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
          >
            <item.Icon className={`h-12 w-12 ${item.colorClass}`} aria-hidden />
            <span className="sr-only">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackMarquee() {
  return (
    <section className="w-full bg-[var(--color-bg-sub)] py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Tech Stack
          </h2>
          <p className="mt-2 text-sm text-white/60">
            技術スタック（無限スクロール）
          </p>
        </div>

        <div className="ml-auto mr-0 mt-8 w-full max-w-5xl space-y-6">
          <MarqueeRow items={ROW_1} />
          <MarqueeRow items={ROW_2} reverse />
        </div>
      </div>
    </section>
  );
}
