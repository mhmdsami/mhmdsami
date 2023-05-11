import { ProjectList } from "@/components/shared";
import type { Project } from "@/shared/types";

const FeaturedProjects = ({ projects }: { projects: Array<Project> }) => {
  return (
    <div id="projects" className="content-padding mb-10 mt-[5vh]">
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
