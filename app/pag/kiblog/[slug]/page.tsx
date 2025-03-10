import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import axios from "axios";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Importação dinâmica do CardPagSlug com loading fallback
const CardPagSlug = dynamic(
  () => import("@/app/components/cardBlog/CardPagSlug"),
  {
    loading: () => (
      <div className="animate-pulse">
        <div className="mb-4 h-24 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-4 h-24 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-4 h-24 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-24 rounded bg-gray-200 dark:bg-gray-700"></div>
      </div>
    ),
  },
);

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

interface ArticleHeaderProps {
  article: ArticleData;
}

interface ArticleContentProps {
  article: ArticleData;
  coverUrl: string | null;
}

async function getArticle(slug: string): Promise<ArticleData | null> {
  try {
    const response = await axios.get(
      `https://cms-kisite-production.up.railway.app/api/articles?filters[slug][$eq]=${slug}&populate=*`,
    );
    return response.data.data[0] || null;
  } catch (error) {
    console.error("Erro ao buscar artigo:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticle(params.slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo que você está procurando não foi encontrado.",
    };
  }

  return {
    title: `${article.title} | Blog KiSite`,
    description: article.description,
  };
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between border-b border-gray-200 border-opacity-10 pb-4">
      <div className="flex flex-wrap items-center">
        {article.author && (
          <div className="mb-5 mr-10 flex items-center">
            <div className="w-full">
              <span className="mb-1 text-base font-medium text-gray-600 dark:text-gray-400">
                Por <span className="font-semibold">{article.author.name}</span>
              </span>
            </div>
          </div>
        )}
      </div>

      {article.category && (
        <div className="mb-5">
          <span className="inline-flex items-center justify-center rounded-full bg-secondaryBlue px-4 py-2 text-sm font-semibold text-white">
            {article.category.name}
          </span>
        </div>
      )}
    </div>
  );
};

const ArticleContent = ({ article, coverUrl }: ArticleContentProps) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none text-base font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
      <p className="mb-10 text-base font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
        {article.description}
      </p>

      {coverUrl && (
        <div className="mb-10 w-full overflow-hidden rounded-lg">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image
              src={coverUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              quality={75}
            />
          </div>
        </div>
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none text-base font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: article.blocks?.[0]?.body || article.description,
        }}
      />
    </div>
  );
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  // Log the category slug to verify it's correct
  console.log("Category slug:", article.category?.slug);
  console.log("Article ID:", article.id);

  const coverUrl = article.cover?.formats?.large?.url
    ? `https://cms-kisite-production.up.railway.app${article.cover.formats.large.url}`
    : null;

  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-between lg:flex-row">
      <div className="min-h-screen flex-1 overflow-hidden bg-gray-50 pt-56 dark:bg-gray-900">
        <article className="max-w-4xl px-4 py-12">
          <h1 className="mb-8 text-3xl font-bold leading-tight text-primaryBlue dark:text-white sm:text-4xl sm:leading-tight">
            {article.title}
          </h1>

          <ArticleHeader article={article} />

          <ArticleContent article={article} coverUrl={coverUrl} />
        </article>
      </div>

      <div className="mt-56 h-fit w-full px-4 lg:sticky lg:top-56 lg:w-96">
        <h4 className="text-dark mb-6 text-2xl font-semibold dark:text-white">
          Artigos Recentes
        </h4>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
          <CardPagSlug currentPostId={article.id} />
        </div>
      </div>
    </div>
  );
}
