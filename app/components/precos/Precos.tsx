import React from 'react';
import Link from 'next/link';

// Define a interface para os planos
interface Plan {
  name: string;
  price: string;
  monthlyFee: string;
  description: string;
  features: string[];
  isMVP: boolean;
}

// Array de planos com as informações atualizadas
const plans: Plan[] = [
  {
    name: "Site Essencial",
    price: "R$897,00",
    monthlyFee: "R$74,75",
    description: "Site institucional ou landing page otimizado para SEO. Apareça no Google.",
    features: [
      "Site 100% profissional",
      "Lançamento em 7 dias úteis",
      "Design responsivo",
      "Integração com WhatsApp",
      "3 contas de e-mail profissional",
      "Landing Page ou até 5 páginas",
      "40 fotos",
      "Integração com mídias sociais",
      "SEO avançado",
      "Certificado SSL",
      "Conformidade com LGPD",
      "Suporte técnico",
      "Desconto em serviços de marketing",
    ],
    isMVP: true,
  },
  {
    name: "Agente de I.A",
    price: "R$447,00",
    monthlyFee: "R$189,00",
    description: "Atendimento automático 24/7 com IA, economizando custos e aumentando a eficiência.",
    features: [
      "Integração de Agente de IA",
      "Respostas automáticas 24/7",
      "Personalização baseada em dados",
      "Análise de desempenho",
      "Suporte técnico especializado",
      "Gestão fácil de conteúdo",
      "Custo 6x menor que um vendedor CLT",
      "Sem encargos trabalhistas (atestados, férias, 13º, FGTS)",
    ],
    isMVP: false,
  },
];

// Componente PlanCard para exibir cada plano
const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full relative w-full max-w-sm">
    {plan.isMVP && (
      <span className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full absolute -top-3 left-6">
        Mais Popular
      </span>
    )}
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-gray-800 h-14 flex items-center justify-center text-center">
        {plan.name}
      </h3>
      <p className="text-gray-600 h-[72px] line-clamp-3 overflow-hidden text-center">
        {plan.description}
      </p>
      <div className="mt-4 mb-6 text-center">
        <span className="text-sm text-gray-500 font-medium mb-1 block">A partir de</span>
        <p className="text-3xl font-bold text-blue-600">{plan.price}</p>
        <div className="mt-2">
          <p className="text-sm text-green-600 font-medium">
            ou {(parseFloat(plan.price.replace('R$', '').replace('.', '').replace(',', '.')) / 4).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em até 4x no PIX
          </p>
        </div>
        <p className="text-gray-500 mt-2">+ {plan.monthlyFee}/mês para hospedagem e manutenção</p>
      </div>
      <ul className="mt-4 space-y-2 min-h-[280px]">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-700 flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="flex-1">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-auto space-y-3">
      <Link
        href={`https://wa.me/5511919072390?text=Olá! Gostaria de contratar o plano ${plan.name} por ${plan.price}`}
        target="_blank"
        rel="noreferrer"
        className="w-full bg-primaryBlue text-white font-bold py-3 px-6 rounded-lg hover:bg-secondaryBlue transition-colors duration-300 flex items-center justify-center mt-6 mb-6"
      >
        Comprar
      </Link>
      <Link
        href={`https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre o plano ${plan.name}`}
        target="_blank"
        rel="noreferrer"
        className="w-full border-2 border-primaryBlue text-primaryBlue font-bold py-3 px-6 rounded-lg hover:bg-primaryBlue hover:text-white transition-colors duration-300 flex items-center justify-center"
      >
        Saiba Mais
      </Link>
    </div>
  </div>
);

// Componente PricingSection que organiza os planos e serviços adicionais
const PricingSection: React.FC = () => {
  // Add testimonials data
  const testimonials = [
    {
      name: "João Silva",
      company: "Empresa ABC",
      text: "O Site Essencial transformou meu negócio. Em apenas 7 dias úteis, tive um site profissional que aumentou minhas vendas em 40%."
    },
    {
      name: "Maria Oliveira",
      company: "Loja XYZ",
      text: "Excelente custo-benefício! O site ficou pronto rapidamente e a equipe foi muito atenciosa durante todo o processo."
    },
    {
      name: "Carlos Santos",
      company: "Consultoria RS",
      text: "O atendimento por IA superou minhas expectativas. Economizei tempo e dinheiro, e meus clientes adoraram a rapidez nas respostas."
    },
    {
      name: "Ana Costa",
      company: "Estúdio Design",
      text: "Recomendo a todos os empreendedores. Site profissional, rápido e com ótimo suporte técnico."
    },
    {
      name: "Roberto Almeida",
      company: "Restaurante Sabor",
      text: "Melhor investimento que fiz para meu negócio. O site ficou pronto em 7 dias e já estou recebendo novos clientes."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mt-10 font-bold text-center text-gray-800 mb-12">
          Escolha o Melhor Plano para o Seu Negócio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plano Site Essencial (Esquerda) */}
          <div className="flex justify-center">
            <PlanCard plan={plans[0]} />
          </div>

          {/* Serviços Adicionais (Centro) */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full relative w-full max-w-sm">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-primaryBlue h-14 flex items-center justify-center text-center">
                Serviços Adicionais
              </h3>
              <p className="text-gray-600 h-[72px] line-clamp-3 overflow-hidden text-center">
                Personalize seu projeto com recursos avançados
              </p>
              <div className="mt-4 mb-6 text-center">
                <p className="text-2xl font-bold text-primaryBlue">Soluções Customizadas</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Valores personalizados de acordo com suas necessidades
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Integração com qualquer plano existente
                  </p>
                </div>
              </div>
              <ul className="mt-14 space-y-2 min-h-[280px]">
                {[
                  "E-commerce completo",
                  "integração com google analytics e google meu negócio",
                  "Blog com painel administrativo para publicações",
                  "Portal de notícias com sistema de gestão de conteúdo",
                  "Painel administrativo customizado",
                  "Automação avançada de marketing",
                  "Formulários inteligentes",
                  "Integrações com meios de pagamento",
                  "Criação e gestão de seus anúncios no Google",
                  "Formulários interativos para geração de leads",
                  "API personalizada",
                  "Design mobile-first",
                ].map((feature, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <Link
                href="https://wa.me/5511919072390?text=Olá! Gostaria de um orçamento para serviços adicionais"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-primaryBlue text-white font-bold py-3 px-6 rounded-lg hover:bg-secondaryBlue transition-colors duration-300 text-center block"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* Plano Agente de I.A (Direita) */}
          <div className="flex justify-center">
            <PlanCard plan={plans[1]} />
          </div>
        </div>
        
        {/* Testimonials Section with Improved Accessibility */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            O Que Nossos Clientes Dizem
          </h3>
          <div className="splide" aria-label="Depoimentos de clientes">
            <div className="splide__track">
              <ul className="splide__list">
                {testimonials.map((testimonial, index) => (
                  <li 
                    key={index}
                    className="splide__slide"
                    aria-label={`Depoimento ${index + 1} de ${testimonials.length}`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md mx-2">
                      <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primaryBlue rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-800">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;