import type { SiteData } from "@/shared/types";

export const site: SiteData = {
  profile: {
    name: "Mohamed Sami",
    role: "Software Engineer",
    cities: ["Bengaluru", "Chennai"],
    country: "India",
    email: "siamasdev@gmail.com",
    intro:
      "I maintain the platform that supports 400+ sites at Headout. Elsewhere, I build tools to build tools to make other tools.",
    links: [
      { label: "gh/sm-sami", href: "https://github.com/sm-sami" },
      { label: "linkedin", href: "https://www.linkedin.com/in/sm-sami" },
      { label: "x", href: "https://x.com/siamasdev" },
      { label: "gh/mhmdsami", href: "https://github.com/mhmdsami" },
    ],
  },
  work: [
    {
      name: "ijra",
      year: "2026",
      summary: "A request queue where an agent answers or opens a pull request.",
      stack: ["Next.js", "Cloudflare Workers", "D1", "Drizzle"],
      repo: "https://github.com/mhmdsami/ijra",
    },
    {
      name: "meter",
      year: "2026",
      summary: "Tracks AI usage and spend across every machine.",
      stack: ["Swift", "Rust", "Next.js", "Cloudflare Workers", "D1"],
      repo: "https://github.com/mhmdsami/meter",
    },
    {
      name: "Slack Code Mode MCP",
      year: "2026",
      summary: "Two tools for Slack: search the API, then run sandboxed code.",
      stack: ["TypeScript", "MCP SDK", "Slack Web API", "Zod"],
      repo: "https://github.com/mhmdsami/slack-codemode-mcp",
    },
    {
      name: "devctl",
      year: "2026",
      summary: "Many agents, many stacks, one machine.",
      stack: ["TypeScript", "Node.js", "CLI"],
      repo: "https://github.com/mhmdsami/devctl",
    },
    {
      name: "lockout",
      year: "2024",
      summary: "Locker booking and allocation for shared spaces.",
      stack: ["Expo", "React Native", "Hono", "Drizzle", "PostgreSQL"],
      repo: "https://github.com/mhmdsami/lockout",
    },
  ],
  also: [
    { label: "artifacts", href: "https://artifacts.sam1.space" },
    { label: "skills", href: "https://skills.sam1.space" },
    { label: "fury", href: "https://github.com/srm-kzilla/fury" },
    { label: "kzilla.xyz", href: "https://github.com/srm-kzilla/kzilla.xyz" },
    { label: "travelmate", href: "https://github.com/sm-sami/hackout-travelmate" },
    { label: "subscriptions api", href: "https://github.com/sm-sami/subscriptions-api" },
  ],
  experience: [
    {
      role: "Software Engineer",
      org: "Headout",
      orgUrl: "https://headout.com",
      period: "Aug 2025 – Present",
      previous: {
        role: "Software Engineer Intern",
        period: "May 2025 – Aug 2025",
      },
      detail:
        "Maintain the platform that supports 400+ sites.\nBuild workflows to automate creation of new sites on demand.",
    },
    {
      role: "Software Developer Intern",
      org: "HyperVerge",
      orgUrl: "https://hyperverge.co",
      period: "Aug 2024 – May 2025",
      detail: [
        { text: "Frontend and backend for " },
        { text: "HyperStart CLM", href: "https://hyperstart.com" },
        { text: ", an AI contract platform." },
      ],
    },
    {
      role: "Frontend Developer",
      org: "Mintair",
      orgUrl: "https://mintair.xyz",
      period: "May 2024 – Dec 2024",
      detail: "Built the new landing page from scratch; led the dynamic dashboard.",
    },
    {
      role: "Software Developer Intern",
      org: "Mable",
      orgUrl: "https://mablesoftware.com",
      period: "Aug 2023 – May 2024",
      detail: "Built reusable data components, then moved the dashboard to Remix.",
    },
  ],
  education: {
    school: "SRM Institute of Science and Technology",
    degree: "B.Tech, Computer Science (IoT)",
    period: "2021 – 2025",
    detail: "CGPA 9.59/10",
  },
  favoriteStack: {
    items: ["Next.js", "OpenNext", "Cloudflare Workers", "D1", "Drizzle", "Tailwind"],
    note: "is the starter template built on this stack.",
    link: { label: "baseline", href: "https://github.com/mhmdsami/baseline" },
  },
  stack: [
    {
      title: "Languages",
      items: ["TypeScript", "Python", "Rust", "Go", "Swift"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Base UI", "React Native", "Expo"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Bun", "Hono"],
    },
    {
      title: "Data",
      items: ["PostgreSQL", "SQLite", "Drizzle ORM", "Cloudflare D1"],
    },
    {
      title: "Platform",
      items: ["Cloudflare Workers", "R2", "AWS", "Supabase", "GitHub Actions"],
    },
  ],
};
