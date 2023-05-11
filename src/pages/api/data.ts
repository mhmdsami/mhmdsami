import database from "@/shared/utils/database";
import type { Data } from "@/shared/types";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db = await database();
  const data: Data = JSON.parse(
    JSON.stringify(await db.collection("data").findOne({}))
  );

  res.status(200).json(data);
};

export default handler;
