import { CheckIcon } from '@heroicons/react/20/solid';

export default function Price() {
  interface Plan {
    name: string;
    price: number;
    description: string;
    features: string[];
  }
  
  const plans: Plan[] = [
    {
      name: 'Básico',
      price: 499.00,
      description: "Ideal para quem deseja criar um site simples, mas eficiente.",
      features: [
        'Design responsivo',
        'Até 5 páginas',
        'Hospedagem por 6 meses',
        'Suporte 24h',
      ],
    },
    {
      name: 'Profissional',
      price: 1299.00,
      description: 'Para empresas em crescimento que precisam de mais funcionalidades e recursos.',
      features: [
        'Design personalizado',
        'Até 10 páginas',
        'SEO básico',
        'Hospedagem por 1 ano',
        'Suporte prioritário',
        'Integração com redes sociais',
      ],
    },
    {
      name: 'Enterprise',
      price: 2499.00,
      description: 'Soluções completas para empresas de grande porte, com todas as funcionalidades e suporte dedicado.',
      features: [
        'Design exclusivo',
        'Páginas ilimitadas',
        'SEO avançado',
        'Hospedagem por 1 ano',
        'Suporte dedicado',
        'Integração com e-commerce',
        'Automação de marketing',
        'Relatórios personalizados',
      ],
    },
  ];
  
  

  // Função para calcular o valor das parcelas
  const calculateParcel = (price: number): string => {
    const parcel = price / 12;
    return `R$ ${parcel.toFixed(2).replace('.', ',')}`;
  };
  

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-indigo-600">Preços</h2>
        <p className="mt-2 text-5xl font-semibold text-gray-900 sm:text-6xl">Escolha o plano ideal para o seu site</p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
        Selecione o plano que melhor atende às suas necessidades e leve sua presença online para o próximo nível.
      </p>
      <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl ring-1 ring-gray-900/10 shadow-lg">
            <h3 className="text-lg font-semibold text-indigo-600">{plan.name}</h3>
            <p className="mt-4 text-4xl font-bold text-gray-900">R$ {plan.price.toFixed(2).replace('.', ',')}</p>
            <p className="mt-2 text-lg text-gray-600">Ou em até 12x de {calculateParcel(plan.price)}</p>
            <p className="mt-4 text-gray-600">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <CheckIcon className="h-5 w-5 text-indigo-600" />
                  {feature}
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
  );
}
