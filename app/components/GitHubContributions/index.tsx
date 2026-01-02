import styles from "./index.module.css";
import {
  getDefaultGitHubLogin,
  getGitHubContributionCalendar,
  type GitHubContributionCalendar,
} from "@/app/lids/github";

function getJapaneseMonthLabel(monthIndex: number): string {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return labels[monthIndex] ?? "";
}

function getLevelForCount(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 12) return 3;
  return 4;
}

function buildMonthLabels(calendar: GitHubContributionCalendar): Array<{
  weekIndex: number;
  label: string;
}> {
  const labels: Array<{ weekIndex: number; label: string }> = [];
  let lastMonth: number | null = null;

  calendar.weeks.forEach((week, weekIndex) => {
    const firstDay = week.contributionDays[0];
    if (!firstDay) return;

    const date = new Date(firstDay.date);
    const month = date.getUTCMonth();

    if (lastMonth === null || month !== lastMonth) {
      labels.push({ weekIndex, label: getJapaneseMonthLabel(month) });
      lastMonth = month;
    }
  });

  return labels;
}

type Props = {
  year?: number;
  login?: string;
};

export default async function GitHubContributions({
  year = new Date().getFullYear(),
  login,
}: Props) {
  const resolvedLogin = login ?? getDefaultGitHubLogin();
  if (!resolvedLogin) return null;

  const token = process.env.GITHUB_TOKEN;

  const calendar = await getGitHubContributionCalendar({
    login: resolvedLogin,
    year,
    token,
    revalidateSeconds: 60 * 60,
  });

  // トークンがない/取得に失敗した場合は、軽量なSVG埋め込みにフォールバック
  if (!calendar) {
    const chartUrl = `https://ghchart.rshah.org/${encodeURIComponent(
      resolvedLogin
    )}`;

    return (
      <section className={styles.container}>
        <h2 className={styles.title}>GitHubへの貢献</h2>
        <p className={styles.meta}>
          GitHubの貢献状況（取得には `GITHUB_TOKEN` の設定が推奨）
        </p>
        <div className={styles.graphWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.fallbackImg}
            src={chartUrl}
            alt={`${resolvedLogin} のGitHub貢献`}
            loading="lazy"
          />
        </div>
      </section>
    );
  }

  const monthLabels = buildMonthLabels(calendar);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>GitHubへの貢献</h2>
      <p className={styles.meta}>
        GitHubで{year}年に{calendar.totalContributions}件の貢献がありました。
      </p>

      <div className={styles.graphWrap}>
        <div className={styles.monthRow} aria-hidden>
          {calendar.weeks.map((_, weekIndex) => {
            const label = monthLabels.find((m) => m.weekIndex === weekIndex);
            return (
              <div key={weekIndex} className={styles.month}>
                {label?.label ?? ""}
              </div>
            );
          })}
        </div>

        <div className={styles.gridRow}>
          <div className={styles.weekdayCol} aria-hidden>
            <div className={styles.weekday}></div>
            <div className={styles.weekday}>Mon</div>
            <div className={styles.weekday}></div>
            <div className={styles.weekday}>Wed</div>
            <div className={styles.weekday}></div>
            <div className={styles.weekday}>Fri</div>
            <div className={styles.weekday}></div>
          </div>

          <div
            className={styles.grid}
            role="img"
            aria-label={`${resolvedLogin} の ${year} 年GitHub貢献カレンダー`}
          >
            {calendar.weeks.flatMap((week, weekIndex) =>
              week.contributionDays.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={styles.day}
                  data-level={getLevelForCount(day.contributionCount)}
                  title={`${day.date}: ${day.contributionCount}件`}
                />
              ))
            )}
          </div>
        </div>

        <div className={styles.legend} aria-hidden>
          <span>少ない</span>
          <div className={styles.legendSwatches}>
            {([0, 1, 2, 3, 4] as const).map((level) => (
              <span
                key={level}
                className={styles.legendSwatch}
                data-level={level}
              />
            ))}
          </div>
          <span>もっと</span>
        </div>
      </div>
    </section>
  );
}
