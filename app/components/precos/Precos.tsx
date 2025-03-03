import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface Plan {
  name: string;
  price?: number;
  description: string;
  features: string[];
  isMVP?: boolean;
}

const plans: Plan[] = [
  {
    name: "Site Essencial",
    price: 897.0,
    description: "Solução inicial ideal para estabelecer sua presença online com rapidez e qualidade.",
    isMVP: true,
    features: [
      "Início rápido em até 5 dias úteis",
      "Site 100% responsivo",
      "Até 5 páginas otimizadas",
      "Integração com WhatsApp",
      "3 contas de email profissional",
      "Formulário de contato integrado",
      "SEO básico otimizado",
      "Certificado SSL gratuito",
      "Design mobile-first",
      "Suporte técnico para manutenção",
    ],
  },
  {
    name: "Profissional",
    price: 1597.0,
    description: "Solução completa para empresas que buscam crescimento e conversões online.",
    features: [
      "Todos os recursos do plano Essencial",
      "Site com até 15 páginas otimizadas",
      "Até 10 contas de email Profissional",
      "SEO avançado com relatório mensal",
      "Sistema de agendamento online integrado",
      "Funil de vendas personalizado",
      "Automação de marketing (email e WhatsApp)",
      "Google Analytics 4 e Search Console",
      "Blog integrado com painel administrativo",
      "Hospedagem premium",
      "Backup automático"
    ],
  },
  {
    name: "E-commerce & Projetos Especiais",
    description: "Soluções personalizadas para e-commerce e projetos complexos.",
    features: [
      "Todos os recursos do plano Profissional",
      "Páginas ilimitadas",
      "E-commerce completo (se aplicável)",
      "Integrações com ERP e CRM",
      "Automação avançada de marketing",
      "Integrações com meios de pagamento",
      "API personalizada (se necessário)",
      "Painel administrativo customizado",
      "SEO avançado com consultoria mensal",
      "Suporte VIP 24/7",
      "Hospedagem premium dedicada",
      "Consultoria estratégica mensal",
      "Treinamento para toda equipe",
      "Conformidade total com LGPD",
      "Garantia de desempenho"
    ],
  },
];

const calculateParcel = (price: number): string => {
  const parcel = price / 12;
  return `R$ ${parcel.toFixed(2).replace(".", ",")}`;
};

function PlanCard({ plan, isHighlighted }: { plan: Plan; isHighlighted: boolean }) {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105
        ${isHighlighted 
          ? 'bg-gradient-to-b from-accentYellow to-pureWhite ring-2 ring-secondaryBlue shadow-secondaryBlue' 
          : 'bg-pureWhite ring-1 ring-neutralGray'
        }`}
    >
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondaryBlue text-pureWhite px-4 py-1 rounded-full text-sm font-medium">
          Mais Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-lg font-semibold ${isHighlighted ? 'text-secondaryBlue' : 'text-primaryBlue'}`}>
          {plan.name}
        </h3>
        <p className="mt-3 text-sm text-neutralGray">{plan.description}</p>
      </div>

      <div className="mt-4">
        {plan.price ? (
          <>
            <p className="flex items-baseline">
              <span className="text-3xl font-bold tracking-tight text-deepBlack">
                R$ {plan.price.toFixed(2).replace(".", ",")}
              </span>
              <span className="ml-1 text-sm font-semibold text-neutralGray">/em até 4X no pix ou cartão</span>
            </p>
            <p className="mt-1 text-sm text-neutralGray">
              + R$ {(plan.price / 14).toFixed(2).replace(".", ",")} mensal para hospedagem e manutenção
            </p>
          </>
        ) : (
          <p className="text-2xl font-bold text-deepBlack">Sob consulta</p>
        )}
      </div>

      <ul className="mt-6 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon className={`h-6 w-5 flex-shrink-0 ${isHighlighted ? 'text-secondaryBlue' : 'text-primaryBlue'}`} />
            <span className="text-sm text-neutralGray">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href={`https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre o plano ${encodeURIComponent(plan.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full px-6 py-3 text-center text-pureWhite font-semibold rounded-lg transition-colors
            ${isHighlighted 
              ? 'bg-secondaryBlue hover:bg-primaryBlue' 
              : 'bg-primaryBlue hover:bg-secondaryBlue'
            }`}
        >
          Falar com Consultor
        </Link>
      </div>
    </div>
  );
}

export default function Precos() {
  return (
    <section id="precos" className="bg-pureWhite px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-deepBlack sm:text-4xl">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="mt-4 text-lg text-neutralGray">
            Comece com o plano Site Essencial e evolua conforme seu negócio cresce
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              isHighlighted={Boolean(plan.isMVP)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
