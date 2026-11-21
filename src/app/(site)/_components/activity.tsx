"use client";

import { useMemo, useRef } from "react";
import { useSynth } from "@/app/(site)/_hooks/use-synth";
import ActivityGrid from "@/components/activity-grid";
import { ArrowLink } from "@/components/arrow-link";
import { PlayButton } from "@/components/play-button";
import Section from "@/components/section";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { ContributionDay } from "@/lib/contributions";

export default function Activity({ days, max }: { days: ContributionDay[]; max: number }) {
  const compact = useMediaQuery("(max-width: 639px)");
  const visible = useMemo(() => (compact ? days.slice(-182) : days), [compact, days]);
  const playhead = useRef<HTMLDivElement>(null);
  const { playing, toggle } = useSynth(visible, max, playhead);

  return (
    <Section
      id="activity"
      title="Activity"
      aside={
        <div className="flex items-center gap-3">
          <PlayButton playing={playing} onToggle={toggle} label="activity drums" className="hidden sm:inline-flex" />
          <ArrowLink href="https://github.com/sm-sami" className="text-sm text-secondary" underline={false}>
            github
          </ArrowLink>
        </div>
      }
    >
      <ActivityGrid days={visible} max={max} interactive playheadRef={playhead} />
    </Section>
  );
}
