import { Project } from "@/shared/types";

const projects: Array<Project> = [
  {
    name: "Fury",
    tags: [
      "remix",
      "nextjs",
      "mongodb",
      "typescript",
      "tailwindcss",
      "scss",
      "nodejs",
      "go",
    ],
    desc: "Inspired by Nick Fury, whose primary job was to recruit avengers, spies and other cool people!",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    repo: "https://github.com/srm-kzilla/fury",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/fury.png",
    slug: "fury",
  },
  {
    name: "Eliphile",
    tags: ["remix", "mongodb", "primsa", "zod", "tailwindcss", "typescript"],
    desc: "Store, share and view beautiful images",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/eliphile.png",
    slug: "eliphile",
    repo: "https://github.com/mhmdsami/eliphile",
    deps: "https://eliphile.vercel.app/",
  },
  {
    name: "Env Stash",
    tags: ["remix", "mongodb", "primsa", "tailwindcss", "typescript"],
    desc: "Never lose your env again!",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/env-stash.png",
    slug: "env-stash",
    repo: "https://github.com/mhmdsami/env-stash",
    deps: "https://env-stash.vercel.app/",
  },
  {
    name: "Subscriptions API",
    tags: [
      "express",
      "postgresql",
      "drizzle",
      "typescript",
      "react-email",
      "aws",
      "zod",
    ],
    desc: "API to manage subscriptions.",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/subscriptions-api.png",
    slug: "subscriptions-api",
    repo: "https://github.com/sm-sami/subscriptions-api",
  },
  {
    name: "S3 Client",
    tags: ["nextjs", "tailwindcss", "typescript", "aws", "zod"],
    desc: "Client to upload images to AWS S3.",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/s3-client.png",
    slug: "s3-client",
    repo: "https://github.com/sm-sami/s3-client",
  },
  {
    name: "TravelMate",
    tags: [
      "nextjs",
      "mongodb",
      "typescript",
      "tailwindcss",
      "zustand",
      "nodejs",
      "fastify",
    ],
    desc: "A hackathon winning project at Hackout 2023 by Headout. Won the Travel Track",
    contributed: true,
    organizationUrl: "https://github.com/shawshankkumar/hackout-travelmate/",
    repo: "https://github.com/sm-sami/hackout-travelmate",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/travelmate.png",
    slug: "travelmate",
  },
  {
    name: "MOZOFEST '23",
    tags: ["nextjs", "tailwindcss", "typescript", "css"],
    desc: "MOZOFEST '23 Landing Page & Dashboard.",
    deps: "https://mozofest.srmkzilla.net/",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/mozofest-23.png",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    slug: "mozofest-23",
  },
  {
    name: "kzilla.xyz",
    tags: ["svelte", "express", "mongodb", "typescript", "css"],
    desc: "Shorten the URL. Broaden the reach.",
    deps: "https://kzilla.xyz",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    repo: "https://github.com/srm-kzilla/kzilla.xyz",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/kzilla-xyz.png",
    slug: "kzilla-xyz",
  },
  {
    name: "Dashtern",
    tags: ["nextjs", "tailwindcss", "javascript", "react", "mongodb", "scss"],
    desc: "SIH Internal Hackathon 2022 from team Sleep 404",
    repo: "https://github.com/Sleep-404-team/SIH-2022",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/dashtern.png",
    contributed: true,
    organizationUrl: "https://github.com/Sleep-404-team",
    slug: "dashtern",
  },
  {
    name: "MOZOFEST '22",
    tags: ["nextjs", "tailwindcss", "typescript", "css"],
    desc: "MOZOFEST '22 Landing Page.",
    deps: "https://mozofest.srmkzilla.net/",
    image:
      "https://sm-sami-portfolio.s3.ap-south-1.amazonaws.com/project/mozofest-22.png",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    slug: "mozofest-22",
  },
  {
    name: "mlu-bot",
    repo: "https://github.com/sm-sami/mlu-bot",
    tags: ["typescript", "mongodb", "nodejs"],
    desc: "A discord bot for organizing Guess the Place.",
    slug: "mlu-bot",
  },
  {
    name: "Absentee",
    tags: ["python"],
    desc: "A command line tool to clean the attendance data",
    repo: "https://github.com/sm-sami/absentee",
    slug: "absentee",
  },
];

export default projects;
