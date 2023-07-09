import database from "@/shared/utils/database";
import type { Project } from "@/shared/types";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  data: Array<Project>;
}

const projectsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const db = await database();
  const data: Data = JSON.parse(
    JSON.stringify(await db.collection("projects").find({}).sort("index").toArray())
  );

  res.status(200).json(data);
};

export default projectsHandler;
