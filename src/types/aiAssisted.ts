export interface AIAssistedPractice {
  id: string;
  title: string;
  description: string;
}

export type AIToolStatus = 'used' | 'learning';

export type AIToolCategory =
  | 'ai-assistants'
  | 'research-documentation'
  | 'assisted-development'
  | 'visual-communication'
  | 'learning-exploration';

export interface AITool {
  id: string;
  name: string;
  category: AIToolCategory;
  usage?: string;
  status?: AIToolStatus;
}

export interface AIToolCategoryGroup {
  id: AIToolCategory;
  label: string;
}

export interface AIAssistedContent {
  introduction: string;
  practices: AIAssistedPractice[];
  toolsHeading: string;
  toolCategories: AIToolCategoryGroup[];
  tools: AITool[];
  humanControlStatement: string;
}
