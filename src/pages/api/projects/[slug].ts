import database from "@/shared/utils/database";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "@/shared/types";

interface Data {
  data: Project;
}

const projectHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { slug } = req.query;
  const db = await database();
  const data: Data = JSON.parse(
    JSON.stringify(await db.collection("projects").findOne({ slug }))
  );

  res.status(200).json(data);
};

export default projectHandler;
