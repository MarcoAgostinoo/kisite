import Link from 'next/link'; // Importar o componente Link
import Image from 'next/image';
import { Article } from '../../../app/types/Article';

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  const coverUrl = article.cover?.url ? `http://localhost:1337${article.cover.url}` : null;
  const avatarUrl = article.author?.avatar?.url ? `http://localhost:1337${article.author.avatar.url}` : null;

  return (
    <Link href={`/article/${article.slug}`} passHref>
      {/* Envolver todo o conteúdo do card com o Link */}
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow cursor-pointer">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        {coverUrl && (
          <Image
            src={coverUrl}
            alt="Imagem do artigo"
            width={600}
            height={400}
            className="w-full h-auto mb-4 rounded"
          />
        )}
        <p className="mb-2">{article.description}</p>
        {article.author && (
          <div className="flex items-center mb-2">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt={`Avatar de ${article.author.name}`}
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
            )}
            <p className="text-sm text-gray-600">Por: {article.author.name}</p>
          </div>
        )}
        <p className="text-xs text-gray-500 mb-2">
          Publicado em: {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
        </p>
      </div>
    </Link>
  );
}

export default ArticleCard;