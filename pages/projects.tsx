import { Layout, Project } from "../components";
import { projectsPageRoutes } from "../constants";
import React from "react";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import type { ProjectProps } from "./api/projects";

interface ProjectsPageProps {
    projects: Array<ProjectProps>;
}

const projects = ({ projects }: ProjectsPageProps) => {
    return (
        <Layout pageName="Projects" routes={projectsPageRoutes}>
            <div className="grid gap-x-7 content-margin">
                {projects.map(({ name, image, repo, deps, tags, desc }: ProjectProps, index: number) => (
                    <Project key={index} name={name} image={image} repo={repo} deps={deps} tags={tags}>
                        {desc}
                    </Project>
                ))}
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const res = await fetch(`${process.env.API_BASE_URL}/api/projects`);
    const projects = await res.json();

    return {
        props: { projects }
    };
};

export default projects;
