import {
  GlobeAltIcon,
  CalendarIcon,
  MagnifyingGlassCircleIcon,
  ServerIcon,
  CurrencyDollarIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

export default function ComoFunciona() {
  const steps = [
    {
      name: "Diagnóstico & Consultoria",
      description:
        "Iniciamos com uma consultoria gratuita para identificar as necessidades do seu negócio e definir a estratégia ideal – seja com o Site Essencial ou com soluções avançadas.",
      icon: GlobeAltIcon,
    },
    {
      name: "Desenvolvimento do Site Essencial",
      description:
        "Criamos seu site institucional ou landing page com design responsivo, SEO otimizado e personalização total, garantindo lançamento em até 5 dias úteis.",
      icon: CalendarIcon,
    },
    {
      name: "Integração de Funcionalidades Avançadas",
      description:
        "Adicionamos integrações essenciais, como WhatsApp, redes sociais, e-mail corporativo e formulários inteligentes, para ampliar sua presença digital.",
      icon: MagnifyingGlassCircleIcon,
    },
    {
      name: "Hospedagem & Suporte Contínuo",
      description:
        "Oferecemos hospedagem segura, manutenção e suporte técnico 24/7, assegurando a performance máxima do seu site.",
      icon: ServerIcon,
    },
    {
      name: "Marketing Digital & Tráfego Pago",
      description:
        "Impulsione seu negócio com campanhas segmentadas e estratégias de marketing digital que aumentam a visibilidade e geram resultados reais.",
      icon: CurrencyDollarIcon,
    },
    {
      name: "Acompanhamento & Otimização",
      description:
        "Monitoramos os resultados do seu site para promover melhorias contínuas, ajustes estratégicos e crescimento sustentável.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
  ];

  return (
    <div className="bg-darkBlue">
      <div className="rounded-lg p-6">
        <h2 className="mb-6 mt-6 text-center text-4xl font-bold tracking-wide text-white">
          COMO FUNCIONA NOSSA PARCERIA?
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg font-medium text-gray-200">
          Conheça as etapas do nosso processo completo para transformar sua presença digital.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-3 lg:p-14">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left transition-all duration-300 hover:shadow-xl"
          >
            <div className="bg-blue-900 inline-block rounded-md p-2 transition-transform duration-300 group-hover:scale-110">
              <step.icon className="h-16 w-16 text-white" />
            </div>
            <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
              {step.name}
            </h3>
            <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button
          className="group relative animate-slide-in transform rounded-lg bg-gradient-to-r from-secondaryBlue to-primaryBlue px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-primaryBlue hover:to-successGreen"
        >
          <span className="relative z-10 flex items-center gap-2">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6 animate-pulse" />
            Agende sua Consultoria Gratuita
          </span>
          <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 blur transition-opacity duration-300 group-hover:opacity-10"></div>
        </button>
      </div>
    </div>
  );
}
