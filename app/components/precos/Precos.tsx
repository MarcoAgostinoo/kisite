// app/page.tsx
import { CheckIcon } from '@heroicons/react/20/solid';


interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: 'MVP - Diagnóstico + Landing Page',
    price: 697.0,
    description:
      'Ideal para quem está começando e precisa de uma presença online rápida e eficiente.',
    features: [
      'Diagnóstico gratuito do site atual (ou ausência dele)',
      'Landing Page responsiva com até 1 página',
      'Formulário de contato para captação de leads',
      'Integração com WhatsApp Business para agendamentos',
      'SEO básico para melhorar a visibilidade no Google',
      'Pop-up estratégico para capturar leads',
      'Hospedagem por 6 meses',
    ],
  },
  {
    name: 'Profissional - Funil de Vendas',
    price: 1597.0,
    description:
      'Perfeito para empresas em crescimento que desejam escalar suas vendas online.',
    features: [
      'Site responsivo com até 7 páginas',
      'Funil de vendas personalizado (página de captura + página de vendas)',
      'Sistema de agendamento online integrado',
      'Automação básica de marketing (e-mail e WhatsApp)',
      'SEO intermediário para atrair tráfego qualificado',
      'Relatórios iniciais de desempenho',
      'Hospedagem por 1 ano',
      '3 e-mails corporativos',
    ],
  },
  {
    name: 'Premium - E-commerce + Automação',
    price: 3997.0,
    description:
      'Solução completa para empresas consolidadas que querem maximizar suas vendas online.',
    features: [
      'E-commerce integrado para venda de produtos e pacotes',
      'Automação avançada de marketing (e-mail, WhatsApp, SMS)',
      'Chat online para atendimento em tempo real',
      'SEO avançado para dominar as primeiras posições do Google',
      'Relatórios mensais detalhados de desempenho',
      'Design exclusivo e totalmente personalizado',
      'Hospedagem por 1 ano em servidores premium',
      'E-mails corporativos ilimitados',
      'Suporte prioritário e manutenção mensal inclusa',
    ],
  },
];

const calculateParcel = (price: number): string => {
  const parcel = price / 12;
  return `R$ ${parcel.toFixed(2).replace('.', ',')}`;
};

export default function Page() {
  return (
    <>
      <div id="precos" className="bg-white px-6 py-12 sm:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600">Preços</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Escolha o plano ideal para o seu negócio
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Selecione o plano que melhor atende às suas necessidades e transforme sua presença digital.
          </p>
        </div>
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-md ring-1 shadow-sm ${
                plan.name === 'Premium - E-commerce + Automação'
                  ? 'ring-indigo-600'
                  : 'ring-gray-900/10'
              }`}
            >
              <h3 className="text-lg font-semibold text-indigo-600">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                R$ {plan.price.toFixed(2).replace('.', ',')}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                ou {calculateParcel(plan.price)} ao mês
              </p>
              <p className="mt-3 text-sm text-gray-600">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-x-2">
                    <CheckIcon className="h-4 w-4 flex-shrink-0 text-indigo-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Botões alinhados horizontalmente */}
              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="#"
                  className="rounded-sm bg-secondaryBlue px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-500"
                >
                  Comece agora
                </a>
                <a
                  href="#"
                  className="rounded-sm border border-secondaryBlue px-4 py-2 text-center text-sm font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
