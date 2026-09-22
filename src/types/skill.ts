export type SkillCategory =
  | 'development'
  | 'data'
  | 'apis-testing'
  | 'tools-security'
  | 'systems-infrastructure';

export interface Skill {
  name: string;
  category: SkillCategory;
  featured?: boolean;
}
