import {Layout, Tag} from "../../components";
import Image from "next/image";
import type { ProjectProps } from "../api/projects";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

const project = ({ name, tags, image }: ProjectProps) => {
    return(
        <Layout pageName={name}>
            <div className="content-padding">
                {image && <Image src={`/projects/${image}`} alt={name} width={2880} height={1410} />}
                <div className="flex gap-2">{tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { project } = context.query;
    const res = await fetch(`${process.env.API_BASE_URL}/api/projects/${project}`);
    try {
        const { name, tags, image } = await res.json();

        return {
            props: { name, tags, image }
        };
    } catch (err) {
        context.res.writeHead(302, { Location: '/404' });
        context.res.end();

        return { props: {} };
    }
}

export default project;
