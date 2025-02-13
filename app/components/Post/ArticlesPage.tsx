// Arquivo: app/articles/page.tsx
import { Metadata } from 'next';
import { GET_ARTICLES } from '../../graphql/Queries';
import apolloClient from '../../lib/apolloClient';
import ArticleCard from './ArticleCard';
import { Article } from '@/app/types/Article';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Artigos - Meu Blog',
    description: 'Confira os artigos mais recentes do meu blog.',
  };
}

export default async function ArticlesPage() {
  try {
    const { data } = await apolloClient.query({
      query: GET_ARTICLES,
    });

    // Limita a exibição a no máximo 20 artigos
    const articles = data?.articles?.slice(0, 20);

    if (!articles || articles.length === 0) {
      return <div className="text-center mt-10">Nenhum artigo encontrado.</div>;
    }

    return (
      <div style={{marginTop: "130px"}}>
        <section className="p-4">
          {/* Título Responsivo */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Artigos</h1>
          {/* Grid Responsivo */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article: Article) => (
              <ArticleCard key={article.documentId} article={article} />
            ))}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('GraphQL Error:', error);
    return <div className="text-center mt-10">Falha ao carregar artigos: {(error as Error).message}</div>;
  }
}