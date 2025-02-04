import Image from "next/image";
import NavBar from "@/app/components/navbar/NavBar";
import { notFound } from "next/navigation";

interface Article {
  id: number;
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  cover: {
    url: string;
    alternativeText?: string;
  };
  blocks: {
    __component: string;
    id: number;
    body: string;
  }[];
  author?: {
    name: string;
  };
}

async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(
      `https://cms-trapi-kisite-app.onrender.com/api/articles?filters[slug][$eq]=${slug}&populate=*`,
      { next: { revalidate: 3600 } } // Revalidação a cada hora
    );

    if (!response.ok) {
      console.error("Falha ao buscar artigo, status:", response.status);
      return null;
    }

    const json = await response.json();
    const { data } = json;

    if (!data || data.length === 0) return null;

    const articleData = data[0];

    // Seleciona a URL da capa com base nos formatos disponíveis (usa "medium" se disponível)
    let coverUrl = "";
    if (articleData.cover) {
      if (articleData.cover.formats && articleData.cover.formats.medium) {
        coverUrl = articleData.cover.formats.medium.url;
      } else {
        coverUrl = articleData.cover.url;
      }
    }

    return {
      id: articleData.id,
      title: articleData.title,
      description: articleData.description,
      publishedAt: articleData.publishedAt,
      slug: articleData.slug,
      cover: articleData.cover
        ? {
            url: `https://cms-trapi-kisite-app.onrender.com${coverUrl}`,
            alternativeText:
              articleData.cover.alternativeText ||
              articleData.cover.caption ||
              articleData.title,
          }
        : { url: "" },
      blocks: articleData.blocks || [],
      author: articleData.author ? { name: articleData.author.name } : undefined,
    };
  } catch (error) {
    console.error("Erro ao buscar artigo:", error);
    return null;
  }
}

// Aqui alteramos a tipagem para "any" nos parâmetros para evitar o erro de tipo
export default async function ArticlePage(props: any): Promise<JSX.Element> {
  const { params, searchParams: _searchParams } = props;
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Função para limpar tags HTML indesejadas
  const cleanHtml = (html: string) =>
    html.replace(/<(!DOCTYPE|html|head|meta|title|script)[^>]*>/gi, "");

  return (
    <div className="container mx-auto px-4 py-8">
      <NavBar />
      <article className="prose prose-lg max-w-none mt-12">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        {/* Capa do Artigo utilizando next/image */}
        {article.cover?.url && (
          <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
            <Image
              src={article.cover.url}
              alt={article.cover.alternativeText || article.title}
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL="/placeholder.png" // ajuste conforme sua imagem placeholder
              priority
            />
          </div>
        )}

        {/* Metadados do Artigo */}
        <div className="mb-8 text-gray-600">
          <p className="text-sm">
            Publicado em: {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
          </p>
          {article.author?.name && (
            <p className="text-sm">Autor: {article.author.name}</p>
          )}
        </div>

        {/* Blocos de Conteúdo */}
        <div className="text-gray-700 space-y-6">
          {article.blocks.map((block) => (
            <section key={block.id}>
              <div
                dangerouslySetInnerHTML={{
                  __html: cleanHtml(block.body),
                }}
              />
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
