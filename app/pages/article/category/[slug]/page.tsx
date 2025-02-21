import React from "react";
import axios from "axios";
import ArticleCard from "@/app/components/Post/ArticleCard";
import Link from "next/link";
import { notFound } from "next/navigation";

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

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = params;
  const articles = await fetchArticlesByCategory(slug); // Artigos filtrados pela categoria
  const allArticles = await fetchAllArticles(); // Todos os artigos para categorias na barra lateral
  const uniqueCategories = extractUniqueCategories(allArticles);

  if (articles.length === 0) {
    notFound(); // Retorna 404 se não houver artigos na categoria
  }

  const categoryName = articles[0]?.category?.name || "Categoria";

  return (
    <div className="m-4 mt-20 lg:mt-56">
      <div>
        <h2 className="m-16 mb-6 w-3/4 text-left text-6xl font-extrabold text-primaryBlue">
          {`Artigos sobre ${categoryName}`}
        </h2>
      </div>
      <div className="flex p-2">
        <div className="ml-8 mt-20 w-2/12">
          <p className="mb-6 text-xl font-semibold text-secondaryBlue">
            CATEGORIAS
          </p>

          {/* Opção "Todos" */}
          <Link href="/pages/kiblog" passHref>
            <p
              className={`mb-4 cursor-pointer text-base font-semibold ${
                slug === "todos" ? "text-secondaryBlue" : "text-gray-400 hover:text-secondaryBlue"
              }`}
            >
              Todos
            </p>
          </Link>

          {/* Lista de Categorias */}
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/pages/article/category/${category.slug}`}
                passHref
              >
                <p
                  className={`mb-4 cursor-pointer text-base font-semibold ${
                    category.slug === slug
                      ? "text-secondaryBlue"
                      : "text-gray-400 hover:text-secondaryBlue"
                  }`}
                >
                  {category.name}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-base text-gray-400">
              Nenhuma categoria disponível
            </p>
          )}
        </div>
        <div className="m-0 grid w-10/12 grid-cols-1 gap-6 p-10 md:grid-cols-2 lg:m-8 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;