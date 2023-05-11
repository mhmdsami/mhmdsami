import { Landing } from "@/components/landing";
import type { Data, SkillSet, Project } from "@/shared/types";
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
  const res = await fetch(`${process.env.API_BASE_URL}/api/data`);
  const data: Data = await res.json();

  const { name, greetings, tags, skillSets, featuredProjects } = data;

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const tag = tags[Math.floor(Math.random() * tags.length)];

  return {
    props: { name, greeting, tag, skillSets, featuredProjects },
  };
};

export default Home;
