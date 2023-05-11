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

interface Skill {
  name: string;
  slug: string;
  hasPage: boolean;
}

export interface SkillSet {
  title: string;
  skills: Array<Skill>;
}

export interface Inspiration {
  name: string;
  github: string;
  portfolio: string;
}

export interface AssetAttribution {
  name: string;
  assetUrl: string;
  contributorName: string;
  contributorUrl: string;
}

export interface TechStack {
  name: string;
  url: string;
}

export interface Data {
  name: string;
  greetings: Array<string>;
  tags: Array<string>;
  skillSets: Array<SkillSet>;
  featuredProjects: Array<Project>;
  inspirations: Array<Inspiration>;
  assets: Array<AssetAttribution>;
  techStack: Array<TechStack>;
}

export interface Route {
  page: string;
  href: string;
  isSamePage?: boolean;
}
