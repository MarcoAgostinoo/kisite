import {
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "WebSite Turbinado",
    description:
      "Cansado de sites que não vendem? Seu novo site Next.js é lançado em 5 dias, com design que impressiona e tecnologia que converte visitantes em clientes.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "SEO Imbatível",
    description:
      "Esqueça a briga por cliques! Posicione-se no topo do Google e conquiste os clientes certos, sem depender de anúncios caros e concorridos.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Agente de IA",
    description:
      "Deixe a inteligência artificial trabalhar por você! Atendimento 24/7 no WhatsApp, respostas personalizadas e vendas no piloto automático.",
    icon: ChatBubbleLeftIcon,
  },
  {
    name: "Conexão Total",
    description:
      "WhatsApp, redes sociais, e-mail... Integre tudo e centralize sua comunicação! Simplifique a vida do seu cliente e nunca perca uma oportunidade.",
    icon: EnvelopeIcon,
  },
  {
    name: "Zero Preocupação",
    description:
      "Hospedagem, suporte, manutenção... Deixe a parte técnica conosco e foque no que importa: fazer seu negócio bombar! Tudo isso por apenas R$ 74,75/mês.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Poder Ilimitado",
    description:
      "Escalabilidade, personalização, integrações... Seu site cresce com você! A tecnologia Next.js oferece flexibilidade total para acompanhar o ritmo do seu negócio.",
    icon: Cog6ToothIcon,
  },
];

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container" id="servicos">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Chegou a Hora de Destravar Seu Potencial!
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              WebSite Essencial + Agente de IA: A Dupla Imbatível
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Conquiste mais clientes, economize tempo e dinheiro, e veja seu negócio decolar com nossas soluções digitais de alto impacto.
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
            <a
              href="https://wa.me/5511919072390?text=Olá! Gostaria de automatizar meu negócio com site e IA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-successGreen"
            >
              Quero Deixar Meu Negócio no Piloto Automático
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/index/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
