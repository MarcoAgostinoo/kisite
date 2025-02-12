// Arquivo: app/articles/page.tsx
import { Metadata } from 'next';
import { GET_ARTICLES } from '../../graphql/queries';
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

    const articles = data?.articles;

    if (!articles || articles.length === 0) {
      return <div>Nenhum artigo encontrado.</div>;
    }

    return (
      <div className='mt-52' >
         <section className="p-4">
        <h1 className="text-3xl font-bold mb-6">Artigos</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article: Article) => (
            <ArticleCard key={article.documentId} article={article} />
          ))}
        </div>
      </section>
      </div>
     
    );
  } catch (error) {
    console.error('GraphQL Error:', error);
    return <div>Falha ao carregar artigos: {(error as Error).message}</div>;
  }
}