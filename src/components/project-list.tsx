import Project from "@/components/project";
import type { Project as ProjectType } from "@/shared/types";

interface ProjectListProps {
  projects: Array<ProjectType>;
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return projects.map((project: ProjectType, index: number) => (
    <Project key={index} {...project}>
      {project.desc}
    </Project>
  ));
};

export default ProjectList;
