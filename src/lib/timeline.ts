import type { ContributionDay } from "@/lib/contributions";

export const STEP_SECONDS = 60 / 96 / 4;

export interface Hit {
  row: number;
  velocity: number;
}

export interface Step {
  hits: Array<Hit>;
}

export function buildTimeline(days: Array<ContributionDay>, max: number) {
  const columns = Math.max(1, Math.floor(days.length / 7));

  const steps: Array<Step> = Array.from({ length: columns }, (_, column) => {
    const hits: Array<Hit> = [];

    for (let row = 0; row < 7; row += 1) {
      const day = days[column * 7 + row];
      if (!day || day.count === 0) continue;
      hits.push({ row, velocity: 0.6 + Math.min(1, day.count / max) * 0.4 });
    }

    return { hits };
  });

  return { columns, steps };
}
