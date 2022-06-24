import { Layout, Hero, Skills, FeaturedProjects } from "./";
import type {SkillSet} from "../pages/api/data";
import {ProjectProps} from "../pages/api/projects";

interface LandingProps {
    name: string;
    greeting: string;
    tag: string;
    skillSets: Array<SkillSet>;
    featuredProjects: Array<ProjectProps>
}

const Landing = ( { name, greeting, tag, skillSets, featuredProjects }: LandingProps) => {
    return (
        <Layout pageName="Home">
            <Hero name={name} greeting={greeting} tag={tag}/>
            <Skills skillSets={skillSets}/>
            <FeaturedProjects projects={featuredProjects}/>
        </Layout>
    )
}

export default Landing;