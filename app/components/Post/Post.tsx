"use client";
import { useEffect, useState } from "react";
import PostCard from "./postcard";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  publishedAt: string;
  description: string;
  slug: string;
  cover: {
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
      medium?: {
        url: string;
      };
    };
    alternativeText?: string;
  };
  author?: {
    name: string;
  };
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://cms-trapi-kisite-app.onrender.com/api/articles?populate=*",
          {
            headers: {
              Authorization:
                "SUA_CHAVE_DE_AUTORIZACAO_AQUI", // substitua pela sua chave
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar os posts");
        }

        const json = await response.json();
        // O schema retorna { data: [...] }, use os 15 primeiros posts
        setPosts(json.data.slice(0, 15));
      } catch (error) {
        console.error(error);
        setError("Falha ao carregar posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="mx-auto mt-32 max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">KiBlog</h1>
      <div className="flex flex-col items-center justify-center">
        {loading && (
          <div className="flex flex-col items-center">
            <Image
              src="/Loading_2.gif"
              alt="Carregando"
              width={70}
              height={70}
              className="object-contain"
            />
            <p className="mt-2">Carregando posts...</p>
          </div>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
