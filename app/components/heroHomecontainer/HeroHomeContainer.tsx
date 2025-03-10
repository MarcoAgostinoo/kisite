import Caracteristicas from "../Caracteristicas/Caracteristicas";

const caracteristicas = [
  {
    title: "1. Custos de Soluções Amadoras",
    items: [
      {
        icon: "💸",
        text: "Plataformas gratuitas aumentam a rejeição por baixa qualidade.",
      },
      {
        icon: "🐢",
        text: "Sites lentos podem afastar até 52% dos consumidores online.",
      },
      {
        icon: "⚠️",
        text: "Economia inicial compromete a credibilidade e a confiança.",
      },
    ],
  },
  {
    title: "2. SEO Negligenciado",
    items: [
      {
        icon: "🔍",
        text: "Falta de SEO prejudica significativamente o tráfego orgânico.",
      },
      {
        icon: "👻",
        text: "Invisibilidade nos buscadores significa perder clientes.",
      },
      {
        icon: "📉",
        text: "Muitas empresas brasileiras subestimam o poder do SEO básico.",
      },
    ],
  },
  {
    title: "3. Mobilidade Comprometida",
    items: [
      {
        icon: "📱",
        text: "Cerca de 60% dos acessos são mobile, mas poucos sites são otimizados.",
      },
      {
        icon: "🚫",
        text: "Experiência móvel ruim afasta clientes em potencial.",
      },
      {
        icon: "💸",
        text: "Milhões são perdidos anualmente por falhas no mobile.",
      },
    ],
  },
  {
    title: "4. Gestão de Tráfego Ineficiente",
    items: [
      {
        icon: "🎯",
        text: "Grande parte do orçamento é gasta em cliques não qualificados.",
      },
      {
        icon: "📉",
        text: "Campanhas sem estratégia desperdiçam recursos valiosos.",
      },
      {
        icon: "💡",
        text: "Poucas PMEs investem em tráfego realmente qualificado.",
      },
    ],
  },
];

export default function HeroHomeContainer() {
  return (
    <div>
      <div
        id="caracteristicas"
        className="relative"
        style={{
          background: "linear-gradient(#ffffff 50%, #002b55 50%)",
        }}
      >
        <div className="flex w-full flex-col items-center justify-center gap-5 px-2 align-middle md:gap-6 lg:flex-row lg:justify-around lg:gap-4 lg:px-8 lg:pb-4">
          {caracteristicas.map((caracteristica, index) => (
            <div
              key={index}
              className="flex max-h-72 min-h-80 flex-col items-start gap-6 rounded-md bg-successGreen p-6"
            >
              <h3 className="flex h-[3rem] w-full items-center justify-center text-center text-2xl font-bold text-primaryBlue lg:text-xl px-2">
                {caracteristica.title}
              </h3>
              <ul className="w-full">
                {caracteristica.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="sm:text-md flex text-base font-medium text-pureWhite"
                  >
                    {/* <div className="mr-3 flex w-6 items-start justify-center text-successGreen">
                      {item.icon}
                    </div> */}
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
      <div className="bg-primaryBlue pb-12 pt-14">
        <div>
          <Caracteristicas />
        </div>
      </div>
    </div>
  );
}
