import {
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  VideoCameraIcon,
  SwatchIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Criação de Sites Profissionais",
    description:
      "Desenvolvemos sites modernos e funcionais, alinhados às necessidades da sua empresa, com foco em design responsivo e experiência do usuário.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Otimização para Google (SEO)",
    description:
      "Aprimoramos seu site para posicionamento orgânico no Google, utilizando técnicas avançadas de SEO, como palavras-chave estratégicas e velocidade de carregamento.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Links Patrocinados",
    description:
      "Gerenciamos campanhas pagas no Google Ads, Facebook e Instagram, com segmentação precisa para atrair clientes qualificados e aumentar seu ROI.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Vídeos Institucionais",
    description:
      "Produzimos vídeos profissionais para sua empresa, desde conteúdo institucional até campanhas publicitárias, utilizando storytelling e técnicas de engajamento.",
    icon: VideoCameraIcon,
  },
  {
    name: "Identidade Visual Completa",
    description:
      "Criamos a identidade visual da sua marca, incluindo logotipo, paleta de cores, tipografia e padronização para materiais físicos e digitais.",
    icon: SwatchIcon,
  },
  {
    name: "Email Marketing Estratégico",
    description:
      "Elaboramos campanhas de email marketing personalizadas e automatizadas, focadas em conversões, fidelização de clientes e nutrição de leads.",
    icon: EnvelopeIcon,
  },
];

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
      <div
      id="servicos"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Impulsione seu Negócio!
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Soluções Digitais Completas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transforme sua presença online com nossas soluções personalizadas.
            Desenvolvemos estratégias digitais que geram resultados reais para
            seu negócio.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-indigo-600 transition-colors duration-300 group-hover:bg-indigo-500">
                  <feature.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-successGreen">
            Solicite um Orçamento
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* SVG Background Element */}
      <div className="relative mt-16 w-full overflow-hidden">
        <svg 
          className="absolute bottom-0 left-0 w-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill="#f3f4f6" 
            fillOpacity="1" 
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Remove the old SVG and background div */}
    </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            ></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/index/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
