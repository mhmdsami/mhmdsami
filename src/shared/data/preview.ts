import { site } from "@/shared/data/site";
import type { SiteData } from "@/shared/types";

// Dev-only fixtures for the UI break test. Never rendered in production.
const worstCase: SiteData = {
  profile: {
    name: "Aleksandra Wiśniewska-Kowalczyk",
    role: "Software engineer and design engineer",
    cities: ["Thiruvananthapuram"],
    country: "India",
    email: "bartholomew.fitzgerald@northwind-industries-holdings.example.com",
    intro:
      "Currently on the platform team at Northwind Industries Holdings International, where I look after content infrastructure used by 1,284 people across 37 markets. I also maintain open source agent tooling — see https://github.com/mhmdsami/very-long-repository-name-that-keeps-going-and-going for the long version. 🛠️",
    links: [
      { label: "github", href: "https://github.com/mhmdsami" },
      { label: "linkedin", href: "https://www.linkedin.com/in/sm-sami" },
      { label: "x", href: "https://x.com/siamasdev" },
      { label: "email", href: "mailto:bartholomew.fitzgerald@northwind-industries-holdings.example.com" },
      { label: "newsletter", href: "https://example.com/newsletter" },
      { label: "read.cv", href: "https://read.cv/example" },
    ],
  },
  work: [
    {
      name: "Slack Code Mode MCP Server for Enterprise Workspaces",
      year: "2026",
      summary:
        "An MCP server that exposes the entire Slack Web API through two tools. Search returns typed signatures, execute runs agent-written JavaScript in an isolated V8 sandbox with no network access and no token.",
      stack: ["TypeScript", "Model Context Protocol", "Slack Web API", "CloudflareWorkersD1R2KVQueuesDurableObjects"],
      repo: "https://github.com/mhmdsami/slack-codemode-mcp",
    },
    {
      name: "İstanbul Kültür Sanat Vakfı Arşiv Sistemi",
      year: "2026",
      summary:
        "Kültür sanat arşivi için arama, sınıflandırma ve toplu içe aktarma. Şişli'deki 11 kişilik ekiple birlikte geliştirildi.",
      stack: ["Next.js", "PostgreSQL", "Türkçe arama"],
      repo: "https://github.com/mhmdsami/istanbul-archive",
    },
    {
      name: "X",
      year: "2026",
      summary: "A single-letter project name, which is legal and which real people use.",
      stack: ["Go"],
      repo: "https://github.com/mhmdsami/x",
    },
    {
      name: "Meter 📊 realtime usage tracker",
      year: "2026",
      summary:
        "Tracks AI usage across machines. A Swift menu bar app for local scans, a Rust agent for remote hosts, and a Next.js dashboard on Cloudflare Workers and D1.",
      stack: ["Swift", "Rust", "Next.js", "Cloudflare D1", "Durable Objects", "SQLite", "Bun", "Hono"],
      repo: "https://github.com/mhmdsami/meter",
    },
    {
      name: "Artifacts",
      year: "2026",
      summary:
        "Hosting for agent output. Unlisted HTML and Markdown pages at a stable URL, served through a Worker with per-path access rules and no indexing. This entry has no repository link at all.",
      stack: ["Next.js", "Cloudflare Workers", "R2", "D1"],
    },
    {
      name: "A project whose name is long but breaks at spaces often enough to test how the title and the year share a row",
      year: "2026",
      summary:
        "Sometimes the title is a sentence. The layout should wrap it and keep the year visible without pushing anything off the edge of a 320px viewport.",
      stack: ["TypeScript", "PostgreSQL", "Drizzle ORM", "GitHub Actions", "Playwright", "Turborepo"],
      repo: "https://github.com/mhmdsami/long-name",
    },
    {
      name: "Ijra",
      year: "2026",
      summary:
        "A request queue where a coding agent answers questions or opens a verified pull request. Read the decision record at https://github.com/mhmdsami/ijra/blob/main/docs/architecture/decision-records/0012-runner-isolation.md",
      stack: ["Next.js", "Cloudflare Workers", "Drizzle", "GitHub App", "better-auth"],
      repo: "https://github.com/mhmdsami/ijra",
    },
    {
      name: "نظام إدارة الفواتير",
      year: "2026",
      summary: "نظام لإدارة فواتير ضريبة القيمة المضافة للسائقين، مع مسح ضوئي للإيصالات وتصدير للبيانات.",
      stack: ["React Native", "Supabase", "Gemini"],
    },
  ],
  also: [
    { label: "Payload MCP" },
    { label: "Vatscan" },
    { label: "Code Storyline" },
    { label: "Fury", href: "https://github.com/srm-kzilla/fury" },
    { label: "kzilla.xyz", href: "https://github.com/srm-kzilla/kzilla.xyz" },
    { label: "TravelMate", href: "https://github.com/sm-sami/hackout-travelmate" },
    { label: "Subscriptions API", href: "https://github.com/sm-sami/subscriptions-api" },
    { label: "Email Manager Client", href: "https://github.com/GDSCSRM/email-manager-client" },
    { label: "Guess the Place Bot", href: "https://github.com/sm-sami/mlu-bot" },
    { label: "Standard Chartered OnlineKYC", href: "https://example.com/onlinekyc" },
    { label: "Springboard v2", href: "https://example.com/springboard" },
    { label: "AlexaTree", href: "https://example.com/alexatree" },
  ],
  experience: [
    {
      role: "Senior Software Engineer, Platform Infrastructure and Developer Experience",
      org: "Northwind Industries Holdings International",
      period: "September 2024 – Present",
      detail:
        "Content infrastructure, build tooling, and the internal developer platform used by 1,284 people across 37 markets. Migrated 300+ domains without downtime.",
    },
    {
      role: "Software Engineer",
      org: "Headout",
      orgUrl: "https://headout.com",
      period: "Aug 2025 – Present",
      detail: "Maintain the platform that supports 400+ sites.",
    },
    {
      role: "Software Engineer Intern",
      org: "Headout",
      orgUrl: "https://headout.com",
      period: "May 2025 – Aug 2025",
      detail: "Resolved issues across a 300+ site migration from Prismic to Payload.",
    },
    {
      role: "Intern",
      org: "Jo",
      period: "1 month",
      detail: "One-letter employer name and a one-word duration.",
    },
    {
      role: "Software Developer Intern",
      org: "HyperVerge",
      orgUrl: "https://hyperverge.co",
      period: "Aug 2024 – May 2025",
      detail:
        "Frontend and backend for HyperStart CLM, an AI contract management platform with a very long product description that keeps going to test wrapping behaviour. Built SSO.",
    },
  ],
  education: {
    school: "SRM Institute of Science and Technology, Kattankulathur Campus",
    degree: "B.Tech, Computer Science Engineering with Specialization in Internet of Things",
    period: "Jul 2021 – May 2025",
    detail: "CGPA 9.59/10 · Dean's list",
  },
  stack: [
    {
      title: "Programming languages and runtime environments",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Rust",
        "Go",
        "C/C++",
        "Swift",
        "Kotlin",
        "Bash",
        "SQL",
        "WebAssembly",
        "Gleam",
      ],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Remix", "Tailwind CSS", "React Native", "Expo", "SvelteKit", "Astro"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Hono", "Elysia", "Express", "Drizzle ORM", "Prisma", "Fastify", "tRPC"],
    },
    {
      title: "Data",
      items: ["PostgreSQL", "SQLite", "MongoDB", "Cloudflare D1", "Cloudflare R2", "Redis", "ClickHouse"],
    },
    {
      title: "Cloud",
      items: ["AWS", "Cloudflare Workers", "Supabase", "Vercel", "Fly.io", "Hetzner"],
    },
    {
      title: "Tools",
      items: ["Git", "Figma", "Postman", "opencode", "Biome", "Wrangler"],
    },
    {
      title: "One item",
      items: ["Git"],
    },
    {
      title: "An empty group",
      items: [],
    },
  ],
};

const empty: SiteData = {
  ...site,
  work: [],
  also: [],
  experience: [],
  stack: [],
};

const one: SiteData = {
  ...site,
  work: site.work.slice(0, 1),
  also: site.also.slice(0, 1),
  experience: site.experience.slice(0, 1),
  stack: site.stack.slice(0, 1),
};

export const previews = {
  demo: site,
  worst: worstCase,
  empty,
  one,
} satisfies Record<string, SiteData>;
