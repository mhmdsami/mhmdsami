export interface Link {
  label: string;
  href?: string;
}

export interface WorkItem {
  name: string;
  summary: string;
  stack: Array<string>;
  href?: string;
  repo?: string;
}

export interface DetailPart {
  text: string;
  href?: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  previous?: {
    role: string;
    period: string;
  };
  detail: string | Array<DetailPart>;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  detail: string;
}

export interface AgentSkill {
  name: string;
  description: string;
}

export interface StackGroup {
  title: string;
  items: Array<string>;
}

export interface Profile {
  name: string;
  role: string;
  cities: Array<string>;
  country: string;
  email: string;
  intro: string;
  links: Array<Link>;
}

export interface FavoriteStack {
  items: Array<string>;
  note: string;
  link?: { label: string; href: string };
}

export interface SiteData {
  profile: Profile;
  work: Array<WorkItem>;
  also: Array<Link>;
  experience: Array<ExperienceItem>;
  education: EducationItem;
  stack: Array<StackGroup>;
  favoriteStack?: FavoriteStack;
}
