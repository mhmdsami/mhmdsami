import type { NextApiRequest, NextApiResponse } from 'next'
import database from "../../utils/database";

interface Skill {
    name: string;
    slug: string;
}

interface SkillSet {
    title: string;
    skills: Array<Skill>
}

interface Data {
    name: string;
    greetings: Array<string>;
    tags: Array<string>;
    skillSets: Array<SkillSet>;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const db = await database();
    const collection = db.collection("data");
    const data: Data = JSON.parse(JSON.stringify(await collection.find().toArray()));
    res.status(200).json(data)
}

export default handler;
