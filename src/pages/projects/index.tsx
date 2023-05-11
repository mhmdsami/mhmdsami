import { Layout, ProjectList } from "@/components";
import { projectsPageRoutes } from "@/constants";
import React from "react";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import type { ProjectProps } from "../api/projects";

interface ProjectsPageProps {
  projects: Array<ProjectProps>;
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
