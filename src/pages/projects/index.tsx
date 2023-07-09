import { Layout, ProjectList } from "@/components/shared";
import { projectsPageRoutes } from "@/shared/routes";
import type { Project } from "@/shared/types";
import type { GetStaticProps } from "next";

interface ProjectsPageProps {
  projects: Array<Project>;
}

const projects = ({ projects }: ProjectsPageProps) => {
  return (
    <Layout pageName="Projects" routes={projectsPageRoutes}>
      <div className="content-padding grid md:grid-cols-2 gap-x-7">
        <ProjectList projects={projects} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: ProjectsPageProps;
}> => {
  const res = await fetch(`${process.env.API_BASE_URL}/projects`);
  const projects = await res.json();

  return {
    props: { projects },
  };
};

export default projects;
