import type { Metadata } from "next";
import LabSynth from "@/components/lab-synth";
import { alignToWeeks, getContributions } from "@/lib/contributions";

const HANDLE = "sm-sami";

export const metadata: Metadata = {
  title: "Synth · Labs · Mohamed Sami",
  description: "A year of GitHub contributions, played as drums.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/labs/synth" },
  openGraph: {
    title: "Synth · Labs · Mohamed Sami",
    description: "A year of GitHub contributions, played as drums.",
    url: "https://sam1.space/labs/synth",
    siteName: "Mohamed Sami",
    locale: "en_IN",
    type: "website",
    images: [
      { url: "/og-synth.png", width: 1200, height: 630, alt: "Synth — a year of GitHub contributions as drums" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synth · Labs · Mohamed Sami",
    description: "A year of GitHub contributions, played as drums.",
    images: ["/og-synth.png"],
  },
};

export default async function SynthPage() {
  const days = alignToWeeks(await getContributions(HANDLE));

  return <LabSynth handle={HANDLE} stats={{ days, max: Math.max(1, ...days.map((day) => day.count)) }} />;
}
