import Link from 'next/link';

interface PostCardProps {
  post: {
    id: number;
    title: string;
    publishedAt: string;
    description: string;
    slug: string;
    cover: {
      url: string;
      formats?: {
        medium?: {
          url: string;
        };
      };
      alternativeText?: string;
    };
    author: {
      name: string;
    };
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/article/${post.slug}`} legacyBehavior>
      <a className="block bg-white shadow-lg rounded-xl overflow-hidden mb-6">
        {post.cover?.url && (
          <img
            src={`http://localhost:1337${
              post.cover.formats?.medium?.url || post.cover.url
            }`}
            alt={post.cover.alternativeText || post.title}
            className="w-full h-60 object-cover"
          />
        )}

        <div className="p-6">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-gray-500 text-sm">
            Por {post.author.name} - {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <p className="mt-4 text-gray-700">{post.description.slice(0, 50)}...</p>
        </div>
      </a>
    </Link>
  );
}
