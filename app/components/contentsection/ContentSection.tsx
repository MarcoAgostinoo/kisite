import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Accordion from "../faq/Accordion";


export default function ContantSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-indigo-600">
                Desenvolvimento Web Personalizado
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Transformamos Ideias em Sites de Impacto
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                Com dedicação, criatividade e atenção aos detalhes, entregamos
                sites que destacam a identidade da sua empresa e conectam você
                ao público certo. Trabalhamos lado a lado com nossos clientes
                para garantir resultados incríveis.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-12 sm:ml-0 sm:mt-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt="Desenvolvimento Web"
            src="/webinho.png"
            width={412}
            height={412}
            objectFit="cover"
            className="w-full lg:mt-20 max-w-[45rem] sm:w-full sm:max-w-[40rem] md:max-w-[35rem] lg:max-w-[30rem]"
            priority
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-gray-700 lg:max-w-lg">
              <p>
                Especializados em criar sites modernos, responsivos e
                otimizados, ajudamos empresas a estabelecerem uma presença
                online sólida e atrativa. Nosso foco está em entender suas
                necessidades e entregar soluções que superem expectativas.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Desempenho de Alto Nível.
                    </strong>{" "}
                    Sites rápidos e bem otimizados para garantir uma excelente
                    experiência do usuário e melhores posições nos motores de
                    busca.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Segurança Garantida.
                    </strong>{" "}
                    Implementamos certificação SSL e outras medidas para
                    proteger os dados e a confiança dos seus clientes.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Hospedagem e Manutenção.
                    </strong>{" "}
                    Oferecemos serviços de hospedagem confiáveis e suporte
                    contínuo para que seu site esteja sempre no ar.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Utilizamos tecnologias líderes de mercado, como Next.js,
                Tailwind CSS, WordPress e muitas outras, para criar sites que
                são rápidos, modernos e totalmente escaláveis. Essas ferramentas
                permitem não apenas um design impressionante, mas também uma
                performance superior e flexibilidade para futuras atualizações.
                Confie em nossa expertise para transformar sua ideia em um
                projeto digital que gere resultados concretos para o seu
                negócio.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Por que escolher nossos serviços?
              </h2>
              <p className="mt-6">
                Entregamos mais do que sites: criamos experiências que ajudam
                seu negócio a crescer. Cada projeto é tratado com seriedade,
                atenção e compromisso com a excelência.
              </p>
            <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
