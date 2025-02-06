"use client";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import Image from "next/image";

interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width: number;
    height: number;
    formats?: {
      thumbnail?: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  author: {
    id: number;
    documentId: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  blocks: any[];
}

export default function BlogArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch(
          "https://cms-kisite-production.up.railway.app/api/articles?populate=*",
          {
            headers: {
              Authorization: "YOUR_API_KEY", // Substitua pela sua chave de API
            },
          }
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os artigos");
        }
        const json = await response.json();
        // Considerando que os dados dos artigos estão em json.data
        const articlesData = json.data.slice(0, 15);
        setArticles(articlesData);
      } catch (error) {
        console.error(error);
        setError("Falha ao carregar artigos");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div className="mx-auto mt-32 max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">KiBlog</h1>
      <div className="flex flex-col items-center justify-center">
        {loading && (
          <div className="flex flex-col items-center">
            <Image
              src="/Loading_2.gif"
              alt="Carregando"
              width={70}
              height={70}
              className="object-contain"
            />
            <p className="mt-2">Carregando artigos...</p>
          </div>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
