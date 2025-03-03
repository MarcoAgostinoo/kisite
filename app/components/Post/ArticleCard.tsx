import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    cover?: { url: string };
    category?: { name: string; slug: string };
    author?: { name: string; avatar?: { url: string } };
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const BASE_URL = "https://cms-kisite-production.up.railway.app";
  const coverUrl = article.cover?.url ? `${BASE_URL}${article.cover.url}` : null;
  const avatarUrl = article.author?.avatar?.url ? `${BASE_URL}${article.author.avatar.url}` : null;

  return (
    <Link 
      href={`/pag/kiblog/${article.slug}`}
      className="block transform transition-transform hover:scale-102 duration-300"
    >
      <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="relative h-48 w-full">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="h-full w-full bg-gray-200 dark:bg-gray-700" />
          )}
          {article.category && (
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-secondaryBlue px-3 py-1 text-sm font-semibold text-white">
                {article.category.name}
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-primaryBlue dark:text-white">
            {article.title}
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            {article.description.substring(0, 150)}...
          </p>
          <div className="flex items-center justify-between">
            {article.author && (
              <div className="flex items-center">
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt={article.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                )}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {article.author.name}
                </span>
              </div>
            )}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {format(new Date(article.publishedAt), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
