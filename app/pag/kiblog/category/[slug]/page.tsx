import React from 'react';
import { notFound } from 'next/navigation';
import axios from 'axios';
import ArticleCard from '@/app/components/cardBlog/CardBlog';
import CategoryMenu from '@/app/components/blog/CategoryMenu';

interface Category {
  name: string;
  slug: string;
}

interface Article {
  id: number;
  category: {
    name: string;
    slug: string;
  };
  // ... outras propriedades do artigo se necessário
}

async function getArticlesByCategory(categorySlug: string) {
  try {
    const res = await axios.get(
      `https://cms-kisite-production.up.railway.app/api/articles?filters[category][slug][$eq]=${categorySlug}&populate=*`
    );
    return res.data.data;
  } catch (error) {
    return [];
  }
}

async function getAllCategories(): Promise<Category[]> {
  try {
    const res = await axios.get(
      'https://cms-kisite-production.up.railway.app/api/articles?populate=*'
    );
    const articles = res.data.data as Article[];
    const categoriesSet = new Set<string>();
    const categories: Category[] = [];
    
    articles.forEach((article: Article) => {
      if (article.category && !categoriesSet.has(article.category.slug)) {
        categoriesSet.add(article.category.slug);
        categories.push({
          name: article.category.name,
          slug: article.category.slug,
        });
      }
    });
    
    return categories;
  } catch (error) {
    return [];
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const [articles, categories] = await Promise.all([
    getArticlesByCategory(params.slug),
    getAllCategories(),
  ]);

  if (!articles.length) {
    notFound();
  }

  return (
    <div className="relative bg-custom-bg bg-cover bg-bottom bg-no-repeat">
      <div className="relative z-20">
        <div className="m-4 mt-20 overflow-hidden lg:mt-56">
        <h2 className="lg:text-6x1 m-16 mb-6 w-3/4 text-left text-4xl font-extrabold text-primaryBlue sm:w-full overflow-hidden">
        {`Artigos da categoria ${params.slug}`}
          </h2>
        </div>
        <div className="flex flex-col p-2 lg:flex-row">
          <CategoryMenu categories={categories} />
          <div className="m-0 grid w-full grid-cols-1 gap-6 p-10 sm:p-4 md:grid-cols-2 lg:m-8 lg:w-10/12 lg:grid-cols-3">
            {articles.map((article: any) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
