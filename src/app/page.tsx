"use client";

import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import config from "@/shared/data/config";
import skillSets from "@/shared/data/skillsets";

export default function Home() {
  const { featuredProjects } = config;

  return (
    <div className="flex flex-col">
      <Hero />
      <Skills
        skillSets={skillSets}
        backgroundColor="bg-gradient-to-b from-black to-black-dark"
      />
      <FeaturedProjects projects={featuredProjects} />
    </div>
  );
}
