export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  projectUrl: string;
  tags: string[];
  role: string;
  image?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  current: boolean;
  location?: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
  status: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface CareerMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  current?: boolean;
}
