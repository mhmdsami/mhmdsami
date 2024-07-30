import dashternImage from "@/assets/dashtern.png";
import eliphileImage from "@/assets/eliphile.png";
import envStashImage from "@/assets/env-stash.png";
import furyImage from "@/assets/fury.png";
import kzillaXyzImage from "@/assets/kzilla-xyz.png";
import mintairDashboardImage from "@/assets/mintair-dashboard.png";
import mintairLandingImage from "@/assets/mintair-landing.png";
import mozofest22Image from "@/assets/mozofest-22.png";
import mozofest23Image from "@/assets/mozofest-23.png";
import s3ClientImage from "@/assets/s3-client.png";
import subscriptionsApiImage from "@/assets/subscriptions-api.png";
import travelmateImage from "@/assets/travelmate.png";
import SKILLS from "@/shared/data/skills";
import { Project } from "@/shared/types";

const projects = [
  {
    name: "Mintair Landing",
    skills: [
      SKILLS.NEXTJS,
      SKILLS.TAILWINDCSS,
      SKILLS.TYPESCRIPT,
      SKILLS.FRAMER_MOTION,
    ],
    desc: "Landing page for Mintair",
    image: mintairLandingImage,
    deps: "https://mintair.xyz/",
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
    desc: "Inspired by Nick Fury, whose primary job was to recruit avengers, spies and other cool people!",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    repo: "https://github.com/srm-kzilla/fury",
    image: furyImage,
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
    desc: "A hackathon winning project at Hackout 2023 by Headout. Won the Travel Track",
    contributed: true,
    organizationUrl: "https://github.com/shawshankkumar/hackout-travelmate/",
    repo: "https://github.com/sm-sami/hackout-travelmate",
    image: travelmateImage,
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
    desc: "Landing page for Mintair",
    image: mintairDashboardImage,
    deps: "https://mintair.xyz/",
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
    desc: "Store, share and view beautiful images",
    image: eliphileImage,
    repo: "https://github.com/mhmdsami/eliphile",
    deps: "https://eliphile.vercel.app/",
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
    desc: "Never lose your env again!",
    image: envStashImage,
    repo: "https://github.com/mhmdsami/env-stash",
    deps: "https://env-stash.vercel.app/",
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
    desc: "API to manage subscriptions.",
    image: subscriptionsApiImage,
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
    desc: "Client to upload images to AWS S3.",
    image: s3ClientImage,
    repo: "https://github.com/sm-sami/s3-client",
  },
  {
    name: "MOZOFEST '23",
    skills: [SKILLS.NEXTJS, SKILLS.TAILWINDCSS, SKILLS.TYPESCRIPT],
    desc: "MOZOFEST '23 Landing Page & Dashboard.",
    deps: "https://mozofest.srmkzilla.net/",
    image: mozofest23Image,
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
    desc: "Shorten the URL. Broaden the reach.",
    deps: "https://kzilla.xyz",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    repo: "https://github.com/srm-kzilla/kzilla.xyz",
    image: kzillaXyzImage,
  },
  {
    name: "Dashtern",
    skills: [
      SKILLS.NEXTJS,
      SKILLS.REACT,
      SKILLS.TAILWINDCSS,
      SKILLS.SCSS,
      SKILLS.MONGODB,
      SKILLS.JAVASCRIPT,
    ],
    desc: "SIH Internal Hackathon 2022 from team Sleep 404",
    repo: "https://github.com/Sleep-404-team/SIH-2022",
    image: dashternImage,
    contributed: true,
    organizationUrl: "https://github.com/Sleep-404-team",
  },
  {
    name: "MOZOFEST '22",
    skills: [SKILLS.NEXTJS, SKILLS.TAILWINDCSS, SKILLS.TYPESCRIPT],
    desc: "MOZOFEST '22 Landing Page.",
    image: mozofest22Image,
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
  },
  {
    name: "mlu-bot",
    repo: "https://github.com/sm-sami/mlu-bot",
    skills: [SKILLS.NODEJS, SKILLS.MONGODB, SKILLS.TYPESCRIPT],
    desc: "A discord bot for organizing Guess the Place.",
  },
  {
    name: "Absentee",
    skills: [SKILLS.PYTHON],
    desc: "A command line tool to clean the attendance data",
    repo: "https://github.com/sm-sami/absentee",
  },
];

export default projects as Array<Project>;
