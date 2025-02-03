// app/article/[slug]/page.tsx
import CustomFooter from "@/app/components/footer/CustomFooter";
import NavBar from "@/app/components/navbar/NavBar";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

interface RichTextBlock {
  __component: "shared.rich-text";
  id: number;
  body: string;
}

interface QuoteBlock {
  __component: "shared.quote";
  id: number;
  title: string;
  body: string;
}

interface Text2Block {
  __component: "shared.text2";
  id: number;
  textfooter: Array<{
    type: string;
    children: Array<{ type: string; text: string }>;
  }>;
}

interface Article {
  id: number;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  cover?: {
    url: string;
    formats?: {
      medium?: { url: string };
    };
    alternativeText?: string;
  };
  author?: {
    id: number;
    name: string;
  };
  // Caso existam outros campos na raiz do artigo
  blocks?: Array<RichTextBlock | QuoteBlock>;
  cover2?: {
    url: string;
    formats?: {
      medium?: { url: string };
    };
    alternativeText?: string;
  };
  blocks2?: Text2Block[];
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;

  // Busca o artigo utilizando o filtro de slug e populate para trazer todas as informações
  const res = await fetch(
    `https://cms-trapi-kisite-app.onrender.com/api/articles?populate=*`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar o artigo");
  }

  const json = await res.json();
  const article: Article | undefined = json.data[0];

  if (!article) {
    notFound();
  }

  // Desestruturando os dados do artigo
  const {
    title,
    description,
    publishedAt,
    cover,
    author,
    blocks,
    cover2,
    blocks2,
  } = article;

  return (
    <div>
      <NavBar />
      <div className="mt-48">
        <article
        className="mx-auto max-w-5xl p-6"
        style={{ backgroundColor: "#F0F0F0" }}
      >
        {/* Imagem de Capa */}
        {cover && (
          <img
            src={`http://localhost:1337${cover.formats?.medium?.url || cover.url}`}
            alt={cover.alternativeText || title}
            className="mb-8 h-80 w-full rounded-lg object-cover shadow-lg"
          />
        )}

        {/* Cabeçalho */}
        <header className="mb-8">
          <h1
            className="mb-2 text-4xl font-bold"
            style={{ color: "#002B5B" /* darkBlue */ }}
          >
            {title}
          </h1>
          <div className="text-sm" style={{ color: "#2E2E2E" /* darkGray */ }}>
            {author && <span>Por {author.name}</span>}
            <span> | {new Date(publishedAt).toLocaleDateString()}</span>
          </div>
        </header>

        {/* Descrição / Introdução */}
        <section className="prose mb-8 max-w-none">
          <p style={{ color: "#2E2E2E" /* darkGray */ }}>{description}</p>
        </section>

        {/* Blocos de Conteúdo */}
        {blocks &&
          blocks.map((block) => {
            // Bloco de Rich Text
            if (block.__component === "shared.rich-text") {
              return (
                <section key={block.id} className="my-8">
                  <div
                    className="prose max-w-none"
                    style={{ color: "#2E2E2E" }}
                    dangerouslySetInnerHTML={{ __html: block.body }}
                  />
                </section>
              );
            }
            // Bloco de Quote
            if (block.__component === "shared.quote") {
              return (
                <blockquote
                  key={block.id}
                  className="my-8 border-l-4 pl-4 italic"
                  style={{
                    borderColor: "#FFD700", // gold
                    color: "#4A90E2", // lightBlue
                  }}
                >
                  <p className="text-xl">{block.body}</p>
                  <cite
                    className="mt-2 block text-right"
                    style={{ color: "#002B5B" }}
                  >
                    {block.title}
                  </cite>
                </blockquote>
              );
            }
            return null;
          })}

        {/* Imagem Adicional */}
        {cover2 && (
          <div className="my-8">
            <img
              src={`http://localhost:1337${cover2.formats?.medium?.url || cover2.url}`}
              alt={cover2.alternativeText || "Imagem adicional"}
              className="h-80 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        )}

        {/* Blocos de Texto Extra (ex: rodapés ou informações complementares) */}
        {blocks2 &&
          blocks2.map((block) => {
            if (block.__component === "shared.text2") {
              return (
                <div key={block.id} className="my-8">
                  {block.textfooter.map((paragrafo, idx) => (
                    <p key={idx} style={{ color: "#2E2E2E" }}>
                      {paragrafo.children.map((child, i) => (
                        <span key={i}>{child.text}</span>
                      ))}
                    </p>
                  ))}
                </div>
              );
            }
            return null;
          })}

        {/* Rodapé ou área de ações */}
        <footer
          className="mt-12 border-t pt-4"
          style={{ borderColor: "#002B5B" }}
        >
          <p
            className="text-center"
            style={{ color: "#002B5B", fontWeight: "600" }}
          >
            {/* Exemplo: */}
            Compartilhe este artigo
          </p>
          {/* Aqui você pode adicionar botões de redes sociais, etc. */}
        </footer>
      </article>
      </div>
      
      <CustomFooter />
    </div>
  );
}
