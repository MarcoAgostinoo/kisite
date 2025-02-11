import Image from "next/image";
import NavBar from "@/app/components/navbar/NavBar";
import { notFound } from "next/navigation";
import CustomFooter from "@/app/components/footer/CustomFooter";

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
      `http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`,
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
    let coverUrl = "";
    if (articleData.cover) {
      if (articleData.cover.formats && articleData.cover.formats.medium) {
        coverUrl = articleData.cover.formats.medium.url;
      } else {
        coverUrl = articleData.cover.url;
      }
    }
    console.log("Cover URL:", `http://localhost:1337${coverUrl}`);
    return {
      id: articleData.id,
      title: articleData.title,
      description: articleData.description,
      publishedAt: articleData.publishedAt,
      slug: articleData.slug,
      cover: articleData.cover
        ? {
            url: `http://localhost:1337${coverUrl}`,
            alternativeText:
              articleData.cover.alternativeText ||
              articleData.cover.caption ||
              articleData.title,
          }
        : { url: "" },
      blocks: articleData.blocks || [],
      author: articleData.author
        ? { name: articleData.author.name }
        : undefined,
    };
  } catch (error) {
    console.error("Erro ao buscar artigo:", error);
    return null;
  }
}

interface Params {
  slug: string;
}

interface ArticlePageProps {
  params: Params;
}

export default async function ArticlePage({
  params,
}: ArticlePageProps): Promise<JSX.Element> {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  // Função para limpar tags HTML indesejadas
  const cleanHtml = (html: string) =>
    html.replace(/<(!DOCTYPE|html|head|meta|title|script)[^>]*>/gi, "");

  return (
    <div className="container mx-auto px-4 py-8 mt-">
      <NavBar />
      <div className="mt-56">
        <article className="prose prose-lg max-w-none">
          <h1 className="mb-4 mt-40 text-4xl font-bold">{article.title}</h1>
          {article.cover?.url && (
            <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
              <Image
                src={article.cover.url}
                alt={article.cover.alternativeText || article.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
          {/* Metadados do Artigo */}
          <div className="mb-8 text-gray-600">
            <p className="text-sm">
              Publicado em:{" "}
              {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
            </p>
            {article.author?.name && (
              <p className="text-sm">Autor: {article.author.name}</p>
            )}
          </div>
          {/* Blocos de Conteúdo */}
          <div className="space-y-6 text-gray-700">
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
      <CustomFooter />
    </div>
  );
}