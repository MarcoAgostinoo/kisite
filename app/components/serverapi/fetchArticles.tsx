// app/components/ArticleFetcher.tsx
'use server';

import { Article } from '../../types/Article';

export async function fetchArticles(): Promise<Article[]> {
  const response = await fetch('https://cms-kisite-production.up.railway.app/api/articles?populate=*');
  const data = await response.json();
  return data;
}
