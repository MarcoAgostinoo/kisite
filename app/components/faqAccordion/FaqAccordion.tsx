import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqItems = [
    {
      id: 1,
      question: "O que é a KiSite?",
      answer:
        "A KiSite é uma empresa especializada na criação de sites modernos, responsivos e otimizados para ajudar pequenos e médios negócios a crescerem e se destacarem no ambiente digital.",
    },
    {
      id: 2,
      question: "Quais serviços a KiSite oferece?",
      answer:
        "Oferecemos criação de sites profissionais, e-commerce personalizado, manutenção contínua, otimização de SEO, consultoria digital e integrações avançadas como WhatsApp e Google Analytics.",
    },
    {
      id: 3,
      question: "Por que devo investir em um site profissional?",
      answer:
        "Ter um site profissional é essencial para garantir visibilidade online, atrair novos clientes e aumentar a credibilidade da sua marca, sendo a base de qualquer estratégia de marketing digital.",
    },
    {
      id: 4,
      question: "Quais planos estão disponíveis na KiSite?",
      answer:
        "Disponibilizamos os planos Básico, Profissional e Enterprise, com opções que variam de funcionalidades essenciais a soluções avançadas, como automação de marketing e integrações de e-commerce.",
    },
    {
      id: 5,
      question: "Como funciona a criação de e-commerce personalizado?",
      answer:
        "Desenvolvemos lojas virtuais completas, integrando sistemas de pagamento, automação de marketing e funcionalidades específicas para o seu negócio, com foco em vendas online.",
    },
    {
      id: 6,
      question: "O que está incluído nos planos de manutenção contínua?",
      answer:
        "Os planos incluem atualizações regulares, suporte técnico, ajustes de conteúdo, melhorias de desempenho e segurança para manter seu site funcional e atualizado.",
    },
    {
      id: 7,
      question: "Como a KiSite otimiza sites para SEO?",
      answer:
        "Realizamos análises estratégicas e aplicamos práticas de SEO como otimização de palavras-chave, criação de conteúdo relevante, e melhorias técnicas para posicionar o site nos primeiros resultados do Google.",
    },
    {
      id: 8,
      question: "Quais são as tecnologias utilizadas pela KiSite?",
      answer:
        "Utilizamos tecnologias líderes como Next.js, Tailwind CSS e WordPress, garantindo sites rápidos, escaláveis, modernos e com excelente desempenho técnico.",
    },
    {
      id: 9,
      question: "Quanto tempo leva para um site ficar pronto?",
      answer:
        "O prazo varia conforme o plano escolhido. Sites simples são entregues em até 10 dias úteis, enquanto projetos mais complexos podem levar até 30 dias úteis.",
    },
    {
      id: 10,
      question: "É possível integrar WhatsApp e outras ferramentas ao site?",
      answer:
        "Sim, integramos ferramentas como WhatsApp, Google Analytics e automação de marketing, ajudando a melhorar a comunicação com seus clientes e a análise de resultados.",
    },
    {
      id: 11,
      question: "Como posso gerenciar o conteúdo do meu site após a entrega?",
      answer:
        "Oferecemos uma ferramenta moderna de edição de layout, além de vídeos tutoriais que permitem gerenciar o conteúdo do site de forma simples e prática.",
    },
    {
      id: 12,
      question: "A KiSite oferece suporte para pequenos empreendedores?",
      answer:
        "Sim! Nosso foco é atender pequenas e médias empresas, oferecendo soluções acessíveis e personalizadas para ajudá-las a crescer e se destacar online.",
    },
  ];

export default function FaqAccordion() {
  return (
    <section className="max-w-7xl mx-auto p-6 space-y-8" aria-labelledby="faq-title">
      <div className="text-center">
        <h2
          id="faq-title"
          className="text-4xl font-bold bg-gradient-to-r from-primaryBlue to-secondaryBlue bg-clip-text text-transparent mt-4 lg:mt-14"
        >
          Perguntas Frequentes – Criação de Sites Profissionais
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Descubra as principais dúvidas sobre nossos serviços, planos e como podemos ajudar sua empresa a crescer no ambiente digital.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {faqItems.map((item) => (
          <details
            key={item.id}
            className="group bg-white rounded-xl shadow-md transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105 open:scale-105"
          >
            <summary
              className="flex cursor-pointer items-center justify-between rounded-xl p-6 marker:content-none hover:bg-gray-50/50"
            >
              <h3 className="text-lg font-medium text-primaryBlue group-hover:text-secondaryBlue transition-colors duration-300">
                {item.question}
              </h3>
              <ChevronDownIcon
                className="h-5 w-5 text-primaryBlue transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <div className="overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-[500px] max-h-0">
              <div className="px-6 pb-6 opacity-0 group-open:opacity-100 transition-opacity duration-300">
                <div className="rounded-lg bg-gray-50 p-4 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Não encontrou o que procurava?
        </p>
        <a
          href="#contato"
          className="inline-block bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
}