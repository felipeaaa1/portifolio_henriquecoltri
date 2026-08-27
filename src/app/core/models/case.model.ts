export interface Case {
  id: number;
  title: string;
  slug: string;
  summary: string;
  imageUrl?: string;
  detailAvailable?: boolean;
  featured: boolean;
  accent: string;
}
