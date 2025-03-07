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
      "Site criado por um programador profissional com Next.js, ultra rápido e com a melhor indexação no Google e demais buscadores, superando sites criados com Wordpress.",
    isMVP: true,
    features: [
      "Site 100% profissional",
      "Início em até 5 dias úteis",
      "Personalização total (cores, imagens, texto) a partir de um de nossos modelos",
      "Design responsivo (desktop, tablet, celular)",
      "Landing page ou até 5 páginas otimizadas",
      "Integração com WhatsApp",
      "3 contas de e-mail profissional",
      "Formulários e botões para gerar leads",
      "Integração com redes sociais",
      "SEO otimizado para Google e Bing",
      "Certificado SSL incluso",
      "Conformidade com LGPD",
      "Design mobile-first",
      "Suporte técnico para manutenção",
    ],
  },
  {
    name: "Funcionalidades Adicionais",
    description:
      "Soluções web com funcionalidades avançadas para o seu negócio: e-commerce, portais de notícias, painéis administrativos personalizados e muito mais.",
    features: [
      "Páginas ilimitadas",
      "Site com posibilidade total de personalização",
      "E-commerce completo (Wordpress ou em Nextjs.)",
      "Blog integrado com painel administrativo para adicionar artigos",
      "Portal de noticiascom painel administrativo para adicionar artigos",
      "Painel administrativo customizado",
      "Automação avançada de marketing",
      "Formulários inteligentes",
      "Integrações com meios de pagamento",
      "API personalizada (se necessário)",
      "Consultoria estratégica mensal",
      "Treinamento para equipe",
      "Conformidade total com LGPD",
      "Design mobile-first",
      "Suporte técnico para manutenção",
    ],
  },
];

function PlanCard({
  plan,
  isHighlighted,
}: {
  plan: Plan;
  isHighlighted: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105 border ${
        isHighlighted
          ? "border-secondaryBlue bg-gradient-to-br from-subtlePurple to-pureWhite"
          : "border-neutralGray/20 bg-gradient-to-br from-pureWhite to-subtlePurple"
      }`}
    >
      {isHighlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondaryBlue px-3 py-1 text-xs font-medium text-pureWhite shadow-md">
          Mais Popular
        </span>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-primaryBlue">{plan.name}</h3>
        <p className="mt-2 text-base text-neutralGray">{plan.description}</p>
      </div>

      <div className="mb-6">
        {plan.price ? (
          <>
            <p className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-deepBlack">
                R$ {plan.price.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-sm text-neutralGray">
                em até 4x no Pix ou cartão
              </span>
            </p>
            <p className="mt-1 text-sm text-neutralGray">
              + R$ {(plan.price / 12).toFixed(2).replace(".", ",")} mensal
              (hospedagem e manutenção)
            </p>
          </>
        ) : (
          <p className="text-3xl font-semibold text-deepBlack">
            Sob Orçamento
          </p>
        )}
      </div>

      <ul className="mb-8 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckIcon
              className="h-5 w-5 flex-shrink-0 text-successGreen"
              aria-hidden="true"
            />
            <span className="text-sm text-neutralGray">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre o plano ${encodeURIComponent(plan.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com consultor sobre o plano ${plan.name}`}
        className={`block w-full rounded-lg py-3 text-center text-sm font-medium text-pureWhite transition-colors ${
          isHighlighted
            ? "bg-secondaryBlue hover:bg-primaryBlue"
            : "bg-primaryBlue hover:bg-secondaryBlue"
        }`}
      >
        Falar com Consultor
      </Link>
    </div>
  );
}

export default function Precos() {
  const essentialPlan = plans.find((p) => p.name === "Site Essencial");
  const additionalPlan = plans.find(
    (p) => p.name === "Funcionalidades Adicionais",
  );

  return (
    <section
      id="precos"
      className="bg-gradient-to-b from-pureWhite to-subtlePurple py-16 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primaryBlue sm:text-4xl">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="mt-3 text-lg text-neutralGray">
            Comece com o Site Essencial e evolua conforme suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {essentialPlan && (
            <PlanCard
              plan={essentialPlan}
              isHighlighted={Boolean(essentialPlan.isMVP)}
            />
          )}

          {/* Middle Column - CTA with sticky positioning */}
          <div className="self-start lg:sticky lg:top-24">
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <Image
                src="/index/precos.png"
                alt="Consultoria personalizada"
                width={128}
                height={128}
                className="mb-6 h-auto w-32 animate-wiggle animate-duration-[1200ms] animate-infinite"
              />
              <h3 className="mb-4 text-2xl font-bold text-primaryBlue">
                Precisa de ajuda para escolher?
              </h3>
              <p className="mb-6 text-neutralGray">
                Nossos consultores estão prontos para entender suas necessidades
                e recomendar a melhor solução para seu negócio.
              </p>
              <Link
                href="https://wa.me/5511919072390?text=Olá! Gostaria de uma consultoria para escolher o melhor plano"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse rounded-lg bg-secondaryBlue px-8 py-4 font-semibold text-pureWhite shadow-md transition-colors hover:bg-primaryBlue"
              >
                Agendar Consultoria Gratuita
              </Link>
            </div>
          </div>


          {additionalPlan && (
            <PlanCard plan={additionalPlan} isHighlighted={false} />
          )}
        </div>
      </div>
    </section>
  );
}