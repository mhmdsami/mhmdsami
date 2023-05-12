import { Landing } from "@/components/landing";
import type { Config, SkillSet, Project } from "@/shared/types";
import type { GetServerSideProps } from "next";

interface HomeProps {
  name: string;
  greeting: string;
  tag: string;
  skillSets: Array<SkillSet>;
  featuredProjects: Array<Project>;
}

const Home = ({
  name,
  greeting,
  tag,
  skillSets,
  featuredProjects,
}: HomeProps) => {
  return (
    <div className="flex flex-col">
      <Landing
        name={name}
        greeting={greeting}
        tag={tag}
        skillSets={skillSets}
        featuredProjects={featuredProjects}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const configRes = await fetch(`${process.env.API_BASE_URL}/config`);
  const config: Config = await configRes.json();

  const skillSetsRes = await fetch(`${process.env.API_BASE_URL}/skills`);
  const skillSets: Array<SkillSet> = await skillSetsRes.json();

  const { greetings, tags } = config;

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const tag = tags[Math.floor(Math.random() * tags.length)];

  return {
    props: { ...config, greeting, tag, skillSets },
  };
};

export default Home;
