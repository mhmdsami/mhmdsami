import ActivityGrid from "@/components/activity-grid";
import Section from "@/components/section";
import { ArrowLink } from "@/components/ui/arrow-link";
import { getCombinedContributions } from "@/lib/contributions";

export default async function Activity() {
  const stats = await getCombinedContributions();

  if (!stats) return null;

  const max = Math.max(1, ...stats.days.map((day) => day.count));

  return (
    <Section
      id="activity"
      title="Activity"
      aside={
        <ArrowLink href="https://github.com/sm-sami" className="text-sm text-tertiary">
          github
        </ArrowLink>
      }
    >
      <ActivityGrid days={stats.days.slice(-182)} max={max} className="grid sm:hidden" />
      <ActivityGrid days={stats.days} max={max} className="hidden sm:grid" interactive />
    </Section>
  );
}
