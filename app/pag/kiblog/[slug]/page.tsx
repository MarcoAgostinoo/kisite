import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import axios from 'axios';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ArticleData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: {
    url: string;
    formats: {
      large: {
        url: string;
      };
      medium: {
        url: string;
      };
      small: {
        url: string;
      };
    };
  };
  author: {
    id: number;
    name: string;
    email: string;
  };
  category: {
    id: number;
    name: string;
    slug: string;
  };
  blocks: Array<{
    __component: string;
    id: number;
    body: string;
  }>;
}

async function getArticle(slug: string): Promise<ArticleData | null> {
  try {
    const response = await axios.get(
      `https://cms-kisite-production.up.railway.app/api/articles?filters[slug][$eq]=${slug}&populate=*`
    );
    return response.data.data[0] || null;
  } catch (error) {
    console.error('Erro ao buscar artigo:', error);
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const coverUrl = article.cover?.formats?.large?.url
    ? `https://cms-kisite-production.up.railway.app${article.cover.formats.large.url}`
    : null;

  return (
    <div className="bg-gray-50 pt-56 dark:bg-gray-900 min-h-screen">
      <article className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold text-primaryBlue dark:text-white overflow-hidden">
            {article.title}
          </h1>
        {coverUrl && (
          <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={coverUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <header className="mb-8">
          {article.category && (
            <span className="mb-4 inline-block rounded-full bg-secondaryBlue px-4 py-1 text-sm font-semibold text-white">
              {article.category.name}
            </span>
          )}
          
          <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
            {article.author && (
              <div className="flex items-center">
                <span className="font-medium">{article.author.name}</span>
              </div>
            )}
            <time dateTime={article.publishedAt}>
              {format(new Date(article.publishedAt), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </time>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ 
            __html: article.blocks?.[0]?.body || article.description 
          }}
        />
      </article>
    </div>
  );
}