import Caracteristicas from "../Caracteristicas/Caracteristicas";

const caracteristicas = [
  {
    title: "1. Site Essencial: A Base Digital Para Seu Crescimento",
    items: [
      {
        icon: "🚀",
        text: "A vitrine online da sua empresa em 7 dias: site profissional, responsivo e otimizado para o Google por apenas R$897.",
      },
      {
        icon: "📱",
        text: "Alcance clientes no celular: 85% dos brasileiros pesquisam no Google pelo smartphone (IBGE 2025).",
      },
      {
        icon: "🏆",
        text: "SEO otimizado: apareça nas buscas do Google e atraia clientes qualificados sem pagar por anúncios.",
      },
    ],
  },
  {
    title: "2. Agente Inteligente: Atendimento 24/7 Que Vende Mais",
    items: [
      {
        icon: "🤖",
        text: "Seu vendedor virtual: atenda clientes 24/7 no WhatsApp, tire dúvidas e gere leads automaticamente.",
      },
      {
        icon: "💸",
        text: "Economize até 6x: um Agente de atendimento inteligente custa menos que um vendedor CLT e não tem encargos.",
      },
      {
        icon: "📈",
        text: "Aumente suas vendas: Agente de I.A geram 40% mais leads qualificados que o atendimento humano tradicional.",
      },
    ],
  },
  {
    title: "3. Integração Estratégica: Site + Agente de I.A = Mais Vendas",
    items: [
      {
        icon: "🤝",
        text: "Conecte seu site ao Agente de I.A: turbine a geração de leads e ofereça suporte instantâneo aos visitantes.",
      },
      {
        icon: "🎯",
        text: "Personalização: adapte o Agente de I.A ao seu negócio e responda às dúvidas mais frequentes dos seus clientes.",
      },
      {
        icon: "📊",
        text: "Resultados comprovados: empresas que integram site e Agente de I.A aumentam em 30% a taxa de conversão.",
      },
    ],
  },
];

export default function HeroHomeContainer() {
  return (
    <div>
      <div
        id="caracteristicas"
        className="relative mt-10 lg:mt-14 z-11"
        style={{ background: "linear-gradient(#ffffff 50%, #002b55 50%)" }}
      >
        <div className=" grid w-full grid-cols-1 gap-5 px-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-8 lg:pb-20">
          {caracteristicas.map((caracteristica, index) => (
            <div 
              key={index}
              className="bg-white backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 transform hover:-translate-y-2 border border-gray-100/20"
            >
              <h3 className="w-full text-center text-2xl font-bold text-primaryBlue lg:text-xl">
                {caracteristica.title}
              </h3>
              <ul className="w-full">
                {caracteristica.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="sm:text-md flex text-base font-medium text-primaryBlue"
                  >
                    <div className="mr-3 flex w-6 items-start justify-center">
                      {item.icon}
                    </div>
                    <div className="flex-1 overflow-hidden text-ellipsis break-words">
                      {item.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primaryBlue pb-12">
        <Caracteristicas />
      </div>
    </div>
  );
}
