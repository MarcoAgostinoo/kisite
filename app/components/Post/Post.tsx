"use client";
import { useEffect, useState } from "react";
import PostCard from './postcard';

interface Post {
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
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:1337/api/articles?populate=*", {
          headers: {
            Authorization: "Bearer 96e8b96deeb1043257913b5485d761690037ee736da498ada5ffb6fac68a77718efc12665374ffccc092eb685bbafe62bfea8b26810e6dba44face96de28e4cf6a9f5f233057aa76dbd6599530d758bf082f89f6202b214b9d557a197474d728eb1f31f8353accc50567ae82d677b5694eaa41aaccdec7243eefbebb48cf0bc8", // Wrap the token in quotes
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar os posts");
        }

        const data = await response.json();
        setPosts(data.data.slice(0, 3)); // Fetch only the latest 3 posts
      } catch (error) {
        setError("Falha ao carregar posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-64">
      <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>

      {loading && <p className="text-center">Carregando posts...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
