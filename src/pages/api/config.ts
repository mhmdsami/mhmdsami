import database from "@/shared/utils/database";
import type { Config } from "@/shared/types";
import type { NextApiRequest, NextApiResponse } from "next";

const configHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Config>
) => {
  const db = await database();
  const data: Config = JSON.parse(
    JSON.stringify(await db.collection("config").findOne({}))
  );

  res.status(200).json(data);
};

export default configHandler;
