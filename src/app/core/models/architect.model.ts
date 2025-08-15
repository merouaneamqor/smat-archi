export interface Architect {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  certifications: string[];
  languages: string[];
  avatar: string;
  coverImage: string;
  philosophy: string;
  approach: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: number;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'technical' | 'design' | 'management' | 'software';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}
