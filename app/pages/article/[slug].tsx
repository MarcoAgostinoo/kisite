'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  publishedAt: string;
  content: string;
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
}

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      try {
        const response = await fetch(`http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
          headers: {
            Authorization: "Bearer 96e8b96deeb1043257913b5485d761690037ee736da498ada5ffb6fac68a77718efc12665374ffccc092eb685bbafe62bfea8b26810e6dba44face96de28e4cf6a9f5f233057aa76dbd6599530d758bf082f89f6202b214b9d557a197474d728eb1f31f8353accc50567ae82d677b5694eaa41aaccdec7243eefbebb48cf0bc8", // Wrap the token in quotes
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar o post");
        }

        const data = await response.json();
        setPost(data.data[0]);
      } catch (error) {
        setError("Falha ao carregar post");
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) return <p>Carregando post...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-64">
      {post && (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
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
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-500 text-sm">
              Por {post.author.name} - {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className="mt-4 text-gray-700">{post.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
