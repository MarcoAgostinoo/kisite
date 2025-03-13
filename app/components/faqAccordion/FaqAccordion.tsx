import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqItems = [
  {
    id: 1,
    question: "O que é a KiSite?",
    answer:
      "A KiSite cria sites modernos, responsivos e otimizados para pequenas e médias empresas, fortalecendo sua presença digital.",
  },
  {
    id: 2,
    question: "Quais serviços a KiSite oferece?",
    answer:
      "Desenvolvemos sites profissionais, e-commerces customizados, e oferecemos manutenção, SEO e consultoria digital com integrações como WhatsApp e Google Analytics.",
  },
  {
    id: 3,
    question: "Por que investir em um site profissional?",
    answer:
      "Um site profissional amplia a visibilidade, atrai clientes e reforça a credibilidade da sua marca.",
  },
  {
    id: 4,
    question: "Quais planos estão disponíveis?",
    answer:
      "Oferecemos os planos Essencial, Profissional e Sob Medida, com recursos que vão do básico ao avançado, incluindo automação de marketing.",
  },
  {
    id: 5,
    question: "Como funciona a criação de e-commerce?",
    answer:
      "Desenvolvemos lojas virtuais completas com sistemas de pagamento e funcionalidades específicas para impulsionar suas vendas online.",
  },
  {
    id: 6,
    question: "O que inclui a manutenção contínua?",
    answer:
      "Incluímos atualizações, suporte técnico e melhorias de desempenho para manter seu site sempre atualizado e seguro.",
  },
  {
    id: 7,
    question: "Como a KiSite otimiza para SEO?",
    answer:
      "Aplicamos estratégias robustas de SEO com análise de palavras-chave, conteúdo relevante e ajustes técnicos para garantir alta visibilidade no Google.",
  },
  {
    id: 8,
    question: "Quais tecnologias a KiSite utiliza?",
    answer:
      "Utilizamos Next.js, Tailwind CSS, WordPress e integrações com APIs para criar sites rápidos, escaláveis e de alto desempenho.",
  },
  {
    id: 9,
    question: "Qual o prazo de entrega?",
    answer:
      "Sites simples são entregues em até 5 dias úteis; projetos complexos podem levar até 30 dias úteis.",
  },
  {
    id: 10,
    question: "É possível integrar WhatsApp e outras ferramentas?",
    answer:
      "Sim, integramos WhatsApp, Google Analytics e automação de marketing para otimizar comunicação e resultados.",
  },
  {
    id: 11,
    question: "Quantas revisões posso solicitar?",
    answer:
      "Oferecemos revisões ilimitadas dentro do escopo inicial para garantir total alinhamento com o projeto.",
  },
  {
    id: 12,
    question: "Como é garantida a segurança jurídica?",
    answer:
      "Firmamos um contrato digital detalhado que assegura transparência e conformidade com as normas técnicas e legais.",
  },
  {
    id: 13,
    question: "Qual o canal de contato durante o projeto?",
    answer:
      "Você contará com um gerente de projetos dedicado, disponível via WhatsApp, e-mail e telefone para acompanhar todas as etapas.",
  },
  {
    id: 14,
    question: "Quais são as etapas da criação de sites?",
    answer:
      "Para sites expressos: escolha do modelo, envio de conteúdo, customização e entrega em 5 dias úteis. Para sites sob medida: briefing, design exclusivo, desenvolvimento, testes e lançamento com suporte.",
  },
  {
    id: 15,
    question: "A KiSite atende pequenos empreendedores?",
    answer:
      "Sim, oferecemos soluções acessíveis e personalizadas para que pequenos e médios negócios se destaquem online.",
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
          Perguntas Frequentes – Sites Profissionais
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos serviços, planos e como impulsionar sua presença digital.
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
          href="#contato"
          className="inline-block bg-gradient-to-r from-successGreen to-successGreen text-white px-8 py-3 rounded-md font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
}
