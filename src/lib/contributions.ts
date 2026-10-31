export interface ContributionDay {
  date: string;
  count: number;
}

export interface CombinedContributions {
  days: Array<ContributionDay>;
}

const ACCOUNTS = ["sm-sami", "mhmdsami"];

async function fetchAccount(login: string): Promise<Array<ContributionDay>> {
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
  const accounts = await Promise.all(ACCOUNTS.map(fetchAccount));
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
