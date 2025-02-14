import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Article } from "../../../types/Article";
import NavBar from "@/app/components/navbar/NavBar";
import CustomFooter from "@/app/components/footer/CustomFooter";

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
    },
  );

  const articles: Article[] = res.data.data;

  if (!articles || articles.length === 0) {
    notFound();
  }

  const article = articles[0];

  const coverUrl = article.cover?.url ? fixImageUrl(article.cover.url) : null;
  const avatarUrl = article.author?.avatar?.url
    ? fixImageUrl(article.author.avatar.url)
    : null;

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-24 p-6 lg:mt-56">
        <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>

        {coverUrl && (
          <Image
            src={coverUrl}
            alt="Imagem do artigo"
            width={800} // Ajuste o valor conforme necessário
            height={400} // Ajuste o valor conforme necessário
            priority
            style={{ width: "100%", height: "auto", maxHeight: "400px" }}
            className="mb-4 rounded object-cover"
          />
        )}

        <p className="mb-4">{article.description}</p>

        {article.author && (
          <div className="mb-4 flex items-center">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt={`Avatar de ${article.author.name}`}
                width={50}
                height={50}
                className="mr-2 rounded-full"
              />
            )}
            <p className="text-sm text-gray-600">Por: {article.author.name}</p>
          </div>
        )}

        <p className="mb-4 text-xs text-gray-500">
          Publicado em:{" "}
          {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
        </p>

        {article.blocks &&
          article.blocks.map((block) => (
            <div
              key={block.id}
              dangerouslySetInnerHTML={{ __html: block.body }}
              className="mb-4"
            />
          ))}
      </div>
      <CustomFooter />
    </div>
  );
}
