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
                Revolução Digital no Brasil
              </p>
              <h2 className="mt-6 text-pretty text-4xl font-semibold tracking-tight text-gray-900 lg:text-7xl">
                Seu Site é a Chave para Dominar o Mercado
              </h2>
              <p className="mt-6 text-3xl text-gray-700">
                Em um cenário competitivo, sua presença online é seu maior trunfo. Nós
                criamos sites disruptivos, otimizados para SEO e focados no mercado brasileiro,
                para que você conquiste o Google e os clientes certos.
              </p>
            </div>
          </div>
        </div>
        {/* Seção de Imagem e CTA */}
        <div className="flex flex-col items-center bg-transparent sm:ml-0 sm:mt-0 lg:sticky lg:top-4 lg:col-start-2 mr-0 lg:mr-20 lg:row-span-2 lg:row-start-1 lg:mt-10 lg:overflow-hidden">
          <div className="mt-20 flex w-full justify-center">
            <div className="flex h-2/5 w-4/5 flex-col items-center rounded-lg bg-white p-2 text-center shadow-md md:w-3/4 lg:w-2/3 xl:w-1/2">
              <strong className="mb-3 block animate-pulse text-xl font-bold text-primaryBlue md:text-2xl">
                Transforme Seu Negócio Agora
              </strong>
              <span className="animate-fade-in mb-1 block text-base leading-relaxed text-gray-700">
                Hospedagem, manutenção e suporte premium para impulsionar seu site nas buscas.
              </span>
            </div>
          </div>
          <Image
            alt="Site inovador para seu negócio"
            src="/webinho.png"
            width={330}
            height={330}
            objectFit="cover"
            className="w-full max-w-xl bg-transparent sm:w-full sm:max-w-lg md:max-w-md lg:mt-4 lg:max-w-[24rem] animate-wiggle-more animate-infinite animate-duration-[2000ms] animate-ease-in-out"
            priority
          />
          <button className="animate-slide-in mt-3 transform rounded-md bg-secondaryBlue px-5 py-2 text-sm font-bold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-successGreen">
            Fale Conosco e Inove
          </button>
        </div>
        {/* Processo Cronológico para Converter */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-xl text-gray-700 lg:max-w-lg">
              <p className="mb-6">
                Siga nosso método comprovado para transformar sua presença digital. Cada etapa é
                desenhada para maximizar visibilidade, engajamento e conversões – tudo com foco no
                mercado brasileiro.
              </p>
              <ul role="list" className="space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <MdAnalytics
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      1. Diagnóstico Estratégico.
                    </strong>{" "}
                    Analisamos o mercado e identificamos oportunidades para posicionar seu site no
                    topo do Google.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdSchool
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      2. Planejamento Inovador.
                    </strong>{" "}
                    Traçamos uma estratégia digital personalizada, alinhando tendências e dados
                    reais do mercado brasileiro.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdUpdate
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      3. Desenvolvimento Ágil.
                    </strong>{" "}
                    Criamos um site responsivo e impactante, pronto para converter visitantes em
                    clientes – tudo em tempo recorde.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdCloud
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      4. SEO e Performance.
                    </strong>{" "}
                    Aplicamos técnicas avançadas de SEO para garantir que seu site domine os
                    resultados do Google e outros buscadores.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdCode
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      5. Integração Total.
                    </strong>{" "}
                    Conectamos seu site às melhores ferramentas e redes sociais para ampliar seu
                    alcance digital.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdEdit
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      6. Suporte e Crescimento.
                    </strong>{" "}
                    Monitoramos seu site 24/7 e ajustamos a estratégia para garantir um crescimento
                    contínuo e sustentável.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
