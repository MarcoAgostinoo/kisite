// app/article/[slug].tsx
import NavBar from '@/app/components/navbar/NavBar';
import { notFound } from 'next/navigation';

interface Article {
  id: number;
  title: string;
  description: string;
  publishedAt: string;
  cover: {
    url: string;
    alternativeText?: string;
  };
  blocks: {
    __component: string;
    body: string;
  }[];
  author?: {
    name: string;
  };
}

async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(
      `https://cms-trapi-kisite-app.onrender.com/api/articles?filters[slug][$eq]=${slug}&populate=*`
    );
    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return null;
    }

    return data.data[0];
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

  return (
    <div className="container mx-auto px-4 py-8">
        <NavBar />
      <article className="prose prose-lg max-w-none mt-48">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        {article.cover?.url && (
          <img
            src={`http://localhost:1337${article.cover.url}`}
            alt={article.cover.alternativeText || article.title}
            className="w-full h-96 object-cover mb-6"
          />
        )}
        <p className="text-gray-500 text-sm mb-8">
          Por {article.author?.name || 'Autor Desconhecido'} -{' '}
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
        <div className="text-gray-700">
          {article.blocks.map((block, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: block.body }} />
          ))}
        </div>
      </article>
    </div>
  );
}