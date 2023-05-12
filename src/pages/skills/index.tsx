import { Layout } from "@/components/shared";
import { Skills } from "@/components/skills";
import { Slide } from "react-awesome-reveal";
import type { Data, SkillSet } from "@/shared/types";
import type { GetStaticProps } from "next";

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

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: SkillPageProps;
}> => {
  const res = await fetch(`${process.env.API_BASE_URL}/skills`);
  const skillSets: Array<SkillSet> = await res.json();

  return {
    props: { skillSets },
  };
};

export default skills;
