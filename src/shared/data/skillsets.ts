import { SkillSet } from "@/shared/types";

const skillSets: Array<SkillSet> = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        slug: "javascript",
        showSkill: true,
        makePage: true,
      },
      {
        name: "TypeScript",
        slug: "typescript",
        showSkill: true,
        makePage: true,
      },
      {
        name: "Python",
        slug: "python",
        showSkill: true,
        makePage: true,
      },
      {
        name: "C",
        slug: "c",
        showSkill: true,
        makePage: true,
      },
      {
        name: "C++",
        slug: "cpp",
        showSkill: true,
        makePage: true,
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        slug: "html",
        showSkill: true,
        makePage: true,
      },
      {
        name: "CSS",
        slug: "css",
        showSkill: true,
        makePage: true,
      },
      {
        name: "React",
        slug: "react",
        showSkill: true,
        makePage: true,
      },
      {
        name: "Nextjs",
        slug: "nextjs",
        showSkill: true,
        makePage: true,
      },
      {
        name: "Remix",
        slug: "remix",
        showSkill: true,
        makePage: true,
      },
      {
        name: "Svelte",
        slug: "svelte",
        showSkill: false,
        makePage: true,
      },
      {
        name: "TailwindCSS",
        slug: "tailwindcss",
        showSkill: true,
        makePage: true,
      },
      {
        name: "SCSS",
        slug: "scss",
        showSkill: false,
        makePage: true,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Nodejs",
        slug: "nodejs",
        showSkill: true,
        makePage: true,
      },
      {
        name: "Express",
        slug: "express",
        showSkill: true,
        makePage: true,
      },
      {
        name: "Drizzle ORM",
        slug: "drizzle",
        showSkill: false,
        makePage: true,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        slug: "mongodb",
        showSkill: true,
        makePage: true,
      },
      {
        name: "PostgreSQL",
        slug: "postgresql",
        showSkill: true,
        makePage: true,
      },
    ],
  },
  {
    title: "UI/UX",
    skills: [
      {
        name: "Figma",
        slug: "figma",
        showSkill: true,
        makePage: false,
      },
      {
        name: "Adobe XD",
        slug: "adobexd",
        showSkill: true,
        makePage: false,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        slug: "git",
        showSkill: true,
        makePage: false,
      },
      {
        name: "Postman",
        slug: "postman",
        showSkill: true,
        makePage: false,
      },
      {
        name: "Vercel",
        slug: "vercel",
        showSkill: true,
        makePage: false,
      },
    ],
  },
];

export default skillSets;
