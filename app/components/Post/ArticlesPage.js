'use client'; // Declara que este é um Client Component

import { useQuery } from '@apollo/client';
import apolloClient from '../../lib/apolloClient';
import { GET_ARTICLES } from '../../graphql/queries';
import ArticleCard from './ArticleCard';

export default function ArticlesPage() {
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    client: apolloClient,
  });

  if (loading) return <div>Carregando...</div>;

  if (error) {
    console.error('GraphQL Error:', error); // Log detalhado do erro
    return <div>Falha ao carregar artigos: {error.message}</div>;
  }

  const articles = data?.articles;

  if (!articles || articles.length === 0) {
    return <div>Nenhum artigo encontrado.</div>;
  }

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold mb-6">Artigos</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.documentId} article={article} />
        ))}
      </div>
    </section>
  );
}