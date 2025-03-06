import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  cover: {
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
}

interface CardPagSlugProps {
  currentPostId: number;
}

const CardPagSlug: React.FC<CardPagSlugProps> = async ({ currentPostId }) => {
  const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://cms-kisite-production.up.railway.app";

  const getLatestPosts = async (): Promise<Article[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/api/articles`, {
        params: {
          populate: "*",
          "pagination[pageSize]": 4,
          "filters[id][$ne]": currentPostId,
          "sort[0]": "publishedAt:desc",
        },
      });

      if (!response.data?.data) {
        console.error("Dados inválidos recebidos da API");
        return [];
      }

      return response.data.data;
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
      return [];
    }
  };

  const posts = await getLatestPosts();

  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
        Nenhum artigo relacionado encontrado.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => {
        // Verifica se existe cover e constrói a URL
        const coverUrl = post.cover?.url
          ? `${BASE_URL}${post.cover.url}`
          : null;

        return (
          <Link
            key={post.id}
            href={`/pag/kiblog/${post.slug}`}
            className="group flex items-center space-x-4 rounded-lg p-2 transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
              {coverUrl ? (
                <Image
                  src={coverUrl}
                  alt={post.title || "Imagem do artigo"}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700" />
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-primaryBlue dark:text-white">
                {post.title || "Sem título"}
              </h3>
              <time className="text-xs text-gray-500 dark:text-gray-400">
                {format(
                  new Date(post.publishedAt || new Date()),
                  "dd 'de' MMMM 'de' yyyy",
                  {
                    locale: ptBR,
                  },
                )}
              </time>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardPagSlug;
