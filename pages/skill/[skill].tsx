import {Layout, Project} from "../../components";
import type {GetServerSideProps, GetServerSidePropsContext} from "next";
import {ProjectProps} from "../api/projects";
import React from "react";
import {NavbarRoute} from "../../components/Navbar";

interface SkillPageProps {
    projects: Array<ProjectProps>;
}

const skill = ( { projects } : SkillPageProps) => {
    const routes: Array<NavbarRoute> = [
        { page: "projects", href: "/projects"},
        { page: "blog", href: "/blog" },
        { page: "github", href: "https://github.com/sm-sami" }
    ]

    return (
        <Layout routes={routes}>
            <div className="grid gap-x-7 content-margin">
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
    const skill = typeof context.query.skill === "string" ? context.query.skill : " ";

    const res = await fetch(`${process.env.API_BASE_URL}/api/projects`);
    const data = await res.json();

    const projects: Array<ProjectProps> = data.filter(({ tags }: ProjectProps) => tags.includes(skill));

    return {
        props: { projects }
    };
};
export default skill;
