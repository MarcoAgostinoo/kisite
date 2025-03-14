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
      name: "1. Diagnóstico Gratuito & Solução Ideal",
      description:
        "Entenda suas necessidades e escolha a melhor solução: Site Essencial, Agente de Atendimento com IA ou a combinação perfeita para o seu negócio.",
      icon: GlobeAltIcon,
    },
    {
      name: "2. Site Essencial em 5 Dias",
      description:
        "Tenha sua presença online profissional e otimizada para o Google em tempo recorde: design moderno e responsivo.",
      icon: CalendarIcon,
    },
    {
      name: "3. Agente de Atendimento com IA",
      description:
        "Seu assistente virtual 24/7: atenda clientes, responda dúvidas e qualifique leads automaticamente no WhatsApp, liberando sua equipe.",
      icon: MagnifyingGlassCircleIcon,
    },
    {
      name: "4. Integração Site + Agente IA",
      description:
        "Unifique suas ferramentas e maximize resultados: atendimento inteligente no site e WhatsApp, captando e convertendo mais clientes.",
      icon: ServerIcon,
    },
    {
      name: "5. Estratégias de Marketing Opcionais",
      description:
        "Amplie seu alcance com campanhas de marketing digital e tráfego pago, personalizadas para atrair mais clientes qualificados.",
      icon: CurrencyDollarIcon,
    },
    {
      name: "6. Acompanhamento & Otimização Contínua",
      description:
        "Monitore seus resultados e otimize sua estratégia com nossos especialistas para um crescimento constante e sustentável.",
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
          Simplificamos o processo para você ter Site Profissional + Agente de Atendimento com I.A trabalhando juntos pelo seu sucesso!
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
            Quero Site, Agente de IA ou os 2 - Consultoria Gratuita!
          </span>
          <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 blur transition-opacity duration-300 group-hover:opacity-10"></div>
        </button>
      </div>
    </div>
  );
}
