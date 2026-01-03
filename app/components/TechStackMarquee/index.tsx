import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiDocker,
  SiLinux,
  SiNginx,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiPython,
  SiGo,
  SiRust,
  SiSwift,
  SiKotlin,
  SiPhp,
  SiFlutter,
  SiAmazon,
  SiGooglecloud,
  SiMicrosoftazure,
  SiKubernetes,
  SiTerraform,
  SiVercel,
  SiFirebase,
  SiSupabase,
  SiVuedotjs,
  SiSvelte,
  SiPrisma,
  SiVite,
  SiGit,
  SiSlack,
  SiFigma,
  SiNotion,
  SiMongodb,
  SiExpress,
  SiJest,
  SiWebpack,
  SiPrettier,
  SiAngular,
  SiDjango,
  SiLaravel,
  SiSpring,
  SiMysql,
  SiElasticsearch,
  SiRabbitmq,
  SiApachekafka,
  SiJenkins,
  SiGitlab,
  SiJira,
  SiJava,
  SiCplusplus,
  SiCsharp,
  SiRuby,
  SiScala,
  SiNuxtdotjs,
  SiBootstrap,
  SiSass,
  SiRubyonrails,
  SiNestjs,
  SiDotnet,
  SiFastify,
  SiCircleci,
  SiGrafana,
  SiPrometheus,
  SiAnsible,
  SiPostman,
  SiSqlite,
  SiApachecassandra,
} from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";
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
    label: "Python",
    Icon: SiPython,
    colorClass: "text-yellow-300",
    url: "https://www.python.org",
  },
  {
    label: "Go",
    Icon: SiGo,
    colorClass: "text-cyan-400",
    url: "https://go.dev",
  },
  {
    label: "Rust",
    Icon: SiRust,
    colorClass: "text-orange-400",
    url: "https://www.rust-lang.org",
  },
  {
    label: "Swift",
    Icon: SiSwift,
    colorClass: "text-orange-500",
    url: "https://swift.org",
  },
  {
    label: "Kotlin",
    Icon: SiKotlin,
    colorClass: "text-purple-400",
    url: "https://kotlinlang.org",
  },
  {
    label: "PHP",
    Icon: SiPhp,
    colorClass: "text-indigo-300",
    url: "https://www.php.net",
  },
  {
    label: "Flutter",
    Icon: SiFlutter,
    colorClass: "text-blue-400",
    url: "https://flutter.dev",
  },
  {
    label: "Vue.js",
    Icon: SiVuedotjs,
    colorClass: "text-emerald-400",
    url: "https://vuejs.org",
  },
  {
    label: "Svelte",
    Icon: SiSvelte,
    colorClass: "text-orange-500",
    url: "https://svelte.dev",
  },
  {
    label: "Angular",
    Icon: SiAngular,
    colorClass: "text-red-500",
    url: "https://angular.io",
  },
  {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    colorClass: "text-teal-300",
    url: "https://tailwindcss.com",
  },
  {
    label: "Vite",
    Icon: SiVite,
    colorClass: "text-purple-400",
    url: "https://vitejs.dev",
  },
  {
    label: "GraphQL",
    Icon: SiGraphql,
    colorClass: "text-fuchsia-300",
    url: "https://graphql.org",
  },
  {
    label: "Prisma",
    Icon: SiPrisma,
    colorClass: "text-teal-300",
    url: "https://www.prisma.io",
  },
  {
    label: "Express",
    Icon: SiExpress,
    colorClass: "text-zinc-100",
    url: "https://expressjs.com",
  },
  {
    label: "Django",
    Icon: SiDjango,
    colorClass: "text-green-600",
    url: "https://www.djangoproject.com",
  },
  {
    label: "Laravel",
    Icon: SiLaravel,
    colorClass: "text-red-500",
    url: "https://laravel.com",
  },
  {
    label: "Spring",
    Icon: SiSpring,
    colorClass: "text-green-500",
    url: "https://spring.io",
  },
  {
    label: "Jest",
    Icon: SiJest,
    colorClass: "text-rose-400",
    url: "https://jestjs.io",
  },
  {
    label: "Webpack",
    Icon: SiWebpack,
    colorClass: "text-blue-400",
    url: "https://webpack.js.org",
  },
  {
    label: "Prettier",
    Icon: SiPrettier,
    colorClass: "text-amber-300",
    url: "https://prettier.io",
  },
  {
    label: "microCMS",
    Icon: RiPagesLine,
    colorClass: "text-violet-300",
    url: "https://microcms.io",
  },
  {
    label: "Java",
    Icon: SiJava,
    colorClass: "text-red-500",
    url: "https://www.java.com",
  },
  {
    label: "C++",
    Icon: SiCplusplus,
    colorClass: "text-blue-500",
    url: "https://isocpp.org",
  },
  {
    label: "C#",
    Icon: SiCsharp,
    colorClass: "text-purple-500",
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    label: "Ruby",
    Icon: SiRuby,
    colorClass: "text-red-400",
    url: "https://www.ruby-lang.org",
  },
  {
    label: "Scala",
    Icon: SiScala,
    colorClass: "text-red-600",
    url: "https://www.scala-lang.org",
  },
  {
    label: "Nuxt.js",
    Icon: SiNuxtdotjs,
    colorClass: "text-green-400",
    url: "https://nuxt.com",
  },
  {
    label: "Bootstrap",
    Icon: SiBootstrap,
    colorClass: "text-purple-500",
    url: "https://getbootstrap.com",
  },
  {
    label: "Sass",
    Icon: SiSass,
    colorClass: "text-pink-400",
    url: "https://sass-lang.com",
  },
  {
    label: "Ruby on Rails",
    Icon: SiRubyonrails,
    colorClass: "text-red-500",
    url: "https://rubyonrails.org",
  },
  {
    label: "NestJS",
    Icon: SiNestjs,
    colorClass: "text-red-500",
    url: "https://nestjs.com",
  },
];

