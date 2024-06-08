import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  image?: StaticImageData;
  repo?: string;
  deps?: string;
  tags: Array<string>;
  desc: string;
  contributed?: boolean;
  organizationUrl?: string;
}

export interface Skill {
  name: string;
  slug: string;
  showSkill: boolean;
  makePage: boolean;
}

export interface SkillSet {
  title: string;
  skills: Array<Skill>;
}
