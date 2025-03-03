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

export default function Servicos() {
  return (
    <div id="servicos" className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
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
            Desenvolvemos estratégias digitais que geram resultados reais para seu negócio.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-start gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 group-hover:bg-indigo-500 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
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
          <button className="inline-flex items-center gap-2 bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-successGreen rounded-xl transition-all duration-300 hover:scale-105">
            Solicite um Orçamento
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}