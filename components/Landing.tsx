import { Layout, Hero, Skills, FeaturedProjects } from "./";
import {Slide} from 'react-reveal';
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
            <Slide top>
                <Hero name={name} greetings={greetings} tags={tags}/>
            </Slide>
            <Skills skillSets={skillSets}/>
            <FeaturedProjects projects={featuredProjects}/>
        </Layout>
    )
}

export default Landing;