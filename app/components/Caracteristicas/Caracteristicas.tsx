import {
  GlobeAltIcon,
  CalendarIcon,
  MagnifyingGlassCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  ShoppingCartIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Caracteristicas() {
  return (
    <div className="bg-darkBlue">
      {/* Background azul escuro */}
      <div className="rounded-lg p-6">
        <h2 className="mb-6 mt-6 text-center text-4xl font-bold tracking-wide text-white">
          Soluções Digitais para Transformar Sua Clínica de Estética
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg font-medium text-gray-200">
          Descubra como nossas soluções podem alavancar sua clínica no mundo digital.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-3 lg:p-14">
        {/* Bloco 1 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <GlobeAltIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            Site Responsivo e Moderno
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Um design moderno e adaptável que impressiona seus clientes e melhora a experiência do usuário.
          </p>
        </div>

        {/* Bloco 2 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left  transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <CalendarIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            Sistema de Agendamento Online
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Facilite a vida dos seus clientes com um sistema de agendamento integrado diretamente ao seu site.
          </p>
        </div>

        {/* Bloco 3 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left  transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <MagnifyingGlassCircleIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            SEO Avançado
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Apareça nas primeiras posições do Google e atraia mais clientes com estratégias de SEO personalizadas.
          </p>
        </div>

        {/* Bloco 4 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left  transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <ChatBubbleBottomCenterTextIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            Automação de Marketing
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Automatize campanhas de e-mail e WhatsApp para nutrir leads e converter mais clientes.
          </p>
        </div>

        {/* Bloco 5 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left  transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <ShoppingCartIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            E-commerce Integrado
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Venda cosméticos, pacotes de tratamento e outros produtos diretamente pelo seu site.
          </p>
        </div>

        {/* Bloco 6 */}
        <div className="bg-secondaryDarkBlue hover:bg-primaryLightBlue group rounded-lg p-6 text-left  transition-all duration-300 hover:shadow-xl">
          <div className="bg-blue-900 inline-block rounded-sm p-2 transition-transform duration-300 group-hover:scale-110">
            <ChartBarIcon className="h-16 w-16 text-white" />
          </div>
          <h3 className="group-hover:text-darkBlue mt-4 text-2xl font-bold text-white transition-colors duration-300">
            Relatórios Mensais
          </h3>
          <p className="mt-2 text-base font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
            Acompanhe o desempenho do seu site com relatórios detalhados e insights práticos.
          </p>
        </div>
      </div>
    </div>
  );
}
