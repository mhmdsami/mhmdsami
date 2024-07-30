import SKILLS from "@/shared/data/skills";

const skillSets = [
  {
    title: "Languages",
    skills: [
      SKILLS.JAVASCRIPT,
      SKILLS.TYPESCRIPT,
      SKILLS.PYTHON,
      SKILLS.RUST,
      SKILLS.C,
      SKILLS.CPP,
    ],
  },
  {
    title: "Frontend",
    skills: [
      SKILLS.HTML,
      SKILLS.CSS,
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.REMIX,
      SKILLS.TAILWINDCSS,
    ],
  },
  {
    title: "Backend",
    skills: [SKILLS.NODEJS, SKILLS.EXPRESS, SKILLS.DRIZZLE, SKILLS.PRISMA],
  },
  {
    title: "Database",
    skills: [SKILLS.MONGODB, SKILLS.POSTGRESQL],
  },
  {
    title: "UI/UX",
    skills: [SKILLS.FIGMA, SKILLS.ADOBEXD],
  },
  {
    title: "Tools",
    skills: [SKILLS.GIT, SKILLS.POSTMAN, SKILLS.VERCEL],
  },
];

export default skillSets;
