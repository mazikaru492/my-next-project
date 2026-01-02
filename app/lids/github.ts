export type GitHubContributionDay = {
  date: string;
  contributionCount: number;
};

export type GitHubContributionCalendar = {
  totalContributions: number;
  weeks: Array<{
    contributionDays: GitHubContributionDay[];
  }>;
};

type GraphQLResponse<T> =
  | { data: T; errors?: Array<{ message: string }> }
  | { data?: T; errors: Array<{ message: string }> };

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

function toIsoUtc(date: Date): string {
  return date.toISOString();
}

export function getDefaultGitHubLogin(): string | undefined {
  return process.env.GITHUB_USERNAME;
}

export async function getGitHubContributionCalendar(params: {
  login: string;
  year: number;
  token?: string;
  revalidateSeconds?: number;
}): Promise<GitHubContributionCalendar | null> {
  const { login, year, token, revalidateSeconds = 60 * 60 } = params;
  if (!token) return null;

  const from = new Date(Date.UTC(year, 0, 1, 0, 0, 0));
  const to = new Date(Date.UTC(year, 11, 31, 23, 59, 59));

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        login,
        from: toIsoUtc(from),
        to: toIsoUtc(to),
      },
    }),
    next: { revalidate: revalidateSeconds },
  });

  if (!res.ok) {
    return null;
  }

  const json = (await res.json()) as GraphQLResponse<{
    user: {
      contributionsCollection: {
        contributionCalendar: GitHubContributionCalendar;
      };
    } | null;
  }>;

  if ("errors" in json && json.errors?.length) {
    return null;
  }

  const calendar =
    json.data?.user?.contributionsCollection.contributionCalendar;
  return calendar ?? null;
}
