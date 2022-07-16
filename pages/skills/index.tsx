import { Layout, Skills } from "@components";
import { Slide } from "react-awesome-reveal";
import type { GetServerSideProps } from "next";
import type { SkillSet } from "../api/data";

interface SkillPageProps {
  skillSets: Array<SkillSet>;
}

const skills = ({ skillSets }: SkillPageProps) => {
  return (
    <Slide triggerOnce={true} direction="down">
      <Layout pageName="Skills">
        <Skills skillSets={skillSets} />
      </Layout>
    </Slide>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.API_BASE_URL}/api/data`);
  const data = await res.json();

  const { skillSets } = data;

  return {
    props: { skillSets },
  };
};

export default skills;
