import Image from "next/image"; // Para otimizar as imagens no Next.js
import { Button } from "flowbite-react"; // Importando o botão do Flowbite

export default function SectionTwo() {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold text-[#222]">
          Transforme Sua Presença Online
        </h2>
        <p className="mb-8 text-lg text-[#333]">
          Criação e venda de sites e landing pages personalizados para alavancar
          o seu negócio. Tenha uma presença online poderosa e eficiente com
          design moderno e funcional.
        </p>

        <div className="mb-8 flex justify-center gap-8">
          <div className="max-w-sm">
            <Image
              src="/index01.png" // Substitua pelo caminho correto da imagem
              alt="Design de Site"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-[#222]">
              Design Personalizado
            </h3>
            <p className="text-[#333]">
              Sites feitos sob medida para refletir a identidade do seu negócio
              e garantir uma experiência do usuário impecável.
            </p>
          </div>

          <div className="max-w-sm">
            <Image
              src="/index02.png" // Substitua pelo caminho correto da imagem
              alt="Landing Page"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-[#222]">
              Landing Pages Eficientes
            </h3>
            <p className="text-[#333]">
              Crie páginas de conversão com foco em resultados, atraindo mais
              leads e clientes para o seu negócio.
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-bold text-[#222]">
            Pronto para levar seu negócio ao próximo nível?
          </h3>
          <p className="mb-6 text-lg text-[#333]">
            Comece agora e veja como podemos transformar sua ideia em um site de
            sucesso. Nosso time está pronto para ajudá-lo a crescer!
          </p>

          <div className="flex justify-center gap-4">
            <Button
              color="light"
              href="/contato"
              className="rounded-lg bg-[#4CAF50] px-6 py-3 text-xl font-semibold text-white hover:bg-[#45a049]"
            >
              Entre em Contato
            </Button>
            <Button
              color="dark"
              href="/nossos-servicos"
              className="rounded-lg bg-[#222] px-6 py-3 text-xl font-semibold text-white hover:bg-[#333]"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
