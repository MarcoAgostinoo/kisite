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
                "2ccdbc4368c3be6e11696ada75a4b97302c60e33c866eea0a71511935d7b194d6fee826d7f74c61bbce7004b5d0adcd6c1c334e8a288b345e9047d831133c5815f3f2bcc15cd1dae7b7d439414c3d138681e2757b9dda7ec9f443f4a161d3f37c81a08b3d50a9e3511b0fa6090093be37e7b960bdb2899efe038f05656d9150b",
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
