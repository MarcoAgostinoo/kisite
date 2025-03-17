import { Button } from "flowbite-react";
import Image from "next/image";
import {
  MdCloud,
  MdCode,
  MdEdit,
  MdAnalytics,
  MdSchool,
  MdUpdate,
} from "react-icons/md";

export default function ContentSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-16 lg:overflow-visible lg:px-0">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Introdução Disruptiva */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-xl font-semibold text-indigo-600">
                Seu Negócio no Digital
              </p>
              <h2 className="mt-6 text-pretty text-4xl font-semibold tracking-tight text-gray-900 lg:text-7xl">
                Pare de Perder Clientes e Comece a Vender Mais
              </h2>
              <p className="mt-6 text-3xl text-gray-700">
                76% das pequenas empresas brasileiras estão deixando dinheiro na mesa por não terem um site profissional ou atendimento ágil. Nós mudamos isso com um site que vende em 5 dias e um chatbot que trabalha 24/7.
              </p>
            </div>
          </div>
        </div>
        {/* Seção de Imagem e CTA */}
        <div className="flex flex-col items-center bg-transparent sm:ml-0 sm:mt-0 lg:sticky lg:top-8 lg:col-start-2 mr-0 lg:mr-20 lg:row-span-2 lg:row-start-1 lg:mt-10 lg:overflow-hidden">
          <div className="mt-20 flex w-full justify-center">
            <div className="flex h-2/5 w-4/5 flex-col items-center rounded-lg bg-white p-2 text-center shadow-md md:w-3/4 lg:w-2/3 xl:w-1/2">
              <strong className="mb-3 block animate-pulse text-xl font-bold text-primaryBlue md:text-2xl">
                Seu Negócio Online.
              </strong>
              <span className="animate-fade-in mb-1 block text-base leading-relaxed text-gray-700">
                Site para aparecer no google, agente de I.A ou os dois.
              </span>
            </div>
          </div>
          <Image
            alt="Site inovador para seu negócio"
            src="/webinho.png"
            width={300}
            height={300}
            objectFit="cover"
            className="w-full max-w-xl bg-transparent sm:w-full sm:max-w-lg md:max-w-md lg:mt-4 lg:max-w-[24rem] animate-wiggle-more animate-infinite animate-duration-[2000ms] animate-ease-in-out"
            priority
          />
          <a
            href="https://wa.me/5511919072390?text=Olá! Gostaria de saber como destravar o potencial do meu negócio"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-slide-in mt-3 transform rounded-md bg-secondaryBlue px-5 py-2 text-sm font-bold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-successGreen"
          >
            Destrave Seu Potencial Agora
          </a>
        </div>
        {/* Processo Cronológico para Converter */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-xl text-gray-700 lg:max-w-lg">
              <p className="mb-6">
                Nosso processo é simples, rápido e feito para colocar seu negócio no mapa digital. Veja como transformamos sua presença online em uma máquina de vendas.
              </p>
              <ul role="list" className="space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <MdAnalytics
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      1. Raio-X do Seu Negócio.
                    </strong>{" "}
                    Mapeamos o que seu público quer e como te destacar no mercado brasileiro.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdSchool
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      2. Plano de Ataque Digital.
                    </strong>{" "}
                    Desenhamos uma estratégia matadora para seu site brilhar e vender mais.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdUpdate
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      3. Site Pronto pra Vender.
                    </strong>{" "}
                    Em 5 dias, entregamos um site que impressiona no celular e no Google.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdCloud
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      4. Topo do Google.
                    </strong>{" "}
                    Colocamos você na frente com SEO profissional, para que dependa menos de anúncios caros.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdCode
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      5. Tudo Conectado.
                    </strong>{" "}
                    Seu site + WhatsApp + chatbot = mais leads e vendas no piloto automático.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdEdit
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong id="precos" className="font-semibold text-gray-900">
                      6. Lucro Sem Parar.
                    </strong>{" "}
                    Acompanhamos e otimizamos tudo para seu negócio decolar de vez.
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-xl text-gray-700">
                Invista uma vez e lucre sempre: site por R$897, chatbot por R$447 ou a dupla imbatível por um preço especial. Mais de 120 empresas já escolheram crescer com a gente!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}