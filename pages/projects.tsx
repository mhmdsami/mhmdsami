import {Layout, Project} from "../components";
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {ProjectDataProps} from "./api/projects";
import React from "react";

interface ProjectsPageProps {
    projects: Array<ProjectDataProps>;
}

const projects = ( {projects}: ProjectsPageProps) => {
    return (
        <Layout pageName="projects">
            <div className="grid md:grid-cols-2 gap-x-7">
                {projects.map(( {name, image, repo, deps, tags, desc}: ProjectDataProps, index: number) => (
                    <Project key={index} name={name} image={image} repo={repo} deps={deps}>
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
