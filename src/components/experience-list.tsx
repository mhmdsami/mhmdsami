import { Fragment } from "react";
import { ArrowLink } from "@/components/ui/arrow-link";
import type { ExperienceItem } from "@/shared/types";

export default function ExperienceList({ experience }: { experience: Array<ExperienceItem> }) {
  return (
    <ul className="space-y-6">
      {experience.map(({ role, org, orgUrl, period, previous, detail }, index) => (
        <li key={`${org}-${period}-${index}`} data-reveal style={{ "--i": index } as React.CSSProperties}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div className="min-w-0 break-words text-sm">
              <span className="font-medium text-foreground">{role}</span>
              <span className="text-tertiary"> · </span>
              {orgUrl ? (
                <ArrowLink href={orgUrl} className="text-secondary">
                  {org}
                </ArrowLink>
              ) : (
                <span className="text-secondary">{org}</span>
              )}
            </div>
            <span className="ml-auto shrink-0 text-2xs text-tertiary tabular-nums">{period}</span>
          </div>
          {previous && (
            <div className="mt-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="min-w-0 break-words text-sm text-foreground">{previous.role}</span>
              <span className="ml-auto shrink-0 text-2xs text-tertiary tabular-nums">{previous.period}</span>
            </div>
          )}

          <p className="mt-3 break-words text-sm leading-6 text-secondary">
            {typeof detail === "string"
              ? detail.split("\n").map((line, lineIndex) => (
                  <Fragment key={lineIndex}>
                    {lineIndex > 0 && <br />}
                    {line}
                  </Fragment>
                ))
              : detail.map((part, partIndex) =>
                  part.href ? (
                    <ArrowLink key={partIndex} href={part.href} className="text-foreground">
                      {part.text}
                    </ArrowLink>
                  ) : (
                    <span key={partIndex}>{part.text}</span>
                  ),
                )}
          </p>
        </li>
      ))}
    </ul>
  );
}
