import database from "@utils/database";
import type { ProjectProps } from "./projects";
import type { NextApiRequest, NextApiResponse } from 'next'

export interface SkillProps {
    name: string;
    slug: string;
    hasPage: boolean;
}

export interface SkillSet {
    title: string;
    skills: Array<SkillProps>
}

interface Data {
    name: string;
    greetings: Array<string>;
    tags: Array<string>;
    skillSets: Array<SkillSet>;
    featuredProjects: Array<ProjectProps>
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const db = await database();
    const data: Data = JSON.parse(JSON.stringify(await db.collection("data").findOne({})));

    res.status(200).json(data);
}

export default handler;
