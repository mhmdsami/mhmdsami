import database from "@/shared/utils/database";
import type { SkillSet } from "@/shared/types";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  data: Array<SkillSet>;
}

const skillsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const db = await database();
  const data: Data = JSON.parse(
    JSON.stringify(await db.collection("skills").find({}).toArray())
  );

  res.status(200).json(data);
};

export default skillsHandler;
