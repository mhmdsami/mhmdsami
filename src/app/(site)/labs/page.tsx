import type { Metadata } from "next";
import Link from "next/link";
import { SynthArt } from "@/components/lab-art";

export const metadata: Metadata = {
  title: "Labs · Mohamed Sami",
  description: "Small experiments that don't belong on the home page.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/labs" },
  openGraph: {
    title: "Labs · Mohamed Sami",
    description: "Small experiments that don't belong on the home page.",
    url: "https://sam1.space/labs",
    siteName: "Mohamed Sami",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-labs.png", width: 1200, height: 630, alt: "Labs — small experiments" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labs · Mohamed Sami",
    description: "Small experiments that don't belong on the home page.",
    images: ["/og-labs.png"],
  },
};

const experiments = [{ id: "synth", title: "synth", description: "a year of github as drums", Art: SynthArt }];

export default function LabsPage() {
  return (
    <div className="pt-8 sm:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-2xl font-medium tracking-tight">Labs</h1>
        <Link href="/" className="text-2xs text-tertiary transition-colors duration-150 hover:text-foreground">
          home
        </Link>
      </div>
      <p className="mt-3 max-w-md text-sm text-secondary">Small experiments that don't belong on the home page.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {experiments.map(({ id, title, description, Art }) => (
          <Link
            key={id}
            href={`/labs/${id}`}
            className="group flex flex-col overflow-hidden rounded-md border bg-surface-1 transition-colors duration-150 hover:border-input hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="flex flex-1 items-center justify-center border-b px-4 py-7 text-foreground/80 transition-opacity duration-150 group-hover:text-foreground">
              <Art className="h-auto w-full" />
            </div>
            <div className="flex flex-col gap-0.5 px-3 py-3">
              <span className="font-mono text-xs text-foreground">{title}</span>
              <span className="text-2xs text-tertiary">{description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
