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
          "https://cms-trapi-kisite-app.onrender.com/api/articles?populate=*",
          {
            headers: {
              Authorization:
                "26da69d5fcaca45e24f4d15b5388d996622b1e5840fd5ef9745226b5bb78640150c0ddab5bbd4580e112ca72fa1135372630054dfee16c63370efaa3697649b6d5f40eb8a4332ca49a856e8d198ddad39790bc781fb30764dac82fa7b211128728085e46dc0b00514558797e81013543aa13be1e66d586c4e10f2851f64435f4",
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
