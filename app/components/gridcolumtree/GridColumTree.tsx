import Image from "next/image";

export default function GridColumTree() {
  return (
    <div className=" py-4 sm:py-4">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-white">
          Transforme sua Presença Online
        </h2>
        <p className="text-white mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Soluções Digitais para Alavancar Seu Negócio
        </p>
        <div className="mt-10 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2  ">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem]">
              <div className="px-8 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="text-gray-950 max-lg:text-center mt-2 text-lg font-medium tracking-tight">
                  Design Responsivo
                </p>
                <p className="max-lg:text-center mt-2 max-w-lg text-sm/6 text-gray-600">
                  Criamos sites que se adaptam perfeitamente a qualquer
                  dispositivo, garantindo uma experiência impecável para seus
                  clientes.
                </p>
              </div>
              <div className="relative h-96 bg-transparent w-full grow sm:mt-4 lg:min-h-[30rem] lg:max-w-sm">
                <Image
                  className="object-cover ml-1 mb-2"
                  src="/smarthphone.png"
                  alt="Celular exibindo um site responsivo"
                  layout="fill"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          <div className="relative">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-gray-950 max-lg:text-center mt-2 text-lg font-medium tracking-tight">
                  Otimização de SEO
                </p>
                <p className="max-lg:text-center mt-2 max-w-lg text-sm/6 text-gray-600">
                  Potencialize sua visibilidade online e alcance mais clientes
                  com estratégias avançadas de SEO.
                </p>
              </div>
              <div className="relative h-64 w-full grow lg:h-auto">
                <Image
                  src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                  className="p-2"
                  alt="Gráficos de desempenho SEO"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          <div className="relative lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-gray-950 max-lg:text-center mt-2 text-lg font-medium tracking-tight">
                  Suporte Contínuo
                </p>
                <p className="max-lg:text-center mt-2 max-w-lg text-sm/6 text-gray-600">
                  Conte com nossa equipe para manter seu site sempre atualizado,
                  seguro e funcional.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center py-6 lg:pb-2">
                <div className="relative h-[min(152px,40cqw)] w-full">
                  <Image
                    className="object-cover"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                    alt="Ilustração de suporte técnico"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-r-[2rem]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="text-gray-950 max-lg:text-center mt-2 text-lg font-medium tracking-tight">
                  Integrações Avançadas
                </p>
                <p className="max-lg:text-center mt-2 max-w-lg text-sm/6 text-gray-600">
                  Integramos ferramentas como WhatsApp, Google Analytics e
                  automação de marketing para maximizar seu potencial online.
                </p>
              </div>
              <div className="relative h-64 w-full grow lg:min-h-[30rem]">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-100/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        Integrações.js
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        App.js
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    {/* Exemplo de código pode ser adicionado aqui */}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
