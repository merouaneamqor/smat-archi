export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  location: string;
  year: number;
  area: string;
  status: 'completed' | 'in-progress' | 'concept';
  category: 'residential' | 'commercial' | 'public' | 'landscape' | 'interior';
  images: ProjectImage[];
  features: string[];
  technologies: string[];
  client?: string;
  team?: string[];
  awards?: string[];
  publishedAt: Date;
  slug: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  isMain: boolean;
  category: 'exterior' | 'interior' | 'plan' | 'section' | 'detail' | 'process';
}

export interface ProjectFilter {
  category?: string;
  status?: string;
  year?: number;
  location?: string;
}
