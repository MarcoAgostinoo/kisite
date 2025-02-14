import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "../../types/Article";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const BASE_URL = "https://cms-kisite-production.up.railway.app";
  const coverUrl = article.cover?.url ? `${BASE_URL}${article.cover.url}` : null;
  const avatarUrl = article.author?.avatar?.url ? `${BASE_URL}${article.author.avatar.url}` : null;

  return (
    <Link href={`/pages/article/${article.slug}`} passHref>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow cursor-pointer">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
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
          Publicado em: {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
        </p>
      </div>
    </Link>
  );
};

export default ArticleCard;