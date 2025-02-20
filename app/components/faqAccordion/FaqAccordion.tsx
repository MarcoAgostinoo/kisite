"use client";
import React from "react";

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

const FaqAccordion: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto p-6 space-y-8" aria-labelledby="faq-title">
            {/* SEO-friendly Title */}
            <div className="text-center">
                <h2 id="faq-title" className="text-4xl font-bold text-[#002B5B] mt-4 lg:mt-14">
                    Perguntas Frequentes – Criação de Sites Profissionais
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Descubra as principais dúvidas sobre nossos serviços, planos e como podemos ajudar sua empresa a crescer no ambiente digital.
                </p>
            </div>

            {/* FAQ Accordion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {faqItems.map((item) => (
                    <div
                        key={item.id}
                        className="border border-gray-300 rounded-lg p-4 shadow-sm"
                    >
                        {/* Input escondido para controle */}
                        <input
                            type="checkbox"
                            id={`faq-toggle-${item.id}`}
                            className="hidden peer"
                        />
                        <label
                            htmlFor={`faq-toggle-${item.id}`}
                            className="w-full text-left flex justify-between items-center cursor-pointer"
                        >
                            <h2 className="text-lg font-medium text-[#002B5B]">
                                {item.question}
                            </h2>
                            <span className="text-[#0070f3]">+</span>
                        </label>
                        <div className="peer-checked:block hidden mt-3 text-gray-700">
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqAccordion;
