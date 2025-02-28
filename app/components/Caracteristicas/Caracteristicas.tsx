import {
  GlobeAltIcon,
  CalendarIcon,
  MagnifyingGlassCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  ServerIcon, // Novo ícone para hospedagem
  EnvelopeIcon, // Novo ícone para email
  PhoneIcon, // Novo ícone para suporte
  CurrencyDollarIcon, // Novo ícone para tráfego pago
} from "@heroicons/react/24/outline";

export default function ComoFunciona() {
  return (
    <div className="bg-darkBlue">
      {/* Background azul escuro */}
      <div className="rounded-lg p-6">
        <h2 className="mb-6 mt-6 text-center text-4xl font-bold tracking-wide text-white">
          COMO FUNCIONA NOSSA PARCERIA?
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg font-medium text-gray-200">
          Descubra como transformamos suas ideias em resultados digitais reais.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-3 lg:p-14">
        {/* Etapa 1 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <GlobeAltIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            Identificação das Necessidades
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Escolha entre soluções personalizadas ou pacotes prontos. Ajudamos você a decidir o que é ideal para o seu negócio.
          </p>
        </div>

        {/* Etapa 2 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <CalendarIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            Adicionais que Fazem a Diferença
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Personalize sua solução com funcionalidades como blog, multi-idiomas, portfólio dinâmico, área de membros e mais.
          </p>
        </div>

        {/* Etapa 3 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <MagnifyingGlassCircleIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            Planejamento e Execução
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Formalizamos o contrato, realizamos um briefing detalhado e entregamos resultados incríveis em poucos dias.
          </p>
        </div>

        {/* Vantagens Adicionais */}
        <div className="col-span-full mt-8">
          <h2 className="mb-6 text-center text-3xl font-bold text-white">
            Vantagens Exclusivas
          </h2>
        </div>

        {/* Container para as 4 vantagens */}
        <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Hospedagem 24/7 */}
          <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-4 text-left transition-all duration-300 hover:shadow-xl">
            <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
              <ServerIcon className="h-12 w-12 lg:h-14 lg:w-14 text-white" />
            </div>
            <h3 className="group-hover:text-darkBlue mt-3 text-xl lg:text-2xl font-bold text-white transition-colors duration-300">
              Hospedagem 24/7
            </h3>
            <p className="mt-2 text-sm lg:text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
              Garantimos o funcionamento ininterrupto do seu site 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          {/* E-mail Corporativo */}
          <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-4 text-left transition-all duration-300 hover:shadow-xl">
            <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
              <EnvelopeIcon className="h-12 w-12 lg:h-14 lg:w-14 text-white" />
            </div>
            <h3 className="group-hover:text-darkBlue mt-3 text-xl lg:text-2xl font-bold text-white transition-colors duration-300">
              E-mail Corporativo
            </h3>
            <p className="mt-2 text-sm lg:text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
              Soluções completas de e-mail corporativo personalizado para sua empresa.
            </p>
          </div>

          {/* Suporte Técnico */}
          <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-4 text-left transition-all duration-300 hover:shadow-xl">
            <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
              <PhoneIcon className="h-12 w-12 lg:h-14 lg:w-14 text-white" />
            </div>
            <h3 className="group-hover:text-darkBlue mt-3 text-xl lg:text-2xl font-bold text-white transition-colors duration-300">
              Suporte 24/7
            </h3>
            <p className="mt-2 text-sm lg:text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
              Suporte técnico especializado disponível 24 horas, sem custos surpresa.
            </p>
          </div>

          {/* Gestão de Tráfego */}
          <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-4 text-left transition-all duration-300 hover:shadow-xl">
            <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
              <CurrencyDollarIcon className="h-12 w-12 lg:h-14 lg:w-14 text-white" />
            </div>
            <h3 className="group-hover:text-darkBlue mt-3 text-xl lg:text-2xl font-bold text-white transition-colors duration-300">
              Tráfego Pago
            </h3>
            <p className="mt-2 text-sm lg:text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
              Campanhas publicitárias segmentadas com garantia de retorno sobre investimento.
            </p>
          </div>
        </div>

        {/* Botão de Chamada à Ação */}
        <div className="col-span-full mt-12 flex justify-center">
          <button 
            className="group relative animate-slide-in transform rounded-lg bg-gradient-to-r from-secondaryBlue to-primaryBlue px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-primaryBlue hover:to-secondaryBlue"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ChatBubbleBottomCenterTextIcon className="h-6 w-6 animate-pulse" />
              Inicie Sua Transformação Digital Agora
            </span>
            <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 blur transition-opacity duration-300 group-hover:opacity-10"></div>
          </button>
        </div>

      </div>
    </div>
  );
}
