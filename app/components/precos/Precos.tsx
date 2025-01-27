import { CheckIcon } from '@heroicons/react/20/solid';
import Head from 'next/head';

export default function Precos() {
  interface Plan {
    name: string;
    price: number;
    description: string;
    features: string[];
  }

  const plans: Plan[] = [
    {
      name: 'Básico',
      price: 789.0,
      description: 'Ideal para quem deseja criar um site eficiente com funcionalidades essenciais.',
      features: [
        'Design responsivo',
        'Até 5 páginas ou Landing Page',
        'Até 15 imagens',
        'Certificado SSL (Site Seguro)',
        'Links para redes sociais',
        'Integração com WhatsApp',
        'Otimização de SEO básico',
        'Hospedagem por 1 ano (em nossos servidores)',
        '1 e-mail corporativo',
        'Prazo de entrega: até 10 dias úteis',
      ],
    },
    {
      name: 'Profissional',
      price: 1199.0,
      description: 'Para empresas que precisam de um site mais robusto com maior personalização.',
      features: [
        'Design personalizado e responsivo',
        'Até 7 páginas',
        'Até 30 imagens',
        'Certificado SSL (Site Seguro)',
        'Links para redes sociais',
        'Integração com WhatsApp',
        'Otimização de SEO intermediário',
        'Hospedagem por 1 ano (em nossos servidores)',
        '3 e-mails corporativos',
        'Integração com Google Analytics',
        '1 atualização gratuita (ajuste de conteúdo ou imagens) por mês',
        'Prazo de entrega: até 15 dias úteis',
      ],
    },
    {
      name: 'Enterprise',
      price: 2199.0,
      description: 'Soluções completas e sob medida para empresas que desejam um site de alto desempenho.',
      features: [
        'Design exclusivo e responsivo',
        'Até 15 páginas',
        'Até 50 imagens',
        'Chat online no site',
        'Certificado SSL (Site Seguro)',
        'Links para redes sociais',
        'Otimização de SEO avançado',
        'Sistema de Blog integrado',
        'Hospedagem por 1 ano (em nossos servidores)',
        'E-mails corporativos ilimitados (em nossos servidores)',
        'Integração com e-commerce simples (até 30 produtos)',
        'Automação básica de marketing (formulário de captação)',
        'Relatórios de desempenho (1 entrega)',
        'Integração com WhatsApp Business para contato direto',
        '3 atualizações gratuitas (ajuste de conteúdo, imagens ou adicionar produtos) por mês',
        'Prazo de entrega: até 30 dias úteis',
      ],
    },
  ];

  const calculateParcel = (price: number): string => {
    const parcel = price / 12;
    return `R$ ${parcel.toFixed(2).replace('.', ',')}`;
  };

  return (
    <>
      <Head>
        <title>Planos de Preços - KiSite</title>
        <meta
          name="description"
          content="Selecione o plano que melhor atende às suas necessidades e leve sua presença online para o próximo nível com nossos serviços de criação de sites."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.seusite.com/precos" />
      </Head>
      <div id="precos" className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600">Preços</h2>
          <p className="mt-2 text-5xl font-semibold text-gray-900 sm:text-6xl">
            Escolha o plano ideal para o seu site
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
          Selecione o plano que melhor atende às suas necessidades e leve sua presença online para o próximo nível.
        </p>
        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl ring-1 ring-gray-900/10 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-indigo-600">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-gray-900">
                R$ {plan.price.toFixed(2).replace('.', ',')}{' '}
                <span className="text-xl">.</span>
              </p>
              <p className="mt-2 text-lg text-gray-600">
                mais {calculateParcel(plan.price)} ao mês
              </p>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-x-3">
                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 block rounded-md bg-indigo-600 px-4 py-2 text-center text-white hover:bg-indigo-500"
              >
                Comece agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
