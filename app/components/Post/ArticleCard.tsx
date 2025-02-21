import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const BASE_URL = "https://cms-kisite-production.up.railway.app";
  const coverUrl = article.cover?.url ? `${BASE_URL}${article.cover.url}` : null;
  const avatarUrl = article.author?.avatar?.url ? `${BASE_URL}${article.author.avatar.url}` : null;

  return (
    <div className="flex flex-col align-middle border rounded-lg p-4 shadow hover:shadow-lg transition-shadow cursor-pointer">
      {/* Title wrapped in Link */}
      <Link href={`/pages/article/${article.slug}`} passHref>
        <h2 className="text-primaryBlue text-left h-20 overflow-hidden text-xl font-semibold mb-6 mt-4">
          {article.title}
        </h2>
      </Link>

      {coverUrl && (
        <Image
          src={coverUrl}
          alt="Imagem do artigo"
          width={300}
          height={250}
          style={{ width: "100%", height: "auto", maxHeight: "226px" }}
          className="h-auto mb-4 rounded object-contain"
        />
      )}

      <p className="mb-2">{article.description}</p>

      {article.category && (
        <Link href={`/pages/article/category/${article.category.slug}`} passHref>
          <p className="text-sm text-gray-600 mb-2 cursor-pointer hover:underline">
            Categoria: {article.category.name}
          </p>
        </Link>
      )}

      {article.author && (
        <div className="flex items-center mb-2">
          {avatarUrl && (
            <Image
              src={avatarUrl}
              alt={`Avatar de ${article.author.name}`}
              width={30}
              height={30}
              className="rounded-full mr-2"
            />
          )}
          <p className="text-sm text-gray-600">Por: {article.author.name}</p>
        </div>
      )}

      <p className="text-xs text-gray-500 mb-2">
        Publicado em: {format(new Date(article.publishedAt), "dd/MM/yyyy", { locale: ptBR })}
      </p>
    </div>
  );
};
export default ArticleCard;