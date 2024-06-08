import mintairLandingImage from "@/assets/mintair-landing.png"
import furyImage from "@/assets/fury.png"
import eliphileImage from "@/assets/eliphile.png"
import envStashImage from "@/assets/env-stash.png"
import subscriptionsApiImage from "@/assets/subscriptions-api.png"
import s3ClientImage from "@/assets/s3-client.png"
import travelmateImage from "@/assets/travelmate.png"
import mozofest23Image from "@/assets/mozofest-23.png"
import kzillaXyzImage from "@/assets/kzilla-xyz.png"
import dashternImage from "@/assets/dashtern.png"
import mozofest22Image from "@/assets/mozofest-22.png"
import mintairDashboardImage from "@/assets/mintair-dashboard.png"

const projects  = [
  {
    name: "Mintair Landing",
    tags: ["nextjs", "tailwindcss", "typescript", "framer-motion"],
    desc: "Landing page for Mintair",
    image: mintairLandingImage,
    deps: "https://mintair.xyz/"
  },
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
    image: furyImage,
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
    image: travelmateImage,
  },
  {
    name: "Mintair Dashboard",
    tags: ["nextjs", "tailwindcss", "typescript", "framer-motion", "react-query", "zustand"],
    desc: "Landing page for Mintair",
    image: mintairDashboardImage,
    deps: "https://mintair.xyz/"
  },
  {
    name: "Eliphile",
    tags: ["remix", "mongodb", "primsa", "zod", "tailwindcss", "typescript"],
    desc: "Store, share and view beautiful images",
    image: eliphileImage,
    repo: "https://github.com/mhmdsami/eliphile",
    deps: "https://eliphile.vercel.app/",
  },
  {
    name: "Env Stash",
    tags: ["remix", "mongodb", "primsa", "tailwindcss", "typescript"],
    desc: "Never lose your env again!",
    image: envStashImage,
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
    image: subscriptionsApiImage,
    repo: "https://github.com/sm-sami/subscriptions-api",
  },
  {
    name: "S3 Client",
    tags: ["nextjs", "tailwindcss", "typescript", "aws", "zod"],
    desc: "Client to upload images to AWS S3.",
    image: s3ClientImage,
    repo: "https://github.com/sm-sami/s3-client",
  },
  {
    name: "MOZOFEST '23",
    tags: ["nextjs", "tailwindcss", "typescript", "css"],
    desc: "MOZOFEST '23 Landing Page & Dashboard.",
    deps: "https://mozofest.srmkzilla.net/",
    image: mozofest23Image,
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
  },
  {
    name: "kzilla.xyz",
    tags: ["svelte", "express", "mongodb", "typescript", "css"],
    desc: "Shorten the URL. Broaden the reach.",
    deps: "https://kzilla.xyz",
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
    repo: "https://github.com/srm-kzilla/kzilla.xyz",
    image: kzillaXyzImage,
  },
  {
    name: "Dashtern",
    tags: ["nextjs", "tailwindcss", "javascript", "react", "mongodb", "scss"],
    desc: "SIH Internal Hackathon 2022 from team Sleep 404",
    repo: "https://github.com/Sleep-404-team/SIH-2022",
    image: dashternImage,
    contributed: true,
    organizationUrl: "https://github.com/Sleep-404-team",
  },
  {
    name: "MOZOFEST '22",
    tags: ["nextjs", "tailwindcss", "typescript", "css"],
    desc: "MOZOFEST '22 Landing Page.",
    image: mozofest22Image,
    contributed: true,
    organizationUrl: "https://github.com/srm-kzilla",
  },
  {
    name: "mlu-bot",
    repo: "https://github.com/sm-sami/mlu-bot",
    tags: ["typescript", "mongodb", "nodejs"],
    desc: "A discord bot for organizing Guess the Place.",
  },
  {
    name: "Absentee",
    tags: ["python"],
    desc: "A command line tool to clean the attendance data",
    repo: "https://github.com/sm-sami/absentee",
  },
];

export default projects;
