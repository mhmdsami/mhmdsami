import {Button, Error, Layout, Tag} from "@components";
import Image from "next/image";
import Link from "next/link";
import type { ProjectProps } from "../api/projects";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

const project = ({ name, project, desc, deps, tags, image }: ProjectProps) => {
    return(
        <div>
            {name ?(
                <Layout pageName={name}>
                    <div className="content-margin flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p>{desc}</p>
                        <div className="flex flex-col md:flex-row md:w-3/4 gap-2">
                            <p className="uppercase font-bold whitespace-nowrap">built with</p>
                            <div className="flex flex-wrap md:flex-nowrap gap-2">{tags.map((tag, index) => <Tag key={index}><Link href={`/skills/${tag}`}>{tag}</Link></Tag>)}</div>
                        </div>
                        <div className="self-center">
                            {image && (deps
                                    ? <Link href={deps}><Image src={`/projects/${image}`} alt={name} width={2880} height={1410} className="rounded-sm md:rounded-md hover:cursor-pointer" /></Link>
                                    : <Image src={`/projects/${image}`} alt={name} width={2880} height={1410} className="rounded-sm md:rounded-md" />)}
                        </div>
                    </div>
                </Layout>
            ) : (
                <Error pageName={project} errorCode="404" error="Project Not Found" accessedUrl={project} redirectTo="/projects" buttonContent="explore other projects" />
            )}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { project } = context.query;
    const res = await fetch(`${process.env.API_BASE_URL}/api/projects/${project}`);
    const projectDetails = await res.json();

    return {
        props: { ...projectDetails, project }
    };
}

export default project;
