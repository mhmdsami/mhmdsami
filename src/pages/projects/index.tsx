import { Layout, ProjectList } from "@/components/shared";
import { projectsPageRoutes } from "@/shared/routes";
import React from "react";
import type { Project } from "@/shared/types";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

interface ProjectsPageProps {
  projects: Array<Project>;
}

const projects = ({ projects }: ProjectsPageProps) => {
  return (
    <Layout pageName="Projects" routes={projectsPageRoutes}>
      <div className="content-margin grid gap-x-7">
        <ProjectList projects={projects} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(`${process.env.API_BASE_URL}/api/projects`);
  const projects = await res.json();

  return {
    props: { projects },
  };
};

export default projects;
