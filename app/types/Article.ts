export interface Article {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string; // Tornar opcional se necessário
  cover?: {
    url: string;
  };
  author?: {
    name: string;
    avatar?: {
      url: string;
    };
  };
}