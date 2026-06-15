export type NavItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  specialization: string;
  location: string;
  github: string;
  email: string;
  cvUrl?: string;
  linkedin?: string;
  summary: string;
};

export type SummaryCard = {
  value: string;
  label: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  impact: string;
  points: string[];
};

export type ProjectItem = {
  name: string;
  type: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  link?: string;
};

export type CaseStudyDecision = {
  title: string;
  text: string;
};

export type CaseStudy = {
  problem: string;
  architecture: string[];
  decisions: CaseStudyDecision[];
  stack: string[];
};

export type Principle = {
  title: string;
  text: string;
};

export type LearningRoadmapItem = {
  title: string;
  text: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};
