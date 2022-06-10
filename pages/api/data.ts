import type { NextApiRequest, NextApiResponse } from 'next'
import database from "../../utils/database";

export interface SkillProps {
    name: string;
    slug: string;
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
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const db = await database();
    const data: Data = JSON.parse(JSON.stringify(await db.collection("data").findOne({})));

    res.status(200).json(data);
}

export default handler;
