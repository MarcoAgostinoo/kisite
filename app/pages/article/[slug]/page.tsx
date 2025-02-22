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
    <div className="mt-28 w-full p-8">
      <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-[6fr_4fr] lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-10">
        {/* Primeira Coluna (Blog - 70%) */} {/* Post Blog */}
        <div className="mt-1 ">
          <div className="container mx-auto mt-4 p-6 lg:mt-10">
            <h2 className="mb-4 text-center text-4xl font-bold">
              {article.title}
            </h2>

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
                <p className="text-sm text-gray-600">
                  Por: {article.author.name}
                </p>
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
        </div>
        {/* Banner Lateral Direita */}
        <div className="bg-transparent sm:ml-0 sm:mt-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-28 lg:overflow-hidden">
            <div className="lg:pr-4">
              <div>
                <p className="mt-28 text-base font-semibold text-indigo-600">
                  Transforme Sua Presença Digital
                </p>
                <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Crie um Site Profissional para Sua Clínica ou Salão de Beleza
                </h2>
                <p className="mt-6 text-xl text-gray-700">
                  Com design personalizado e estratégias de marketing digital,
                  ajudamos clínicas de estética, salões de beleza e spas a
                  atrair mais clientes, aumentar agendamentos e conquistar
                  credibilidade online.
                </p>
                <div className="mt-8">
                  <a
                    href="#diagnostico-gratuito"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Solicite Seu Diagnóstico Gratuito
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
