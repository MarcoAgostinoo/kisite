import React from "react";
import axios from "axios";
import Link from "next/link";
import ArticleCard from "../../components/Post/ArticleCard";
import NavBar from "@/app/components/navbar/NavBar";
import CustomFooter from "@/app/components/footer/CustomFooter";

// Interface para o artigo
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
  category?: { name: string; slug: string }; // Adicionando categoria
  author?: { name: string; avatar?: { url: string } };
}

// Função para buscar artigos
const fetchArticles = async (): Promise<Article[]> => {
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
        : undefined, // Mapeando categoria
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
    console.error("Erro ao buscar artigos:", error);
    return [];
  }
};

// Função para extrair categorias únicas
const extractUniqueCategories = (articles: Article[]): { name: string; slug: string }[] => {
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

const KiBlog = async () => {
  const articles = await fetchArticles();
  const uniqueCategories = extractUniqueCategories(articles); // Extraindo categorias únicas

  return (
    <div className="m-4 mt-20 lg:mt-56">
      {/* Navbar */}
      <NavBar />
      {/* Título da Página */}
      <div>
        <h2 className="m-16 mb-6 w-3/4 text-left text-6xl font-extrabold text-primaryBlue">
          BLOG SOBRE WEB DESIGN, SEO E VENDAS ONLINE
        </h2>
      </div>
      {/* Layout Principal */}
      <div className="flex p-2">
        {/* Barra Lateral com Categorias */}
        <div className="w-2/12 ml-8 mt-20">
          <p className="mb-6 font-semibold text-secondaryBlue text-xl">CATEGORIAS</p>

          {/* Opção "Todos" */}
          <Link href="/pages/kiblog" passHref>
            <p className="mb-4 font-semibold text-gray-400 text-base hover:text-secondaryBlue cursor-pointer">
              Todos
            </p>
          </Link>

          {/* Lista de Categorias */}
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map((category) => (
              <Link key={category.slug} href={`/pages/article/category/${category.slug}`} passHref>
                <p className="mb-4 font-semibold text-gray-400 text-base hover:text-secondaryBlue cursor-pointer">
                  {category.name}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 text-base">Nenhuma categoria disponível</p>
          )}
        </div>
        {/* Lista de Artigos */}
        <div className="w-10/12 m-0 lg:m-8 grid grid-cols-1 gap-6 p-10 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      {/* Footer */}
      <CustomFooter />
    </div>
  );
};

export default KiBlog;