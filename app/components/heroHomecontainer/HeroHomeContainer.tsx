import CaroucelHero from "../caroucelHero/CaroucelHero";
import Caracteristicas from "../Caracteristicas/Caracteristicas";

const caracteristicas = [
  {
    title: "1. Custos de Soluções Amadoras",
    items: [
      { icon: "✅", text: "Plataformas gratuitas geram 62% mais rejeição." },
      { icon: "✅", text: "Sites lentos afastam 97% dos consumidores online." },
      { icon: "✅", text: "Economia inicial = prejuízo em credibilidade." },
    ],
  },
  {
    title: "2. SEO Negligenciado",
    items: [
      { icon: "🎯", text: "53% do tráfego orgânico perdido sem otimização." },
      {
        icon: "🎯",
        text: "Invisibilidade nos buscadores = oportunidades perdidas.",
      },
      { icon: "🎯", text: "62% das empresas brasileiras ignoram SEO básico." },
    ],
  },
  {
    title: "3. Mobilidade Comprometida",
    items: [
      {
        icon: "📊",
        text: "61% dos acessos são mobile, mas só 29% dos sites são responsivos.",
      },
      { icon: "📊", text: "Experiência móvel ruim = clientes perdidos." },
      { icon: "📊", text: "R$ 48 bilhões perdidos anualmente no comércio." },
    ],
  },
  {
    title: "4. Gestão de Tráfego Ineficiente",
    items: [
      {
        icon: "📊",
        text: "72% do orçamento desperdiçado em cliques não qualificados.",
      },
      { icon: "📊", text: "Campanhas sem estratégia = dinheiro jogado fora." },
      {
        icon: "📊",
        text: "Apenas 38% das PMEs investem em tráfego qualificado.",
      },
    ],
  },
];

export default function HeroHomeContainer() {
  return (
    <div>
      <div
        className="relative"
        style={{
          background: "linear-gradient(#ffffff 50%, #002b55 50%)",
        }}
      >
        <div className="flex w-full flex-col items-center justify-center gap-5 px-2 align-middle md:gap-6 lg:flex-row lg:justify-around lg:gap-4 lg:px-8 lg:pb-4">
          {caracteristicas.map((caracteristica, index) => (
            <div
              key={index}
              className="flex h-auto w-11/12 flex-col rounded-lg bg-secondaryBlue p-5 text-left shadow-lg transition-all duration-300 hover:shadow-xl sm:w-4/5 md:p-6 lg:h-72 lg:w-1/4 xl:p-7"
            >
              <h3 className="mb-4 w-full text-center text-2xl font-bold text-accentYellow lg:text-xl">
                {caracteristica.title}
              </h3>
              <ul className="w-full space-y-3">
                {caracteristica.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex text-base font-medium text-pureWhite sm:text-lg"
                  >
                    <div className="mr-3 flex w-6 items-start justify-center text-successGreen">
                      {item.icon}
                    </div>
                    <div className="flex-1 break-words">{item.text}</div>
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
          <CaroucelHero />
        </div>
      </div>
    </div>
  );
}
