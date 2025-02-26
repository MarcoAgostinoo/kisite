import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Article } from "@/app/types/Article"; // ajuste o caminho conforme sua estrutura de pastas

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const BASE_URL = "https://cms-kisite-production.up.railway.app";
  const coverUrl = article.cover?.url
    ? `${BASE_URL}${article.cover.url}`
    : null;
  const avatarUrl = article.author?.avatar?.url
    ? `${BASE_URL}${article.author.avatar.url}`
    : null;

  return (
    <div className="flex cursor-pointer flex-col rounded-md border bg-white p-4 align-middle shadow transition-shadow hover:shadow-lg">
      {/* Título com Link para o artigo */}
      <Link href={`/pag/article/${article.slug}`}>
        <h2 className="mb-6 mt-4 h-20 overflow-hidden text-left text-xl font-semibold text-primaryBlue">
          {article.title}
        </h2>
        {coverUrl && (
          <Image
            src={coverUrl}
            alt="Imagem do artigo"
            width={300}
            height={250}
            style={{ width: "100%", height: "auto", maxHeight: "226px" }}
            className="mb-4 h-auto rounded object-contain"
          />
        )}

        {article.description && <p className="mb-2">{article.description}</p>}

        {article.category && (
          <p className="mb-2 text-sm text-gray-600">
            Categoria: {article.category.name}
          </p>
        )}

        {article.author && (
          <div className="mb-2 flex items-center">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt={`Avatar de ${article.author.name}`}
                width={30}
                height={30}
                className="mr-2 rounded-full"
              />
            )}
            <p className="text-sm text-gray-600">Por: {article.author.name}</p>
          </div>
        )}

        <p className="mb-2 text-xs text-gray-500">
          Publicado em:{" "}
          {format(new Date(article.publishedAt), "dd/MM/yyyy", {
            locale: ptBR,
          })}
        </p>
      </Link>
    </div>
  );
};

export default ArticleCard;