const ROW_2: Item[] = [
  {
    label: "AWS",
    Icon: SiAmazon,
    colorClass: "text-orange-400",
    url: "https://aws.amazon.com",
  },
  {
    label: "Google Cloud",
    Icon: SiGooglecloud,
    colorClass: "text-blue-400",
    url: "https://cloud.google.com",
  },
  {
    label: "Azure",
    Icon: SiMicrosoftazure,
    colorClass: "text-sky-400",
    url: "https://azure.microsoft.com",
  },
  {
    label: "Kubernetes",
    Icon: SiKubernetes,
    colorClass: "text-blue-500",
    url: "https://kubernetes.io",
  },
  {
    label: "Docker",
    Icon: SiDocker,
    colorClass: "text-sky-300",
    url: "https://www.docker.com",
  },
  {
    label: "Terraform",
    Icon: SiTerraform,
    colorClass: "text-purple-400",
    url: "https://www.terraform.io",
  },
  {
    label: "Vercel",
    Icon: SiVercel,
    colorClass: "text-zinc-100",
    url: "https://vercel.com",
  },
  {
    label: "Firebase",
    Icon: SiFirebase,
    colorClass: "text-amber-400",
    url: "https://firebase.google.com",
  },
  {
    label: "Supabase",
    Icon: SiSupabase,
    colorClass: "text-emerald-400",
    url: "https://supabase.com",
  },
  {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    colorClass: "text-sky-400",
    url: "https://www.postgresql.org",
  },
  {
    label: "MongoDB",
    Icon: SiMongodb,
    colorClass: "text-green-400",
    url: "https://www.mongodb.com",
  },
  {
    label: "MySQL",
    Icon: SiMysql,
    colorClass: "text-blue-500",
    url: "https://www.mysql.com",
  },
  {
    label: "Redis",
    Icon: SiRedis,
    colorClass: "text-rose-400",
    url: "https://redis.io",
  },
  {
    label: "Elasticsearch",
    Icon: SiElasticsearch,
    colorClass: "text-teal-300",
    url: "https://www.elastic.co",
  },
  {
    label: "Git",
    Icon: SiGit,
    colorClass: "text-orange-500",
    url: "https://git-scm.com",
  },
  {
    label: "GitHub",
    Icon: SiGithub,
    colorClass: "text-zinc-200",
    url: "https://github.com",
  },
  {
    label: "GitLab",
    Icon: SiGitlab,
    colorClass: "text-orange-400",
    url: "https://gitlab.com",
  },
  {
    label: "Linux",
    Icon: SiLinux,
    colorClass: "text-amber-200",
    url: "https://www.linux.org",
  },
  {
    label: "Nginx",
    Icon: SiNginx,
    colorClass: "text-emerald-300",
    url: "https://nginx.org",
  },
  {
    label: "RabbitMQ",
    Icon: SiRabbitmq,
    colorClass: "text-orange-500",
    url: "https://www.rabbitmq.com",
  },
  {
    label: "Kafka",
    Icon: SiApachekafka,
    colorClass: "text-zinc-100",
    url: "https://kafka.apache.org",
  },
  {
    label: "Jenkins",
    Icon: SiJenkins,
    colorClass: "text-red-400",
    url: "https://www.jenkins.io",
  },
  {
    label: "Figma",
    Icon: SiFigma,
    colorClass: "text-rose-400",
    url: "https://www.figma.com",
  },
  {
    label: "Slack",
    Icon: SiSlack,
    colorClass: "text-fuchsia-300",
    url: "https://slack.com",
  },
  {
    label: "Notion",
    Icon: SiNotion,
    colorClass: "text-zinc-100",
    url: "https://www.notion.so",
  },
  {
    label: "Jira",
    Icon: SiJira,
    colorClass: "text-blue-500",
    url: "https://www.atlassian.com/software/jira",
  },
  {
    label: "ASP.NET Core",
    Icon: SiDotnet,
    colorClass: "text-purple-500",
    url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
  },
  {
    label: "Fastify",
    Icon: SiFastify,
    colorClass: "text-zinc-100",
    url: "https://fastify.dev",
  },
  {
    label: "CircleCI",
    Icon: SiCircleci,
    colorClass: "text-zinc-100",
    url: "https://circleci.com",
  },
  {
    label: "Grafana",
    Icon: SiGrafana,
    colorClass: "text-orange-400",
    url: "https://grafana.com",
  },
  {
    label: "Prometheus",
    Icon: SiPrometheus,
    colorClass: "text-orange-500",
    url: "https://prometheus.io",
  },
  {
    label: "Ansible",
    Icon: SiAnsible,
    colorClass: "text-red-500",
    url: "https://www.ansible.com",
  },
  {
    label: "Postman",
    Icon: SiPostman,
    colorClass: "text-orange-400",
    url: "https://www.postman.com",
  },
  {
    label: "SQLite",
    Icon: SiSqlite,
    colorClass: "text-blue-400",
    url: "https://www.sqlite.org",
  },
  {
    label: "Cassandra",
    Icon: SiApachecassandra,
    colorClass: "text-cyan-300",
    url: "https://cassandra.apache.org",
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
        {repeated.map((item, index) => {
          // 安全装置: Iconがundefinedの場合はスキップ
          if (!item.Icon) {
            console.warn(`Icon is undefined for item: ${item.label}`);
            return null;
          }

          return (
            <a
              key={`${item.label}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex flex-col items-center justify-center no-underline opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
            >
              <item.Icon
                className={`h-10 w-10 ${item.colorClass}`}
                aria-hidden
              />
              <span className="text-sm font-medium text-gray-300 mt-2">
                {item.label}
              </span>
            </a>
          );
        })}
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
