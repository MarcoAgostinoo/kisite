export interface Article {
    documentId: string;
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    updatedAt: string;
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