import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function ContantSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-indigo-600">Soluções de Soldagem e Usinagem</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Inovação e Precisão em Cada Projeto
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                Com quase 25 anos de experiência, a LC Copper é referência em soldagem por resistência e usinagem de materiais ferrosos e não ferrosos para a indústria automotiva. Oferecemos soluções de alta precisão e qualidade, atendendo as principais montadoras do Brasil.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-0 sm:ml-0 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="LC Copper"
            src="/webinho.webp"
            className="w-full max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-gray-700 lg:max-w-lg">
              <p>
                A LC Copper é especializada em fornecer soluções de soldagem e usinagem de alta qualidade. Com 25 anos de experiência, atendemos as necessidades específicas da indústria automotiva, com foco em precisão e inovação. Nossas instalações, com 5000 m², são equipadas com tecnologia de ponta para garantir a excelência dos serviços prestados.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Soldagem de Precisão.</strong> Soluções de soldagem a ponto, projeção, costura e topo a topo para a indústria automotiva.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Materiais e Peças Sob Medida.</strong> Reposição de solda por resistência e usinagem de materiais ferrosos e não ferrosos com máxima qualidade e eficiência.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Equipamentos de Alta Tecnologia.</strong> Nossa infraestrutura de 5000 m² é equipada com máquinas de última geração para garantir serviços de alta precisão.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Estamos comprometidos com a melhoria contínua e com a implementação de normas ISO 9000, garantindo a excelência no atendimento e na qualidade dos nossos produtos e serviços.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Por que escolher a LC Copper?</h2>
              <p className="mt-6">
                A LC Copper oferece soluções personalizadas e inovadoras para as principais montadoras do Brasil. Nossa experiência e compromisso com a qualidade fazem a diferença em cada projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
