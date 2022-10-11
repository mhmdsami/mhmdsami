import { Layout, Hero, Skills, FeaturedProjects } from "@components";
import { homePageRoutes } from "@constants";
import { Slide } from "react-awesome-reveal";
import type { SkillSet } from "../pages/skills";
import type { ProjectProps } from "../pages/api/projects";

interface LandingProps {
  name: string;
  greeting: string;
  tag: string;
  skillSets: Array<SkillSet>;
  featuredProjects: Array<ProjectProps>;
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
