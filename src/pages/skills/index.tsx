import { Layout } from "@/components/shared";
import { Skills } from "@/components/skills";
import skillSets from "@/shared/data/skillsets";
import { Slide } from "react-awesome-reveal";

const skills = () => {
  return (
    <Slide triggerOnce={true} direction="down">
      <Layout pageName="Skills">
        <Skills skillSets={skillSets} />
      </Layout>
    </Slide>
  );
};

export default skills;
