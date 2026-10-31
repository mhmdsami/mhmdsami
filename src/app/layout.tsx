import CommandMenu from "@/components/command-menu";
import SiteRail from "@/components/site-rail";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sam1.space"),
  title: "Mohamed Sami · Software Engineer at Headout",
  description:
    "Software engineer at Headout. I maintain the platform behind 400+ sites and build workflows that create new sites on demand.",
  applicationName: "Mohamed Sami",
  authors: [{ name: "Mohamed Sami", url: "https://sam1.space" }],
  creator: "Mohamed Sami",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohamed Sami · Software Engineer at Headout",
    description:
      "Software engineer at Headout. I maintain the platform behind 400+ sites and build workflows that create new sites on demand.",
    url: "https://sam1.space",
    siteName: "Mohamed Sami",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Sami, software engineer at Headout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Sami · Software Engineer at Headout",
    description:
      "Software engineer at Headout. I maintain the platform behind 400+ sites and build workflows that create new sites on demand.",
    creator: "@siamasdev",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistMono.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 sm:px-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16 lg:px-8">
          <SiteRail />
          <main id="main" className="min-w-0 pb-16 lg:max-w-[34rem] lg:py-10">
            {children}
          </main>
        </div>
        <CommandMenu />
      </body>
    </html>
  );
}
