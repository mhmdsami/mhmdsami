import { Project } from "./";
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
        {projects.map(
          (
            { name, image, repo, deps, tags, desc }: ProjectProps,
            index: number
          ) => (
            <Project
              key={index}
              name={name}
              image={image}
              repo={repo}
              tags={tags}
              deps={deps}
            >
              {desc}
            </Project>
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedProjects;
