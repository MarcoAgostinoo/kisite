"use client"; // Indica que este é um componente client-side

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  // Animação para suavizar a aparição das seções
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-pureWhite min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Quem Somos */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primaryBlue mb-6">
            Quem Somos
          </h2>
          <p className="text-xl text-deepBlack mb-8 leading-relaxed">
            Na KiSite, acreditamos que uma presença digital forte é a porta de entrada para o
            sucesso – transformamos suas ideias em resultados reais. Somos muito mais do que uma agência;
            somos parceiros estratégicos comprometidos com o crescimento de cada cliente.
          </p>
          <Image
            src="/images/quem-somos.jpg"
            alt="Equipe KiSite"
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-2xl"
          />
        </motion.section>

        {/* Nossa História */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primaryBlue mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-deepBlack mb-8 leading-relaxed">
            Fundada com o intuito de revolucionar o posicionamento de pequenas e médias empresas online,
            a KiSite nasceu da união de profissionais apaixonados por inovação e excelência.
            Nosso foco é democratizar o acesso às melhores soluções digitais, entregando resultados mensuráveis e
            destacando nossos clientes em um mercado competitivo.
          </p>
          <Image
            src="/images/nossa-historia.jpg"
            alt="Nossa História"
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-2xl"
          />
        </motion.section>

        {/* Missão, Visão e Valores */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primaryBlue mb-6">
            Missão, Visão e Valores
          </h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-secondaryBlue mb-4">
              Nossa Missão:
            </h3>
            <p className="text-xl text-deepBlack">
              Transformar ideias em experiências digitais impactantes, potencializando a credibilidade de cada negócio.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-secondaryBlue mb-4">
              Nossa Visão:
            </h3>
            <p className="text-xl text-deepBlack">
              Ser a referência em soluções digitais inovadoras, elevando o padrão de qualidade e impulsionando
              o sucesso de nossos clientes online.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondaryBlue mb-4">
              Nossos Valores:
            </h3>
            <ul className="list-disc list-inside text-xl text-deepBlack">
              <li className="mb-2">
                <span className="font-bold">Agilidade:</span> Respostas rápidas e soluções eficazes para um mercado dinâmico.
              </li>
              <li className="mb-2">
                <span className="font-bold">Transparência:</span> Relações claras e honestas em todas as etapas.
              </li>
              <li className="mb-2">
                <span className="font-bold">Inovação:</span> Aplicação das tecnologias mais modernas para criar experiências únicas.
              </li>
              <li className="mb-2">
                <span className="font-bold">Comprometimento:</span> Dedicação total para transformar desafios em oportunidades.
              </li>
              <li>
                <span className="font-bold">Resultados Mensuráveis:</span> Estratégias focadas em crescimento e retorno real.
              </li>
            </ul>
          </div>
          <Image
            src="/banner3.jpg"
            alt="Missão, Visão e Valores"
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-2xl mt-8"
          />
        </motion.section>

        {/* Nossa Expertise */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primaryBlue mb-6">
            Nossa Expertise
          </h2>
          <p className="text-xl text-deepBlack mb-8 leading-relaxed">
            Oferecemos um portfólio completo de serviços que incluem:
          </p>
          <ul className="list-disc list-inside text-xl text-deepBlack mb-8">
            <li className="mb-2">
              <span className="font-bold">Desenvolvimento Web Moderno:</span> Sites responsivos e otimizados para qualquer dispositivo.
            </li>
            <li className="mb-2">
              <span className="font-bold">Otimização para SEO:</span> Técnicas avançadas para elevar seu posicionamento nos rankings de busca.
            </li>
            <li className="mb-2">
              <span className="font-bold">Gestão de Tráfego Pago:</span> Campanhas estratégicas para atrair clientes qualificados.
            </li>
            <li>
              <span className="font-bold">Identidade Visual:</span> Criação de marcas fortes e consistentes com design moderno.
            </li>
          </ul>
          <Image
            src="/background.png"
            alt="Nossa Expertise"
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-2xl mt-8"
          />
        </motion.section>

        {/* Nossa Abordagem */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primaryBlue mb-6">
            Nossa Abordagem
          </h2>
          <p className="text-xl text-deepBlack mb-8 leading-relaxed">
            Nosso sucesso começa com uma escuta atenta. Baseamos nossa metodologia na análise detalhada,
            planejamento estratégico e suporte contínuo para garantir que sua empresa esteja sempre à frente.
          </p>
          <ul className="list-disc list-inside text-xl text-deepBlack mb-8">
            <li className="mb-2">
              <span className="font-bold">Identificação:</span> Análise do negócio para definir a estratégia ideal.
            </li>
            <li className="mb-2">
              <span className="font-bold">Planejamento e Execução:</span> Combinação de tecnologia e criatividade para resultados rápidos.
            </li>
            <li>
              <span className="font-bold">Suporte Contínuo:</span> Acompanhamento especializado e ajustes estratégicos.
            </li>
          </ul>
          <Image
            src="/images/nossa-abordagem.jpg"
            alt="Nossa Abordagem"
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-2xl mt-8"
          />
        </motion.section>

        {/* Nossa Contribuição no Mercado Digital */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primaryBlue mb-6">
            Nossa Contribuição no Mercado Digital
          </h2>
          <p className="text-xl text-deepBlack mb-8 leading-relaxed">
            Compreendemos que mais de 70% das decisões de compra começam online. Superamos os “4 Pilares do Fracasso Digital”, entregando projetos que transformam a presença digital.
          </p>
          <p className="text-xl text-deepBlack mb-8 leading-relaxed">
            Confira os depoimentos de quem já vivenciou essa transformação:
          </p>
          <blockquote className="border-l-4 border-secondaryBlue pl-4 mb-4">
            <p className="text-xl italic text-gray-600">
              “O KiSite facilitou muito a criação do meu site. Agora está muito mais rápido e fácil de usar.”
            </p>
            <footer className="text-xl text-gray-600">— Leslie Alexander</footer>
          </blockquote>
          <blockquote className="border-l-4 border-secondaryBlue pl-4 mb-4">
            <p className="text-xl italic text-gray-600">
              “Melhor do que todos os outros. Recomendo para iniciantes e usuários avançados.”
            </p>
            <footer className="text-xl text-gray-600">— Jacob Jones</footer>
          </blockquote>
          <blockquote className="border-l-4 border-secondaryBlue pl-4 mb-4">
            <p className="text-xl italic text-gray-600">
              “Não acredito que consegui uma nova landing page tão facilmente com o KiSite.”
            </p>
            <footer className="text-xl text-gray-600">— Jenny Wilson</footer>
          </blockquote>
          <Image
            src="/images/contribuicao-mercado-digital.jpg"
            alt="Transformação Digital"
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-2xl mt-8"
          />
        </motion.section>

        {/* Junte-se a Nós */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-primaryBlue mb-6">
            Junte-se a Nós
          </h2>
          <p className="text-xl text-deepBlack mb-8 leading-relaxed">
            Buscando uma transformação digital que leve seu negócio ao próximo nível? Entre em contato!
            Na KiSite, seu sucesso é nossa missão. Vamos, juntos, conquistar o mercado digital!
          </p>
          <Image
            src="/images/junte-se-a-nos.jpg"
            alt="Junte-se a Nós"
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-2xl"
          />
        </motion.section>
      </div>
    </div>
  );
}