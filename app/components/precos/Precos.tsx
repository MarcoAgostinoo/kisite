import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

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
    description:
      "Solução inicial ideal para estabelecer sua presença online com rapidez e qualidade.",
    isMVP: true,
    features: [
      "Início rápido em até 5 dias úteis",
      "Site 100% profissional e responsivo",
      "Landingpage ou Até 5 páginas otimizadas",
      "Integração com WhatsApp",
      "3 contas de email profissional",
      "Formulário de contato integrado",
      "SEO básico otimizado",
      "Certificado SSL de site seguro",
      "Conformidade com a LGPD",
      "Design mobile-first",
      "Suporte técnico para manutenção",
      "Integração com redes sociais",
    ],
  },
  {
    name: "E-commerce & Projetos Especiais",
    description:
      "Soluções personalizadas para e-commerce e projetos complexos.",
    features: [
      "Páginas ilimitadas",
      "E-commerce completo",
      "Blog completo ou integrado em site institucional",
      "Integrações com",
      "Automação avançada de marketing",
      "Formulários inteligentes",
      "Integrações com meios de pagamento",
      "API personalizada (se necessário)",
      "Painel administrativo customizado",
      "Consultoria estratégica mensal",
      "Treinamento para toda equipe",
      "Conformidade total com LGPD",
    ],
  },
];

// Removed unused calculateParcel function

function PlanCard({
  plan,
  isHighlighted,
}: {
  plan: Plan;
  isHighlighted: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105
        ${
          isHighlighted
            ? "animate-border-pulse border-2 border-blue-300 bg-gradient-to-br from-subtlePurple via-subtlePurple to-pureWhite shadow-lg"
            : "border border-neutralGray bg-gradient-to-br from-pureWhite to-subtlePurple"
        }`}
    >
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondaryBlue px-4 py-1 text-sm font-medium text-pureWhite shadow-md">
          Mais Popular
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`text-xl font-bold ${isHighlighted ? "text-primaryBlue" : "text-primaryBlue"}`}
        >
          {plan.name}
        </h3>
        <p className="mt-3 text-base text-neutralGray">{plan.description}</p>
      </div>

      <div className="mt-4">
        {plan.price ? (
          <>
            <p className="flex items-baseline">
              <span className="flex items-baseline text-4xl font-bold tracking-tight text-deepBlack">
                <span className="text-3xl">R$</span>&nbsp;
                {plan.price.toFixed(2).replace(".", ",")}
              </span>
              <span className="ml-1 text-base font-semibold text-neutralGray">
                /em até 4X no pix ou cartão
              </span>
            </p>
            <p className="mt-1 text-base text-neutralGray">
              + R$ {(plan.price / 14).toFixed(2).replace(".", ",")} mensal para
              hospedagem e manutenção
            </p>
          </>
        ) : (
          <p className="text-3xl font-bold text-deepBlack">Sob consulta</p>
        )}
      </div>

      <ul className="mt-6 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon
              className={`h-6 w-5 flex-shrink-0 ${isHighlighted ? "text-successGreen" : "text-secondaryBlue"}`}
            />
            <span className="text-base text-neutralGray">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href={`https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre o plano ${encodeURIComponent(plan.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full rounded-lg px-6 py-3 text-center font-semibold text-pureWhite shadow-md transition-colors
            ${
              isHighlighted
                ? "bg-secondaryBlue hover:bg-primaryBlue"
                : "bg-primaryBlue hover:bg-secondaryBlue"
            }`}
        >
          Falar com Consultor
        </Link>
      </div>
    </div>
  );
}

export default function Precos() {
  const essentialPlan = plans.find((p) => p.name === "Site Essencial");
  const ecommercePlan = plans.find(
    (p) => p.name === "E-commerce & Projetos Especiais",
  );

  return (
    <section id="precos" className="bg-gradient-to-b from-pureWhite to-subtlePurple px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primaryBlue sm:text-4xl">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="mt-4 text-lg text-neutralGray">
            Comece com o plano Site Essencial e evolua conforme seu negócio cresce
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3 relative">
          {/* Left Column - Essential Plan */}
          {essentialPlan && (
            <PlanCard
              plan={essentialPlan}
              isHighlighted={Boolean(essentialPlan.isMVP)}
            />
          )}
          {/* Middle Column - CTA with sticky positioning */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <Image 
                src="/index/precos.png" 
                alt="Consultoria personalizada" 
                width={128}
                height={128}
                className="w-32 h-auto mb-6 animate-wiggle animate-infinite animate-duration-[1200ms]"
              />
              <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                Precisa de ajuda para escolher?
              </h3>
              <p className="text-neutralGray mb-6">
                Nossos consultores estão prontos para entender suas necessidades e recomendar a melhor solução para seu negócio.
              </p>
              <Link
                href="https://wa.me/5511919072390?text=Olá! Gostaria de uma consultoria para escolher o melhor plano"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondaryBlue hover:bg-primaryBlue text-pureWhite font-semibold px-8 py-4 rounded-lg transition-colors shadow-md animate-pulse"
              >
                Agendar Consultoria Gratuita
              </Link>
            </div>
          </div>

          {/* Right Column - E-commerce Plan */}
          {ecommercePlan && (
            <PlanCard
              plan={ecommercePlan}
              isHighlighted={false}
            />
          )}
        </div>
      </div>
    </section>
  );
}
