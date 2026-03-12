export interface MovieProps {
  id: string;
  director: string;
  title: string;
  tagLine: string;
  imageLink: string;
  audioLink: string;
  rating: string;
  releaseYear: string;
  type: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  movieDescription: string;
}

export interface SidebarLinks {
  label: string;
  icon?: React.ReactNode;
  link?: string;
  cursor?: boolean;
}
