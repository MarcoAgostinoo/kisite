import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Article } from "../../../types/Article";

interface PageProps {
  params: {
    slug: string;
  };
}

// Função auxiliar para corrigir a URL da imagem
function fixImageUrl(url: string): string {
  const BASE_URL = "https://cms-kisite-production.up.railway.app";
  if (!url) return "";
  if (url.startsWith("/")) {
    return BASE_URL + url;
  }
  if (url.includes("localhost:1337")) {
    return url.replace("http://localhost:1337", BASE_URL);
  }
  return url;
}

export default async function ArticlePage({ params }: PageProps) {
  const BASE_URL = "https://cms-kisite-production.up.railway.app";

  const res = await axios.get(
    `${BASE_URL}/api/articles?filters[slug][$eq]=${params.slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );

  const articles: Article[] = res.data.data;

  if (!articles || articles.length === 0) {
    notFound();
  }

  const article = articles[0];

  const coverUrl = article.cover?.url ? fixImageUrl(article.cover.url) : null;
  const avatarUrl = article.author?.avatar?.url ? fixImageUrl(article.author.avatar.url) : null;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

      {coverUrl && (
        <Image
          src={coverUrl}
          alt="Imagem do artigo"
          width={400}
          height={600}
          priority
          className="h-auto mb-4 rounded object-contain"
        />
      )}

      <p className="mb-4">{article.description}</p>

      {article.author && (
        <div className="flex items-center mb-4">
          {avatarUrl && (
            <Image
              src={avatarUrl}
              alt={`Avatar de ${article.author.name}`}
              width={50}
              height={50}
              className="rounded-full mr-2"
            />
          )}
          <p className="text-sm text-gray-600">Por: {article.author.name}</p>
        </div>
      )}

      <p className="text-xs text-gray-500 mb-4">
        Publicado em: {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
      </p>

      {article.blocks && article.blocks.map((block) => (
        <div key={block.id} dangerouslySetInnerHTML={{ __html: block.body }} className="mb-4" />
      ))}
    </div>
  );
}
