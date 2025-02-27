// app/page.tsx
import { CheckIcon } from '@heroicons/react/20/solid';

interface Plan {
  name: string;
  price?: number;
  description: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: 'Site Essencial',
    price: 697.0,
    description:
      'Ideal para quem está começando e precisa de uma presença online rápida e eficiente.',
    features: [
      'Diagnóstico gratuito do site atual (ou ausência dele)',
      'Criação de Site Responsivo ou LandingPage',
      'Site com até 5 páginas ',
      'Integração com WhatsApp para agendamentos',
      'Até 3 contas de email Profissional',
      'Formulário de contato com integração de e-mail.',
      'SEO otimizado para melhorar a visibilidade no Google',
      'Conexão com redes sociais (Facebook, Instagram etc).',
      'Botões para gerar leads​',
      'Adequado para desktop, tablet e celular',
    ],
  },
  {
    name: 'Profissional - Funil de Vendas',
    price: 1597.0,
    description:
      'Perfeito para empresas em crescimento que desejam escalar suas vendas online.',
    features: [
      'Diagnóstico gratuito do site atual (ou ausência dele)',
      'Criação de Site Responsivo ou LandingPage',
      'Site com até 12 páginas',
      'Integração com WhatsApp para agendamentos',
      'Até 10 contas de email Profissional',
      'Formulário de contato com integração de e-mail.',
      'SEO otimizado para melhorar a visibilidade no Google',
      'Conexão com redes sociais (Facebook, Instagram etc).',
      'Adequado para desktop, tablet e celular',
      'Funil de vendas personalizado (página de captura + página de vendas)',
      'Sistema de agendamento online integrado',
      'Automação básica de marketing (e-mail e WhatsApp)',
      '1 Relatórios iniciais de desempenho',
      'Hospedagem por 1 ano',
    ],
  },
  {
    name: 'Site Sob Medida',
    description:
      'Site feito de forma artesanal, com layout do zero e gestor de projeto exclusivo, atendento todo tipo de situação incluindo E-commerce.',
    features: [
      'Diagnóstico gratuito do site atual (ou ausência dele)',
      'Criação de Site Responsivo ou LandingPage',
      'Site com até 12 páginas',
      'Integração com WhatsApp para agendamentos',
      'Até 10 contas de email Profissional',
      'Formulário de contato com integração de e-mail.',
      'SEO otimizado para melhorar a visibilidade no Google',
      'Conexão com redes sociais (Facebook, Instagram etc).',
      'Adequado para desktop, tablet e celular',
      'Funil de vendas personalizado (página de captura + página de vendas)',
      'Sistema de agendamento online integrado',
      'Automação básica de marketing (e-mail e WhatsApp)',
      '1 Relatórios iniciais de desempenho',
      'Hospedagem por 1 ano',
      'Criação de site profissional com layout sob medida',
      'Site Responsivo (desktop, tablet, celular)',
      'Todos os tipos de sites',
      'Integrações customizadas',
      'Otimização SEO para Google',
      'Botões para gerar leads',
      'Formulários inteligentes',
      'Integração com redes sociais',
      'Treinamento para uso do site',
      'Conformidade com a LGPD',
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
                index === 0 ? 'ring-indigo-600' : 'ring-gray-900/10'
              }`}
            >
              <h3 className="text-lg font-semibold text-indigo-600">{plan.name}</h3>
              {plan.price ? (
                <div>
                  <p className="flex flex-row mt-2 text-3xl font-bold text-gray-900">
                    R${plan.price.toFixed(2).replace('.', ',')}
                  </p>
                  <p>para construir a aplicação</p>
                  <p className="mt-1 text-sm text-gray-500">
                    + {calculateParcel(plan.price)} ao mês para hospedagem e manutenção
                  </p>
                </div>
              ) : (
                <div>
                  <p className="flex flex-row mt-2 text-3xl font-bold text-gray-900">
                    Sob Orçamento
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    PAGAMENTO ÚNICO
                  </p>
                </div>
              )}
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
                  Peça o Seu
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
