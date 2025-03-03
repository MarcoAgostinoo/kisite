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

const CardBlog: React.FC<ArticleCardProps> = ({ article }) => {
  const BASE_URL = "https://cms-kisite-production.up.railway.app";
  const coverUrl = article.cover?.url
    ? `${BASE_URL}${article.cover.url}`
    : null;
  const avatarUrl = article.author?.avatar?.url
    ? `${BASE_URL}${article.author.avatar.url}`
    : null;

  return (
    <Link
      href={`/pag/kiblog/${article.slug}`}
      className="hover:scale-102 block h-full transform transition-transform duration-300"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="relative h-48 w-full flex-shrink-0">
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
        <div className="flex flex-grow flex-col p-6">
          <div className="flex-grow">
            <h3 className="mb-2 line-clamp-2 overflow-hidden text-xl font-bold text-primaryBlue dark:text-white">
              {article.title}
            </h3>
            <p className="mb-4 line-clamp-3 overflow-hidden text-gray-600 dark:text-gray-300">
              {article.description}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
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

export default CardBlog;
