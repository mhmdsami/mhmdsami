import type { Metadata } from "next";
import Synth from "@/app/(site)/labs/_components/synth";
import { alignToWeeks, getContributions } from "@/lib/contributions";

const HANDLE = "sm-sami";

export const metadata: Metadata = {
  title: "Synth · Labs · Mohamed Sami",
  description: "A year of GitHub contributions, played as drums.",
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

  return <Synth handle={HANDLE} stats={{ days, max: Math.max(1, ...days.map((day) => day.count)) }} />;
}
