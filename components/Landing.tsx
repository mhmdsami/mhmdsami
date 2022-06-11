import { Layout, Hero, Skills, FeaturedProjects } from "./";
import type {SkillSet} from "../pages/api/data";
import {ProjectProps} from "../pages/api/projects";

interface LandingProps {
    name: string;
    greetings: Array<string>;
    tags: Array<string>;
    skillSets: Array<SkillSet>;
    featuredProjects: Array<ProjectProps>
}

const Landing = ( { name, greetings, tags, skillSets, featuredProjects }: LandingProps) => {
    return (
        <Layout pageName="Home">
            <Hero name={name} greetings={greetings} tags={tags}/>
            <Skills skillSets={skillSets}/>
            <FeaturedProjects projects={featuredProjects}/>
        </Layout>
    )
}

export default Landing;