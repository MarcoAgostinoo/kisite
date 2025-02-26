import React from "react";
import axios from "axios";
import Link from "next/link";
import ArticleCard from "../../components/Post/ArticleCard";

// Interface para o artigo
interface Article {
  id: number;
  documentId?: string;
  title: string;
  description: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string;
  cover?: { url: string };
  category?: { name: string; slug: string }; // Adicionando categoria
  author?: { name: string; avatar?: { url: string } };
}

// Função para buscar artigos
const fetchArticles = async (): Promise<Article[]> => {
  try {
    const res = await axios.get(
      "https://cms-kisite-production.up.railway.app/api/articles?populate=*",
    );
    return res.data.data.map((article: any) => ({
      id: article.id,
      documentId: article.documentId,
      title: article.title,
      description: article.description,
      slug: article.slug,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      publishedAt: article.publishedAt,
      cover: article.cover ? { url: article.cover.url } : undefined,
      category: article.category
        ? { name: article.category.name, slug: article.category.slug }
        : undefined, // Mapeando categoria
      author: article.author
        ? {
            name: article.author.name,
            avatar: article.author.avatar
              ? { url: article.author.avatar.url }
              : undefined,
          }
        : undefined,
    }));
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }
};

// Função para extrair categorias únicas
const extractUniqueCategories = (
  articles: Article[],
): { name: string; slug: string }[] => {
  const categoriesSet = new Set<string>();
  const categories: { name: string; slug: string }[] = [];
  articles.forEach((article) => {
    if (article.category && !categoriesSet.has(article.category.slug)) {
      categoriesSet.add(article.category.slug);
      categories.push(article.category);
    }
  });
  return categories;
};

// Componente para os ícones animados
const Icon = ({
  type,
  size,
  top,
  left,
}: {
  type: string;
  size: number;
  top: number;
  left: number;
}) => {
  const styles: React.CSSProperties = {
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: [
      "circle",
      "square",
      "triangle",
      "pentagon",
      "star",
    ].includes(type)
      ? "#748ef9"
      : "transparent",
    border:
      type === "triangle" || type === "pentagon" || type === "star"
        ? "none"
        : "1px solid #007bff",
    borderRadius: type === "circle" ? "50%" : "0%",
    clipPath:
      type === "triangle"
        ? "polygon(50% 0%, 0% 100%, 100% 100%)"
        : type === "pentagon"
          ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
          : type === "star"
            ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
            : "none",
    zIndex: 1,
  };

  // Classes TailwindCSS para animação
  const animationClasses =
    "animate-spin animate-infinite animate-duration-[4000ms] animate-ease-out animate-fill-both";

  return <div style={styles} className={animationClasses}></div>;
};

// Gerar ícones aleatórios
// Gerar ícones aleatórios
const generateRandomIcons = (count: number) => {
  const icons = [];
  for (let i = 0; i < count; i++) {
    const type = ["square", "triangle", "circle", "pentagon", "star"][
      Math.floor(Math.random() * 5)
    ];
    const size = Math.floor(Math.random() * 40) + 10; // Tamanho entre 10px e 50px
    const top = Math.random() * 100; // Posição vertical (0% a 100%)
    const left = Math.random() * 100; // Posição horizontal (0% a 100%)
    icons.push(<Icon key={i} type={type} size={size} top={top} left={left} />);
  }
  return icons;
};

const KiBlog = async () => {
  const articles = await fetchArticles();
  const uniqueCategories = extractUniqueCategories(articles); // Extraindo categorias únicas
  return (
    <div className="relative bg-custom-bg bg-cover bg-bottom bg-no-repeat">
      {/* Contêiner para os ícones */}
      <div className="pointer-events-none absolute inset-0 z-10 mt-36 gap-6">
        {generateRandomIcons(20)}
      </div>
      {/* Conteúdo principal */}
      <div className="relative z-20">
        <div className="m-4 mt-20 overflow-hidden lg:mt-56">
          <h2 className="lg:text-6x1 m-16 mb-6 w-3/4 text-left text-3xl font-extrabold text-primaryBlue sm:w-full">
            BLOG SOBRE WEB DESIGN, SEO E VENDAS ONLINE
          </h2>
        </div>
        {/* Layout Principal */}
        <div className="flex flex-col p-2 lg:flex-row">
          {/* Barra Lateral com Categorias */}
          <div className="ml-8 mt-20 w-full sm:ml-4 sm:mt-10 lg:w-2/12">
            <p className="mb-6 text-xl font-semibold text-secondaryBlue sm:text-lg">
              CATEGORIAS
            </p>
            {/* Opção "Todos" */}
            <Link href="/pag/kiblog" passHref>
              <p className="mb-4 cursor-pointer text-base font-semibold text-gray-500 hover:text-secondaryBlue sm:text-sm">
                Todos
              </p>
            </Link>
            {/* Lista de Categorias */}
            {uniqueCategories.length > 0 ? (
              uniqueCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/pag/article/category/${category.slug}`}
                  passHref
                >
                  <p className="text-gray-5np00 mb-4 cursor-pointer text-base font-semibold hover:text-secondaryBlue sm:text-sm">
                    {category.name}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-base text-gray-400 sm:text-sm">
                Nenhuma categoria disponível
              </p>
            )}
          </div>
          {/* Lista de Artigos */}
          <div className="m-0 grid w-full grid-cols-1 gap-6 p-10 sm:p-4 md:grid-cols-2 lg:m-8 lg:w-10/12 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default KiBlog;
