import { Landing } from "../components";
import type {GetServerSideProps} from 'next'
import type {SkillSet} from "./api/data";
import type {ProjectProps} from "./api/projects";

interface HomeProps {
    name: string;
    greetings: Array<string>;
    tags: Array<string>;
    skillSets: Array<SkillSet>;
    featuredProjects: Array<ProjectProps>
}

const Home = ({ name, greetings, tags, skillSets, featuredProjects }: HomeProps) => {
      return (
      <div className="flex flex-col">
          <Landing name={name} greetings={greetings} tags={tags} skillSets={skillSets} featuredProjects={featuredProjects}/>
      </div>
      )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/api/data`);
    const data = await res.json();

    const { name, greetings, tags, skillSets, featuredProjects } = data;

    return {
        props: { name, greetings, tags, skillSets, featuredProjects }
    };
}

export default Home;
