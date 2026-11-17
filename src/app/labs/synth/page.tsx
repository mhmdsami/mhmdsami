import type { Metadata } from "next";
import LabSynth from "@/components/lab-synth";
import { alignToWeeks, getContributions } from "@/lib/contributions";

const HANDLE = "sm-sami";

export const metadata: Metadata = {
  title: "Synth · Labs · Mohamed Sami",
  description: "A year of GitHub contributions, played as drums.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/labs/synth" },
};

export default async function SynthPage() {
  const days = alignToWeeks(await getContributions(HANDLE));

  return <LabSynth handle={HANDLE} stats={{ days, max: Math.max(1, ...days.map((day) => day.count)) }} />;
}
