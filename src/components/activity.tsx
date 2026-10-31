import Section from "@/components/section";
import { ArrowLink } from "@/components/ui/arrow-link";
import { getCombinedContributions } from "@/lib/contributions";

function opacity(count: number) {
  if (count === 0) return 0.08;
  if (count < 2) return 0.3;
  if (count < 4) return 0.5;
  if (count < 8) return 0.72;
  return 1;
}

export default async function Activity() {
  const stats = await getCombinedContributions();

  if (!stats) return null;

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
      <div className="grid auto-cols-fr grid-flow-col grid-rows-7 gap-[3px] sm:hidden">
        {stats.days.slice(-182).map(({ date, count }) => (
          <span
            key={date}
            title={`${date}: ${count} ${count === 1 ? "contribution" : "contributions"}`}
            className="aspect-square w-full rounded-[2px] bg-primary"
            style={{ opacity: opacity(count) }}
          />
        ))}
      </div>

      <div className="hidden auto-cols-fr grid-flow-col grid-rows-7 gap-[3px] sm:grid">
        {stats.days.map(({ date, count }) => (
          <span
            key={date}
            title={`${date}: ${count} ${count === 1 ? "contribution" : "contributions"}`}
            className="aspect-square w-full rounded-[2px] bg-primary"
            style={{ opacity: opacity(count) }}
          />
        ))}
      </div>
    </Section>
  );
}
