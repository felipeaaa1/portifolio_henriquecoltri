export interface ProjectGalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  coverImage: string;
  category: string;
  summary: string;
  projectType: string;
  segment: string;
  author: string;
  period: string;
  gallery: ProjectGalleryImage[];
}
