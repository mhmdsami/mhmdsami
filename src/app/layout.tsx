import CommandMenu from "@/components/command-menu";
import PageScrollbar from "@/components/page-scrollbar";
import { SiteStateProvider } from "@/components/site-state-provider";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import type { Metadata, Viewport } from "next";
import { getSiteState } from "@/lib/site-state";

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
    videos: [
      {
        url: "https://sam1.space/og.mp4",
        secureUrl: "https://sam1.space/og.mp4",
        type: "video/mp4",
        width: 1760,
        height: 550,
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const bootScript = `(function(){try{
var root=document.documentElement;
var theme=localStorage.getItem("theme");
root.dataset.theme=theme==="light"||theme==="dark"?theme:matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";
var accent=localStorage.getItem("accent");
var aliases={blue:"tide",rose:"sakura",yellow:"honey",purple:"iris"};
accent=aliases[accent]||accent;
root.dataset.accent=["sage","tide","sakura","honey","iris"].indexOf(accent)>-1?accent:"sage";
}catch(e){}})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const state = await getSiteState();

  return (
    <html lang="en" className={GeistMono.variable} suppressHydrationWarning>
      <head>
        <script>{bootScript}</script>
      </head>
      <body>
        <div className="starfield" aria-hidden="true" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <SiteStateProvider initial={state}>{children}</SiteStateProvider>
        <CommandMenu />
        <PageScrollbar />
      </body>
    </html>
  );
}
