// src/types/Article.ts

export interface Article {
  id: number;
  documentId?: string; // Tornando opcional
  title: string;
  description: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string;
  cover?: { url: string };
  author?: { name: string; avatar?: { url: string } };
}
