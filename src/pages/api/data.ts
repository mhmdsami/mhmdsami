import database from "@/utils/database";
import type { SkillSet } from "../skills";
import type { ProjectProps } from "./projects";
import { AssetAttributionProps, InspirationProps, TechStackProps } from "../attributions";
import type { NextApiRequest, NextApiResponse } from "next";

export interface Data {
  name: string;
  greetings: Array<string>;
  tags: Array<string>;
  skillSets: Array<SkillSet>;
  featuredProjects: Array<ProjectProps>;
  inspirations: Array<InspirationProps>;
  assets: Array<AssetAttributionProps>;
  techStack: Array<TechStackProps>;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db = await database();
  const data: Data = JSON.parse(
    JSON.stringify(await db.collection("data").findOne({}))
  );

  res.status(200).json(data);
};

export default handler;
