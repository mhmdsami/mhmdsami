import type { NextApiRequest, NextApiResponse } from 'next'
import database from "../../utils/database";

interface ProjectData {
    name: string;
    repo?: string;
    tags: Array<string>;
}

const projectsHandler = async (req: NextApiRequest, res: NextApiResponse<Array<ProjectData>>) =>{
    const db = await database();
    const collection = db.collection("projects");
    const data: Array<ProjectData> = JSON.parse(JSON.stringify(await collection.find().toArray()));
    res.status(200).send(data)
}

export default projectsHandler;