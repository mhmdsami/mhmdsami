import { Project } from "./";
import type { ProjectProps } from "../pages/api/projects";

interface ProjectListProps {
    projects: Array<ProjectProps>
}


const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <>
            {projects.map((project: ProjectProps, index: number) => (
                <Project key={index} {...project}>
                    {project.desc}
                </Project>
            ))}
        </>
    )
}

export default ProjectList;
