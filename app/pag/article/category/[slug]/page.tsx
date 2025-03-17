import React from "react";
import axios from "axios";
import ArticleCard from "@/app/components/cardBlog/CardBlog";

// Interfaces
interface Article {
  id: number;
  documentId?: string;
  title: string;
  description: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string;
  cover?: { url: string };
  category?: { name: string; slug: string };
  author?: { name: string; avatar?: { url: string } };
}

interface CategoryPageProps {
  params: { slug: string };
}

// Função para buscar artigos por categoria
const fetchArticlesByCategory = async (categorySlug: string): Promise<Article[]> => {
  try {
    const res = await axios.get(
      `https://cms-kisite-production.up.railway.app/api/articles?populate=*&filters[category][slug][$eq]=${categorySlug}`
    );
    return res.data.data.map((article: any) => ({
      id: article.id,
      documentId: article.documentId,
      title: article.title,
      description: article.description,
      slug: article.slug,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      publishedAt: article.publishedAt,
      cover: article.cover ? { url: article.cover.url } : undefined,
      category: article.category
        ? { name: article.category.name, slug: article.category.slug }
        : undefined,
      author: article.author
        ? {
            name: article.author.name,
            avatar: article.author.avatar
              ? { url: article.author.avatar.url }
              : undefined,
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Erro ao buscar artigos por categoria:", error);
    return [];
  }
};

// Função para buscar todas as categorias (para a barra lateral)
const fetchAllArticles = async (): Promise<Article[]> => {
  try {
    const res = await axios.get(
      "https://cms-kisite-production.up.railway.app/api/articles?populate=*"
    );
    return res.data.data.map((article: any) => ({
      id: article.id,
      documentId: article.documentId,
      title: article.title,
      description: article.description,
      slug: article.slug,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      publishedAt: article.publishedAt,
      cover: article.cover ? { url: article.cover.url } : undefined,
      category: article.category
        ? { name: article.category.name, slug: article.category.slug }
        : undefined,
      author: article.author
        ? {
            name: article.author.name,
            avatar: article.author.avatar
              ? { url: article.author.avatar.url }
              : undefined,
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Erro ao buscar todos os artigos:", error);
    return [];
  }
};

// Função para extrair categorias únicas
const extractUniqueCategories = (
  articles: Article[]
): { name: string; slug: string }[] => {
  const categoriesSet = new Set<string>();
  const categories: { name: string; slug: string }[] = [];
  articles.forEach((article) => {
    if (article.category && !categoriesSet.has(article.category.slug)) {
      categoriesSet.add(article.category.slug);
      categories.push(article.category);
    }
  });
  return categories;
};

async function getCategoryArticles(slug: string) {
  try {
    const res = await axios.get(
      `https://cms-kisite-production.up.railway.app/api/articles?populate=*&filters[category][slug][$eq]=${slug}`
    );
    return res.data.data;
  } catch (error) {
    return [];
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const articles = await getCategoryArticles(params.slug);

  return (
    <div className="bg-gray-50 pt-56 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
          Artigos na categoria: {params.slug}
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: any) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}