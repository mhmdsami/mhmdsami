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
};

export default config;
