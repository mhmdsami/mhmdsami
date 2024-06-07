import { Config } from "@/shared/types";

const config: Config = {
  name: "Mohamed Sami",
  greetings: [
    "Hello there",
    "Bonjour",
    "Hallo",
    "Hola",
    "Howdy",
    "Salut",
    "Moin",
    "Salam",
  ],
  tags: [
    "I craft memorable web experiences",
    "I automate repetitive and boring tasks",
    "I fix bugs! Sometimes make them too?",
    "I love palindromes, like a lot!",
    "I build cool stuff for the web",
  ],
  featuredProjects: [
    {
      slug: "subscriptions-api",
      name: "Subscriptions API",
      image:
        "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/subscriptions-api.png",
      repo: "https://github.com/sm-sami/subscriptions-api",
      tags: ["express", "postgresql", "drizzle", "typescript", "aws", "zod"],
      desc: "API to manage subscriptions.",
    },
    {
      slug: "mozofest-23",
      name: "MOZOFEST '23",
      image:
        "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/mozofest-23.png",
      tags: ["nextjs", "tailwindcss", "typescript"],
      desc: "MOZOFEST '23 Landing Page & Dashboard.",
      deps: "https://mozofest.srmkzilla.net",
    },
  ],
  inspirations: [
    {
      name: "Yaksh Chopra",
      github: "https://github.com/Yakshchopra",
      portfolio: "https://yakshchopra.vercel.app",
    },
    {
      name: "Mohammed Farhaan",
      github: "https://github.com/mdfarhaan",
      portfolio: "https://www.mdfarhaan.tk/",
    },
    {
      name: "Sagnik Biswas",
      github: "https://github.com/sbiswas2209",
      portfolio: "https://sagnik.dev/",
    },
  ],
  assets: [
    {
      name: "GitHub Logo",
      assetUrl: "https://iconscout.com/icons/github",
      contributorName: "Icon Mafia",
      contributorUrl: "https://iconscout.com/contributors/icon-mafia",
    },
    {
      name: "Instagram Icon",
      assetUrl: "https://iconscout.com/icons/instagram",
      contributorName: "Unicons Font",
      contributorUrl: "https://iconscout.com/contributors/unicons",
    },
    {
      name: "Linkedin Icon",
      assetUrl: "https://iconscout.com/icons/linkedin",
      contributorName: "Unicons Font",
      contributorUrl: "https://iconscout.com/contributors/unicons",
    },
    {
      name: "Website Icon",
      assetUrl: "https://iconscout.com/icons/website",
      contributorName: "Barudak Lier",
      contributorUrl: "https://iconscout.com/contributors/irfansusanto98",
    },
  ],
  techStack: [
    {
      name: "React",
      url: "https://reactjs.org/",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      url: "https://tailwindcss.com/",
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
    },
    {
      name: "React Awesome Reveal",
      url: "https://www.npmjs.com/package/react-awesome-reveal",
    },
    {
      name: "React Scroll",
      url: "https://www.npmjs.com/package/react-scroll",
    },
    {
      name: "React Tilt",
      url: "https://www.npmjs.com/package/react-tilt",
    },
  ],
};

export default config;
