import { Landing } from "../components";
import type {GetServerSideProps} from 'next'
import type {SkillSet} from "./api/data";

interface HomeProps {
    name: string;
    greetings: Array<string>;
    tags: Array<string>;
    skillSets: Array<SkillSet>;
}

const Home = ({ name, greetings, tags, skillSets }: HomeProps) => {
      return (
      <div className="flex flex-col">
          <Landing name={name} greetings={greetings} tags={tags} skillSets={skillSets}/>
      </div>
      )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.API_BASE_URL}/api/data`);
    const data = await res.json();

    const [ { name, greetings, tags, skillSets } ] = data;

    return {
        props: { name, greetings, tags, skillSets }
    };
}

export default Home;
