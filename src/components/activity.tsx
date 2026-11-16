import ActivityClient from "@/components/activity-client";
import { getCombinedContributions } from "@/lib/contributions";

export default async function Activity() {
  const stats = await getCombinedContributions();

  if (!stats) return null;

  const max = Math.max(1, ...stats.days.map((day) => day.count));

  return <ActivityClient days={stats.days} max={max} />;
}
