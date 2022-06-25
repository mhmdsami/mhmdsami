import { Layout, Project } from "../components";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ProjectProps } from "./api/projects";
import React from "react";
import { NavbarRoute } from "../components/Navbar";

interface ProjectsPageProps {
    projects: Array<ProjectProps>;
}

const projects = ({ projects }: ProjectsPageProps) => {
    const routes: Array<NavbarRoute> = [
        { page: "home", href: "/"},
        { page: "blog", href: "/blog"},
        { page: "github", href: "https://github.com/sm-sami" }
    ]

    return (
        <Layout pageName="Projects" routes={routes}>
            <div className="grid gap-x-7 content-margin">
                {projects.map(( { name, image, repo, deps, tags, desc }: ProjectProps, index: number) => (
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
