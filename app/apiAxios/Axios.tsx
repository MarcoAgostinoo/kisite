import React from 'react';

interface Article {
  id: number;
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  cover: { url: string };
  blocks: { body: string }[];
}

const Teste01: React.FC = async () => {
  const res = await fetch("https://cms-kisite-production.up.railway.app/api/articles?populate=*");
  const json = await res.json();

  const articles: Article[] = json.data.map((article: any) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    publishedAt: article.publishedAt,
    slug: article.slug,
    cover: article.cover,
    blocks: article.blocks,
  }));

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          {article.cover && (
            <img
              src={`https://cms-kisite-production.up.railway.app${article.cover.url}`}
              alt={article.title}
              style={{ width: '100%', height: 'auto' }}
            />
          )}
          {article.blocks.map((block, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: block.body }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Teste01;
