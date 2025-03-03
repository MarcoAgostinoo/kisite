import axios from 'axios';
import ArticleCard from './CardBlog';

interface RelatedPostsProps {
  categorySlug?: string;
  currentArticleId: number;
}

async function getRelatedPosts(categorySlug: string, currentArticleId: number) {
  try {
    const res = await axios.get(
      `https://cms-kisite-production.up.railway.app/api/articles?populate=*&filters[category][slug][$eq]=${categorySlug}&filters[id][$ne]=${currentArticleId}&pagination[limit]=3`
    );
    return res.data.data;
  } catch (error) {
    return [];
  }
}

export default async function RelatedPosts({ categorySlug, currentArticleId }: RelatedPostsProps) {
  if (!categorySlug) return null;

  const relatedPosts = await getRelatedPosts(categorySlug, currentArticleId);

  if (relatedPosts.length === 0) return null;

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Artigos Relacionados
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post: any) => (
          <ArticleCard key={post.id} article={post} />
        ))}
      </div>
    </div>
  );
}