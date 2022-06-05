import { Layout, Hero, Skills, FeaturedProjects } from "./";
import type {SkillSet} from "../pages/api/data";

interface LandingProps {
    name: string;
    greetings: Array<string>;
    tags: Array<string>;
    skillSets: Array<SkillSet>;
}

const Landing = ( { name, greetings, tags, skillSets }: LandingProps) => {
    return (
        <Layout pageName="Home">
            <Hero name={name} greetings={greetings} tags={tags}/>
            <Skills skillSets={skillSets}/>
            <FeaturedProjects />
        </Layout>
    )
}

export default Landing;