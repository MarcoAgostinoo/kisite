import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    cover: {
      url: string;
      formats?: {
        thumbnail?: { url: string };
        medium?: { url: string };
      };
      alternativeText?: string | null; // Permitir 'null' aqui
    };
    author?: {
      name: string;
    };
    category?: {
      name: string;
    };
  };
}


export default function ArticleCard({ article }: ArticleCardProps) {
  const imageUrl =
    article.cover?.formats?.medium?.url ||
    article.cover?.formats?.thumbnail?.url ||
    article.cover?.url;

  return (
    <Link href={`/article/${article.slug}`} legacyBehavior>
      <a className="block bg-white shadow-lg rounded-xl overflow-hidden mb-6">
        {imageUrl && (
          <Image
            src={`https://cms-kisite-production.up.railway.app${imageUrl}`}
            alt={article.cover.alternativeText || article.title}
            width={400}
            height={240}
            className="w-full h-60 object-cover"
          />
        )}
        <div className="p-6">
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <p className="text-gray-500 text-sm">
            Por {article.author?.name || "Autor Desconhecido"} -{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          {article.category && (
            <p className="text-gray-400 text-xs">
              Categoria: {article.category.name}
            </p>
          )}
          <p className="mt-4 text-gray-700">
            {article.description.slice(0, 50)}...
          </p>
        </div>
      </a>
    </Link>
  );
}
