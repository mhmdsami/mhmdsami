import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  image?: StaticImageData;
  repo?: string;
  deployment?: string;
  skills: Array<Skill>;
  description: string;
  contributed?: boolean;
  organizationUrl?: string;
}

export interface Skill {
  name: string;
  slug?: string;
}

export interface SkillSet {
  title: string;
  skills: Array<Skill>;
}
