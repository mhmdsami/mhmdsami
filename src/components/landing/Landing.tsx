import { Layout } from "@/components/shared";
import { Hero, FeaturedProjects } from "@/components/landing";
import { Skills } from "@/components/skills";
import { homePageRoutes } from "@/shared/routes";
import { Slide } from "react-awesome-reveal";
import type { SkillSet, Project } from "@/shared/types";

interface LandingProps {
  name: string;
  greeting: string;
  tag: string;
  skillSets: Array<SkillSet>;
  featuredProjects: Array<Project>;
}

const Landing = ({
  name,
  greeting,
  tag,
  skillSets,
  featuredProjects,
}: LandingProps) => {
  return (
    <Layout pageName="Home" routes={homePageRoutes}>
      <Slide triggerOnce={true} direction="down">
        <Hero name={name} greeting={greeting} tag={tag} />
      </Slide>
      <Skills
        skillSets={skillSets}
        backgroundColor="bg-gradient-to-b from-black to-black-dark"
      />
      <FeaturedProjects projects={featuredProjects} />
    </Layout>
  );
};

export default Landing;
