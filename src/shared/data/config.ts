import mintairLandingImage from "@/assets/mintair-landing.png";
import furyImage from "@/assets/fury.png";

const config = {
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
  ],
};

export default config;
