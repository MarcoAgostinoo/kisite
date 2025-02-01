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
        const response = await fetch(
          "http://localhost:1337/api/articles?populate=*",
          {
            headers: {
              Authorization:
                "Bearer 96e8b96deeb1043257913b5485d761690037ee736da498ada5ffb6fac68a77718efc12665374ffccc092eb685bbafe62bfea8b26810e6dba44face96de28e4cf6a9f5f233057aa76dbd6599530d758bf082f89f6202b214b9d557a197474d728eb1f31f8353accc50567ae82d677b5694eaa41aaccdec7243eefbebb48cf0bc8",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar os posts");
        }

        const data = await response.json();
        setPosts(data.data.slice(0, 15));
      } catch (error) {
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
          <p className="text-center lg:mr-40">
            <Image
              src="/Loading_2.gif"
              alt="Flowbite Logo"
              width={70}
              height={70}
              className="mr-3 object-contain lg:ml-40"
            />
          </p>
        )}
        {loading && <p className="text-center">Carregando posts...</p>}
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
