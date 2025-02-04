// app/article/[slug]/page.tsx
import NavBar from '@/app/components/navbar/NavBar';
import { notFound } from 'next/navigation';

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
      console.error('Falha ao buscar artigo, status:', response.status);
      return null;
    }

    const json = await response.json();
    const { data } = json;

    if (!data || data.length === 0) return null;

    const articleData = data[0];

    return {
      id: articleData.id,
      title: articleData.title,
      description: articleData.description,
      publishedAt: articleData.publishedAt,
      slug: articleData.slug,
      cover: articleData.cover
        ? {
            url: `https://cms-trapi-kisite-app.onrender.com${articleData.cover.url}`,
            alternativeText: articleData.cover.alternativeText || undefined,
          }
        : { url: '' },
      blocks: articleData.blocks || [],
      author: articleData.author
        ? { name: articleData.author.name }
        : undefined,
    };
  } catch (error) {
    console.error('Erro ao buscar artigo:', error);
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Função para limpar tags HTML indesejadas
  const cleanHtml = (html: string) => {
    return html.replace(/<(!DOCTYPE|html|head|meta|title|script)[^>]*>/gi, '');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <NavBar />
      <article className="prose prose-lg max-w-none mt-12">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        {/* Capa do Artigo */}
        {article.cover?.url && (
          <img
            src={article.cover.url}
            alt={article.cover.alternativeText || article.title}
            className="w-full h-96 object-cover mb-6 rounded-lg"
            loading="lazy"
          />
        )}

        {/* Metadados do Artigo */}
        <div className="mb-8 text-gray-600">
          <p className="text-sm">
            Publicado em:{' '}
            {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
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