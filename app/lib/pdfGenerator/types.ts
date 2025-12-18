export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
}

export interface CVData {
  name: string;
  title: string;
  contact: {
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    portfolio: string;
  };
  about: string;
  skills: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    devops: string[];
    complementary: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  goals: string;
  differentials: string[];
  languages: string[];
  generatedDate: string;
}
