import { ProjectList, Button } from "@components";
import type { ProjectProps } from "../pages/api/projects";

interface FeaturedProjectsProps {
    projects: Array<ProjectProps>
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
    return (
        <div id="projects" className="mt-[5vh] content-padding mb-10">
            <div className="text-red text-base md:text-xl font-bold uppercase">Featured Projects</div>
            <div className="grid md:grid-cols-2 gap-x-7">
                <ProjectList projects={projects} /> 
            </div>
            <div className="float-right text-lg transition-all duration-300 hover:scale-110">
                <Button href="/projects">browse other projects</Button>
            </div>
        </div>
    )
}

export default FeaturedProjects;
