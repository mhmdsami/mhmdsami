import eliphile from "@/assets/eliphile.png";
import envstash from "@/assets/env-stash.png";
import fury from "@/assets/fury.png";
import kzillaXyz from "@/assets/kzilla-xyz.png";
import linx from "@/assets/linx.png";
import lockout from "@/assets/lockout.png";
import mintairLanding from "@/assets/mintair-landing.png";
import mintair from "@/assets/mintair.png";
import mozofest22 from "@/assets/mozofest-22.png";
import mozofest23 from "@/assets/mozofest-23.png";
import s3Client from "@/assets/s3-client.png";
import subscriptionsApi from "@/assets/subscriptions-api.png";
import tec from "@/assets/tec.png";
import travelmate from "@/assets/travelmate.png";
import SKILLS from "@/shared/data/skills";
import { Project } from "@/shared/types";

const projects = [
  {
    name: "Mintair",
    skills: [
      SKILLS.NEXTJS,
      SKILLS.TAILWINDCSS,
      SKILLS.TYPESCRIPT,
      SKILLS.FRAMER_MOTION,
    ],
    description: "Landing page for Mintair",
    image: mintairLanding,
    deployment: "https://mintair.xyz/",
  },
  {
    name: "TravelMate",
    skills: [
      SKILLS.NEXTJS,
      SKILLS.TAILWINDCSS,
      SKILLS.ZUSTAND,
      SKILLS.FASTIFY,
      SKILLS.MONGODB,
      SKILLS.NODEJS,
      SKILLS.TYPESCRIPT,
    ],
    description:
      "A hackathon winning project at Hackout 2023 by Headout. Won the Travel Track",
    contributed: true,
    organizationUrl: "https://github.com/shawshankkumar/hackout-travelmate/",
    repo: "https://github.com/sm-sami/hackout-travelmate",
    image: travelmate,
  },
  {
    name: "Mintair Dashboard",
    skills: [
      SKILLS.NEXTJS,
      SKILLS.TAILWINDCSS,
      SKILLS.FRAMER_MOTION,
      SKILLS.ZUSTAND,
      SKILLS.REACT_QUERY,
      SKILLS.TYPESCRIPT,
    ],
    description: "Dashboard for Mintair",
    image: mintair,
    deployment: "https://mintair.xyz/dashboard",
  },
  {
    name: "Lockout",
    skills: [
      SKILLS.EXPO,
      SKILLS.REACT,
      SKILLS.TYPESCRIPT,
      SKILLS.PYTHON,
      SKILLS.HONO,
      SKILLS.DRIZZLE,
      SKILLS.POSTGRESQL,
      SKILLS.ZOD,
      SKILLS.REACT_QUERY,
    ],
    image: lockout,
    description: "Locker management made simpler",
    repo: "https://github.com/sm-sami/lockout",
  },
  {
    name: "Eliphile",
    skills: [
      SKILLS.REMIX,
      SKILLS.MONGODB,
      SKILLS.PRISMA,
      SKILLS.ZOD,
      SKILLS.TAILWINDCSS,
      SKILLS.TYPESCRIPT,
    ],
    description: "Store, share and view beautiful images",
    image: eliphile,
    repo: "https://github.com/mhmdsami/eliphile",
    deployment: "https://eliphile.vercel.app/",
  },
  {
    name: "Env Stash",
    skills: [
      SKILLS.REMIX,
      SKILLS.TAILWINDCSS,
      SKILLS.PRISMA,
      SKILLS.MONGODB,
      SKILLS.TYPESCRIPT,
    ],
    description: "Never lose your env again!",
    image: envstash,
    repo: "https://github.com/mhmdsami/env-stash",
    deployment: "https://env-stash.vercel.app/",
  },
  {
    name: "Linx",
    description: "App to manage links collection under a domain, Client for links API",
    skills: [SKILLS.EXPO, SKILLS.REACT, SKILLS.TYPESCRIPT, SKILLS.REACT_QUERY],
    image: linx,
    repo: "https://github.com/mhmdsami/linx",
  },
  {
    name: "Fury",
    skills: [
      SKILLS.REMIX,
      SKILLS.NEXTJS,
      SKILLS.TAILWINDCSS,
      SKILLS.SCSS,
      SKILLS.MONGODB,
      SKILLS.NODEJS,
      SKILLS.GO,
      SKILLS.TYPESCRIPT,
    ],
    description:
      "Inspired by Nick Fury, whose primary job was to recruit avengers, spies and other cool people!",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    repo: "https://github.com/srm-kzilla/fury",
    image: fury,
  },
  {
    name: "Tirunelveli Economic Chamber",
    description: "The official website of Tirunelveli Economic Chamber",
    skills: [
      SKILLS.REMIX,
      SKILLS.TAILWINDCSS,
      SKILLS.MONGODB,
      SKILLS.REACT_EMAIL,
    ],
    image: tec,
    deployment: "https://tirunelvelieconomicchamber.com/",
  },
  {
    name: "Subscriptions API",
    skills: [
      SKILLS.EXPRESS,
      SKILLS.POSTGRESQL,
      SKILLS.DRIZZLE,
      SKILLS.REACT_EMAIL,
      SKILLS.ZOD,
      SKILLS.AWS,
      SKILLS.TYPESCRIPT,
    ],
    description: "API to manage subscriptions.",
    image: subscriptionsApi,
    repo: "https://github.com/sm-sami/subscriptions-api",
  },
  {
    name: "S3 Client",
    skills: [
      SKILLS.NEXTJS,
      SKILLS.TAILWINDCSS,
      SKILLS.AWS,
      SKILLS.ZOD,
      SKILLS.TYPESCRIPT,
    ],
    description: "Client to upload images to AWS S3.",
    image: s3Client,
    repo: "https://github.com/sm-sami/s3-client",
  },
  {
    name: "MOZOFEST '23",
    skills: [SKILLS.NEXTJS, SKILLS.TAILWINDCSS, SKILLS.TYPESCRIPT],
    description: "MOZOFEST '23 Landing Page & Dashboard.",
    deployment: "https://mozofest.srmkzilla.net/",
    image: mozofest23,
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
  },
  {
    name: "kzilla.xyz",
    skills: [
      SKILLS.SVELTE,
      SKILLS.CSS,
      SKILLS.EXPRESS,
      SKILLS.MONGODB,
      SKILLS.TYPESCRIPT,
    ],
    description: "Shorten the URL. Broaden the reach.",
    deployment: "https://kzilla.xyz",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    repo: "https://github.com/srm-kzilla/kzilla.xyz",
    image: kzillaXyz,
  },
  {
    name: "MOZOFEST '22",
    skills: [SKILLS.NEXTJS, SKILLS.TAILWINDCSS, SKILLS.TYPESCRIPT],
    description: "MOZOFEST '22 Landing Page.",
    image: mozofest22,
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
  },
  {
    name: "mlu-bot",
    repo: "https://github.com/sm-sami/mlu-bot",
    skills: [SKILLS.NODEJS, SKILLS.MONGODB, SKILLS.TYPESCRIPT],
    description: "A discord bot for organizing Guess the Place.",
  },
  {
    name: "Absentee",
    skills: [SKILLS.PYTHON],
    description: "A command line tool to clean the attendance data",
    repo: "https://github.com/sm-sami/absentee",
  },
];

export default projects as Array<Project>;
