import { ProjectList, Button } from "@components";
import type { ProjectProps } from "../pages/api/projects";

interface FeaturedProjectsProps {
  projects: Array<ProjectProps>;
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  return (
    <div id="projects" className="content-padding mt-[5vh] mb-10">
      <div className="text-base font-bold uppercase text-red md:text-xl">
        Featured Projects
      </div>
      <div className="grid gap-x-7 md:grid-cols-2">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default FeaturedProjects;
