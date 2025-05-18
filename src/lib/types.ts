
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl: string;
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  imageHint?: string; // For data-ai-hint
}
