import database from "../../utils/database";
import type { NextApiRequest, NextApiResponse } from 'next'

export interface ProjectProps {
    name: string;
    image?: string;
    repo?: string;
    deps?: string;
    tags: Array<string>;
    desc: string;
}

interface Data {
    data: Array<ProjectProps>
}

const projectsHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) =>{
    const db = await database();
    const data: Data = JSON.parse(JSON.stringify(await db.collection("projects").find({}).toArray()));

    res.status(200).json(data);
}

export default projectsHandler;
