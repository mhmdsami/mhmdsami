import {Layout, Project} from "../components";
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {ProjectProps} from "./api/projects";
import React from "react";

interface ProjectsPageProps {
    projects: Array<ProjectProps>;
}

const projects = ( {projects}: ProjectsPageProps ) => {
    return (
        <Layout pageName="Projects">
            <div className="grid gap-x-7 mx-10 md:mx-20 lg:mx-44 xl:mx-96">
                {projects.map(( {name, image, repo, deps, tags, desc}: ProjectProps, index: number) => (
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
