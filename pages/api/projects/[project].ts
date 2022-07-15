import database from "@utils/database";
import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProjectProps } from "./";

interface Data {
    data: ProjectProps
}

const projectHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) =>{
    const { project } = req.query;
    const db = await database();
    const data: Data = JSON.parse(JSON.stringify(await db.collection("projects").findOne({ project })));

    res.status(200).json(data);
}

export default projectHandler;
