import {Layout, Project} from "../../components";
import type {GetServerSideProps, GetServerSidePropsContext} from "next";
import {ProjectDataProps} from "../api/projects";
import React from "react";

interface SkillPageProps {
    projects: Array<ProjectDataProps>;
}

const skill = ( { projects } : SkillPageProps) => {
    return (
        <Layout>
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
    const skill = typeof context.query.skill === "string" ? context.query.skill : " ";

    const res = await fetch(`${process.env.API_BASE_URL}/api/projects`);
    const data = await res.json();

    const projects: Array<ProjectDataProps> = data.filter(({ tags }: ProjectDataProps) => tags.includes(skill));

    return {
        props: { projects }
    };
};
export default skill;
