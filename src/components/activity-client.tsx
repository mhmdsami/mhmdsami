"use client";

import { useRef } from "react";
import ActivityGrid from "@/components/activity-grid";
import Section from "@/components/section";
import { ArrowLink } from "@/components/ui/arrow-link";
import { SynthButton } from "@/components/ui/synth-button";
import type { ContributionDay } from "@/lib/contributions";
import { useSynth } from "@/lib/use-synth";

export default function ActivityClient({ days, max }: { days: ContributionDay[]; max: number }) {
  const playhead = useRef<HTMLDivElement>(null);
  const { playing, toggle } = useSynth(days, max, [playhead]);

  return (
    <Section
      id="activity"
      title="Activity"
      aside={
        <div className="flex items-center gap-3">
          <SynthButton playing={playing} onToggle={toggle} label="activity drums" className="hidden sm:inline-flex" />
          <ArrowLink href="https://github.com/sm-sami" className="text-sm text-tertiary">
            github
          </ArrowLink>
        </div>
      }
    >
      <ActivityGrid days={days.slice(-182)} max={max} className="block sm:hidden" />
      <ActivityGrid days={days} max={max} className="hidden sm:block" interactive playheadRef={playhead} />
    </Section>
  );
}
