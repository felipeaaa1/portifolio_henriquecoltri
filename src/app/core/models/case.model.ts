export interface Case {
  id: number;
  title: string;
  slug: string;
  summary: string;
  imageUrl?: string;
  featured: boolean;
  accent: string;
}
