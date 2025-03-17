import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqItems = [
  {
    id: 1,
    question: "O que é a KiSite?",
    answer:
      "A KiSite é especialista em transformar a presença digital de pequenas e médias empresas, oferecendo sites profissionais entregues em apenas 5 dias e chatbots de atendimento 24/7.",
  },
  {
    id: 2,
    question: "Quais soluções a KiSite oferece?",
    answer:
      "Oferecemos criação rápida de sites modernos, integração com WhatsApp, chatbots inteligentes com IA, SEO avançado e estratégias de marketing digital para potencializar suas vendas.",
  },
  {
    id: 3,
    question: "Como a KiSite ajuda minha empresa a não perder clientes?",
    answer:
      "Com um site otimizado e atendimento automatizado, sua empresa permanece acessível 24/7, atraindo e convertendo clientes de forma contínua.",
  },
  {
    id: 4,
    question: "Qual o prazo de entrega do site?",
    answer:
      "Sites essenciais são entregues em apenas 5 dias úteis, garantindo uma presença digital rápida e eficaz.",
  },
  {
    id: 5,
    question: "O que está incluso no plano Site Essencial?",
    answer:
      "O plano inclui design responsivo, SEO otimizado, integração com WhatsApp, contas de e-mail profissional e suporte técnico, tudo pensado para impulsionar seu negócio.",
  },
  {
    id: 6,
    question: "Como funciona o atendimento automatizado com IA?",
    answer:
      "Implementamos um chatbot inteligente que responde dúvidas, qualifica leads e gera vendas automaticamente, complementando sua equipe e reduzindo custos.",
  },
  {
    id: 7,
    question: "Posso integrar o site com outras ferramentas digitais?",
    answer:
      "Sim, integramos seu site com WhatsApp, Google Analytics e outras plataformas para centralizar sua comunicação e otimizar resultados.",
  },
  {
    id: 8,
    question: "Como a KiSite otimiza meu site para o Google?",
    answer:
      "Aplicamos estratégias robustas de SEO – desde análise de palavras-chave até ajustes técnicos – para posicionar seu site no topo das buscas e atrair clientes qualificados.",
  },
  {
    id: 9,
    question: "Quais tecnologias são utilizadas na criação dos sites?",
    answer:
      "Utilizamos tecnologias modernas como Next.js e Tailwind CSS, garantindo sites rápidos, seguros e escaláveis.",
  },
  {
    id: 10,
    question: "Existe suporte pós-lançamento?",
    answer:
      "Sim, oferecemos manutenção contínua, atualizações e suporte técnico para manter seu site sempre atualizado e seguro.",
  },
  {
    id: 11,
    question: "O serviço de chatbot substitui o atendimento humano?",
    answer:
      "Não, o chatbot complementa sua equipe ao oferecer atendimento 24/7, liberando tempo para que sua equipe se concentre em tarefas estratégicas.",
  },
  {
    id: 12,
    question: "A KiSite atende empresas de todos os segmentos?",
    answer:
      "Sim, nossas soluções são personalizadas para pequenas e médias empresas de diversos setores que buscam inovação e eficiência digital.",
  },
  {
    id: 13,
    question: "Como posso acompanhar os resultados do meu site?",
    answer:
      "Fornecemos análises de desempenho, relatórios de SEO e métricas de conversão para que você monitore o crescimento e o impacto digital do seu negócio.",
  },
  {
    id: 14,
    question: "Quais os benefícios de integrar site e chatbot?",
    answer:
      "A integração potencializa a geração de leads, melhora a experiência do usuário e aumenta a taxa de conversão, resultando em mais vendas para sua empresa.",
  },
  {
    id: 15,
    question: "Como posso iniciar meu projeto com a KiSite?",
    answer:
      "Entre em contato conosco via WhatsApp, e-mail ou formulário de contato para uma consultoria gratuita e descubra a melhor solução para o seu negócio.",
  },
];

export default function FaqAccordion() {
  return (
    <section
      className="max-w-7xl mx-auto p-6 space-y-8"
      aria-labelledby="faq-title"
    >
      <div className="text-center">
        <h2
          id="faq-title"
          className="text-4xl font-bold bg-gradient-to-r from-primaryBlue to-secondaryBlue bg-clip-text text-transparent mt-4 lg:mt-14"
        >
          Perguntas Frequentes – Sites Profissionais
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços, planos e como impulsionar sua
          presença digital.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {faqItems.map((item) => (
          <details
            key={item.id}
            className="group bg-white rounded-xl shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 open:scale-105"
          >
            <summary className="flex cursor-pointer items-center justify-between rounded-xl p-6 hover:bg-gray-50/50">
              <h3 className="text-lg font-medium text-primaryBlue group-hover:text-secondaryBlue transition-colors duration-300">
                {item.question}
              </h3>
              <ChevronDownIcon className="h-5 w-5 text-primaryBlue transition-transform duration-300 group-open:rotate-180" />
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
        <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
        <a
          href="https://wa.me/5511919072390?text=Olá! Tenho algumas dúvidas sobre os serviços da KiSite"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-successGreen to-successGreen text-white px-8 py-3 rounded-md font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
}
