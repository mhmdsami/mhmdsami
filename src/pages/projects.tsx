import { Layout, ProjectList } from "@/components/shared";
import { projectsPageRoutes } from "@/shared/routes";
import projects from "@/shared/data/projects";

const Projects = () => {
  return (
    <Layout pageName="Projects" routes={projectsPageRoutes}>
      <div className="content-padding grid md:grid-cols-2 gap-x-7">
        <ProjectList projects={projects} />
      </div>
    </Layout>
  );
};

export default Projects;
