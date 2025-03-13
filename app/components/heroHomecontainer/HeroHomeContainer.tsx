import Caracteristicas from "../Caracteristicas/Caracteristicas";

const caracteristicas = [
  {
    title: "1. Investimentos sem Retorno: Riscos de Soluções Amadoras",
    items: [
      {
        icon: "💸",
        text: "Soluções gratuitas oferecem baixa performance e comprometem a credibilidade da marca.",
      },
      {
        icon: "🤝",
        text: "Abordagens amadoras prejudicam a imagem e afastam clientes desde o primeiro contato.",
      },
      {
        icon: "📉",
        text: "Investimentos de baixo custo resultam em oportunidades perdidas e faturamento comprometido.",
      },
    ],
  },
  {
    title: "2. SEO Subestimado: Perda de Visibilidade",
    items: [
      {
        icon: "🔍",
        text: "Sem uma estratégia SEO robusta, seu site permanece oculto nos principais buscadores.",
      },
      {
        icon: "⚙️",
        text: "Estratégias básicas não competem com soluções avançadas de SEO.",
      },
      {
        icon: "🚀",
        text: "Negligenciar o SEO é abrir mão de posicionamento estratégico e crescimento sustentável.",
      },
    ],
  },
  {
    title: "3. Experiência Mobile Deficiente: Impacto na Conversão",
    items: [
      {
        icon: "📱",
        text: "Com 60% dos acessos oriundos de dispositivos móveis, sites não otimizados perdem clientes potenciais.",
      },
      {
        icon: "💔",
        text: "Layouts incompatíveis prejudicam a usabilidade e a experiência do usuário.",
      },
      {
        icon: "📉",
        text: "Design mobile-first é essencial para manter visitantes e aumentar as conversões.",
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
