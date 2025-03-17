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
      name: "1. Diagnóstico & Avaliação",
      description:
        "Analisamos as necessidades do seu negócio com uma avaliação gratuita e detalhada.",
      icon: GlobeAltIcon,
    },
    {
      name: "2. Planejamento & Proposta",
      description:
        "Desenvolvemos uma proposta personalizada, definindo estratégias e soluções ideais.",
      icon: CalendarIcon,
    },
    {
      name: "3. Desenvolvimento do Site",
      description:
        "Criamos seu site com design responsivo, moderno e otimizado para buscadores.",
      icon: MagnifyingGlassCircleIcon,
    },
    {
      name: "4. Integração Opcional de Agente de IA",
      description:
        "Caso seja necessário, implementamos um agente virtual para atendimento e suporte, conforme a demanda do cliente.",
      icon: ServerIcon,
    },
    {
      name: "5. Funcionalidades Extras (Opcional)",
      description:
        "Recursos adicionais, como campanhas de marketing digital ou tráfego pago, podem ser incorporados conforme a necessidade do seu negócio.",
      icon: CurrencyDollarIcon,
    },
    {
      name: "6. Implementação & Lançamento",
      description:
        "Finalizamos o projeto com testes rigorosos e entregamos sua solução pronta para uso.",
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
          Do diagnóstico à implementação, cada etapa foi planejada para atender suas necessidades.
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
        <a
          href="https://wa.me/5511919072390?text=Olá! Gostaria de uma consultoria gratuita sobre Site e/ou Agente de IA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative animate-slide-in transform rounded-lg bg-gradient-to-r from-secondaryBlue to-primaryBlue px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-primaryBlue hover:to-successGreen"
        >
          <span className="relative z-10 flex items-center gap-2">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6 animate-pulse" />
            Quero Site, Agente de IA ou os 2 - Consultoria Gratuita!
          </span>
          <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 blur transition-opacity duration-300 group-hover:opacity-10"></div>
        </a>
      </div>
    </div>
  );
}