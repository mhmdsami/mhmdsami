import ProjectList from "@/components/project-list";
import type { Project } from "@/shared/types";

const FeaturedProjects = ({ projects }: { projects: Array<Project> }) => {
  return (
    <div className="mb-10 mt-[5vh] px-8 md:px-14 lg:px-20 xl:px-52">
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
