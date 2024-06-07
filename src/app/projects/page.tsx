"use client";

import ProjectList from "@/components/project-list";
import projects from "@/shared/data/projects";

const Projects = () => {
  return (
    <div className="px-8 md:px-14 lg:px-20 xl:px-52 grid md:grid-cols-2 gap-x-7">
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
