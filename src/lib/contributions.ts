export interface ContributionDay {
  date: string;
  count: number;
}

export interface CombinedContributions {
  days: Array<ContributionDay>;
}

const ACCOUNTS = ["sm-sami", "mhmdsami"];
const DAY = 86_400_000;

export function alignToWeeks(days: Array<ContributionDay>) {
  if (days.length === 0) return days;

  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const counts = new Map(sorted.map(({ date, count }) => [date, count]));
  const first = Date.parse(`${sorted[0].date}T00:00:00Z`);
  const last = Date.parse(`${sorted[sorted.length - 1].date}T00:00:00Z`);
  const start = first - new Date(first).getUTCDay() * DAY;
  const end = last + (6 - new Date(last).getUTCDay()) * DAY;
  const aligned: Array<ContributionDay> = [];

  for (let time = start; time <= end; time += DAY) {
    const date = new Date(time).toISOString().slice(0, 10);
    aligned.push({ date, count: counts.get(date) ?? 0 });
  }

  return aligned;
}

export async function getContributions(login: string): Promise<Array<ContributionDay>> {
  try {
    const response = await fetch(`https://github.com/users/${login}/contributions`, {
      headers: { "User-Agent": "sam1.space" },
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];

    const html = await response.text();
    const dates = new Map<string, string>();
    const cells = html.match(/<td[^>]*data-date="[^"]+"[^>]*>/g) ?? [];

    for (const cell of cells) {
      const date = cell.match(/data-date="([^"]+)"/)?.[1];
      const id = cell.match(/id="([^"]+)"/)?.[1];
      if (date && id) dates.set(id, date);
    }

    const days: Array<ContributionDay> = [];
    const tooltips = html.match(/<tool-tip[^>]*for="[^"]+"[^>]*>[^<]*/g) ?? [];

    for (const tooltip of tooltips) {
      const id = tooltip.match(/for="([^"]+)"/)?.[1];
      const date = id ? dates.get(id) : undefined;
      if (!date) continue;

      const count = Number(tooltip.match(/(\d+)\s+contribution/)?.[1] ?? 0);
      days.push({ date, count });
    }

    return days;
  } catch {
    return [];
  }
}

export async function getCombinedContributions(): Promise<CombinedContributions | null> {
  const accounts = await Promise.all(ACCOUNTS.map(getContributions));
  const byDate = new Map<string, number>();

  for (const days of accounts) {
    for (const day of days) {
      byDate.set(day.date, (byDate.get(day.date) ?? 0) + day.count);
    }
  }

  if (byDate.size === 0) return null;

  const days = Array.from(byDate.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, count }));

  return { days };
}
