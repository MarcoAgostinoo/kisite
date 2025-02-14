// src/types/Article.ts

export interface Block {
  id: number;
  body: string; // Ajuste o tipo conforme necessário
}

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
  blocks?: Block[]; // Adicionando a propriedade blocks
}
