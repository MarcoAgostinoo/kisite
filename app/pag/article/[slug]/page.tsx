import axios from 'axios';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AuthorInfo from '@/app/components/cardBlog/AuthorInfo';
import ShareButtons from '@/app/components/cardBlog/ShareButtons';
import RelatedPosts from '@/app/components/cardBlog/RelatedPosts';

async function getArticle(slug: string) {
  try {
    const res = await axios.get(
      `https://cms-kisite-production.up.railway.app/api/articles/${slug}?populate=*`
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  // Adicione uma verificação de tipo para o conteúdo
  const content = article.attributes?.content || article.content || '';

  return (
    <div className="bg-gray-50 pt-56 dark:bg-gray-900">
      <article className="mx-auto max-w-4xl px-4 py-12">
        {article.cover?.url && (
          <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={article.cover.url}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <AuthorInfo author={article.author} date={article.publishedAt} />
            <ShareButtons title={article.title} />
          </div>
        </header>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          {content}
        </div>

        <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <RelatedPosts categorySlug={article.category?.slug} currentArticleId={article.id} />
        </footer>
      </article>
    </div>
  );
}
