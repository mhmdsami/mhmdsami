import type { EducationItem } from "@/shared/types";

export default function Education({ education }: { education: EducationItem }) {
  return (
    <div data-reveal>
      <div className="flex items-baseline justify-between gap-4">
        <span className="min-w-0 break-words text-sm font-medium text-foreground">{education.school}</span>
        <span className="ml-auto shrink-0 text-2xs text-tertiary tabular-nums">{education.period}</span>
      </div>
      <p className="mt-1 break-words text-sm text-secondary">{education.degree}</p>
      <p className="mt-1.5 text-2xs text-tertiary">{education.detail}</p>
    </div>
  );
}
