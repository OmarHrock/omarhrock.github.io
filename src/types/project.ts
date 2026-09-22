export type ProjectStatus = 'completed' | 'in-progress' | 'archived' | 'planned';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description?: string;
  context?: string;
  problem?: string;
  solution?: string;
  role?: string;
  technologies: string[];
  results?: string[];
  learnings?: string[];
  images?: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  status: ProjectStatus;
}
