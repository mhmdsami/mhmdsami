import { Layout, Hero, Skills, FeaturedProjects } from "./";
import { Slide } from 'react-reveal';
import type { SkillSet } from "../pages/api/data";
import { ProjectProps } from "../pages/api/projects";
import type { NavbarRoute } from "./Navbar";

interface LandingProps {
    name: string;
    greeting: string;
    tag: string;
    skillSets: Array<SkillSet>;
    featuredProjects: Array<ProjectProps>
}

const Landing = ({ name, greeting, tag, skillSets, featuredProjects }: LandingProps) => {
    const routes: Array<NavbarRoute> = [
        { page: "skills", href: "/#skills", isSamePage: true },
        { page: "projects", href: "/projects"},
        { page: "blog", href: "/blog" },
        { page: "github", href: "https://github.com/sm-sami" }
    ]

    return (
        <Layout pageName="Home" routes={routes}>
            <Slide top>
                <Hero name={name} greeting={greeting} tag={tag}/>
            </Slide>
            <Skills skillSets={skillSets} backgroundColor="bg-gradient-to-b from-black to-black-dark"/>
            <FeaturedProjects projects={featuredProjects}/>
        </Layout>
    )
}

export default Landing;