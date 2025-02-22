// Interface para representar um bloco de conteúdo
export interface Block {
  id: number;
  body: string; // Ajuste o tipo conforme necessário
}

// Interface para representar a categoria do artigo
export interface Category {
  name: string;
  slug: string;
}

// Interface para representar o autor do artigo
export interface Author {
  name: string;
  avatar?: {
    url: string; // URL do avatar
  };
}

// Interface principal para representar um artigo
export interface Article {
  id: number; // ID único do artigo
  documentId?: string; // ID do documento (opcional)
  title: string; // Título do artigo
  description: string; // Descrição do artigo
  slug: string; // Slug para URLs amigáveis
  createdAt?: string; // Data de criação (opcional)
  updatedAt?: string; // Data de atualização (opcional)
  publishedAt: string; // Data de publicação
  cover?: { url: string }; // URL da imagem de capa (opcional)
  category?: Category; // Categoria do artigo (opcional)
  author?: Author; // Autor do artigo (opcional)
  blocks?: Block[]; // Lista de blocos de conteúdo (opcional)
}
