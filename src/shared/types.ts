export interface Project {
  name: string;
  image?: string;
  repo?: string;
  deps?: string;
  tags: Array<string>;
  desc: string;
  contributed?: boolean;
  organizationUrl?: string;
  slug: string;
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
