import { Button } from "flowbite-react";
import Image from "next/image";
import {
  MdCloudUpload,
  MdLock,
  MdCloud,
  MdCode,
  MdEdit,
  MdSearch,
  MdAttachFile,
  MdPhone,
  MdWifi,
  MdAnalytics,
  MdSchool,
  MdUpdate,
} from "react-icons/md";

export default function ContentSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-16 lg:overflow-visible lg:px-0">
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
              <p className="text-xl font-semibold text-indigo-600">
                Desenvolvimento Web Personalizado
              </p>
              <h2 className="mt-6 text-pretty text-4xl font-semibold tracking-tight text-gray-900 lg:text-7xl">
                Transformamos Ideias em Sites de Impacto
              </h2>
              <p className="mt-6 text-3xl text-gray-700">
                Com dedicação, criatividade e atenção aos detalhes, entregamos
                sites que destacam a identidade da sua empresa e conectam você
                ao público certo. Trabalhamos lado a lado com nossos clientes
                para garantir resultados incríveis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-transparent sm:ml-0 sm:mt-0 lg:sticky lg:top-4 lg:col-start-2 mr-0 lg:mr-20 lg:row-span-2 lg:row-start-1 lg:mt-10 lg:overflow-hidden">
          <div className="mt-20 flex w-full justify-center">
            <div className="flex h-2/5 w-4/5 flex-col items-center rounded-lg bg-white p-2 text-center shadow-md md:w-3/4 lg:w-2/3 xl:w-1/2">
              <strong className="mb-3 block animate-pulse text-xl font-bold text-primaryBlue md:text-2xl">
                Hospedagem e Manutenção
              </strong>
              <span className="animate-fade-in mb-1 block text-base leading-relaxed text-gray-700">
                Oferecemos serviços de hospedagem confiáveis e suporte contínuo
                para que seu site esteja sempre no ar.
              </span>
            </div>
          </div>
          <Image
            alt="Desenvolvimento Web"
            src="/webinho.png"
            width={330} // Reduzido
            height={330} // Reduzido
            objectFit="cover"
            className="w-full max-w-xl bg-transparent sm:w-full sm:max-w-lg md:max-w-md lg:mt-4 lg:max-w-[24rem]" // Reduzido
            priority
          />
          <button className="animate-slide-in mt-3 transform rounded-md bg-secondaryBlue px-5 py-2 text-sm font-bold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-primaryBlue">
            Saiba Mais
          </button>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-xl text-gray-700 lg:max-w-lg">
              <p>
                Especializados em criar sites modernos, responsivos e
                otimizados, ajudamos empresas a estabelecerem uma presença
                online sólida e atrativa. Nosso foco está em entender suas
                necessidades e entregar soluções que superem expectativas.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <MdAnalytics
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Acompanhamento de Resultados. 
                    </strong>{" "} <br />
                    Monitoramos e analisamos o desempenho do seu site,
                    fornecendo relatórios detalhados para otimizar suas
                    estratégias.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdSchool
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Educação e Capacitação.
                    </strong>{" "} <br />
                    Oferecemos treinamentos e materiais educativos para capacitar
                    você a gerenciar seu próprio site com eficiência.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdUpdate
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Inovação e Atualização Contínua.
                    </strong>{" "} <br />
                    Mantemos seu site atualizado com as últimas tendências e
                    tecnologias, garantindo que você esteja sempre à frente.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdCloud
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Hospedagem e Manutenção.
                    </strong>{" "} <br />
                    Oferecemos serviços de hospedagem confiáveis e suporte
                    contínuo para que seu site esteja sempre no ar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdCode
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Desenvolvimento Personalizado.
                    </strong>{" "} <br />
                    Criamos soluções de websites e e-commerce totalmente
                    customizadas para as necessidades do seu negócio.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdEdit
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Design Responsivo.
                    </strong>{" "} <br />
                    Nossos sites são projetados para se adaptar a qualquer
                    dispositivo, oferecendo uma ótima experiência em desktop e
                    dispositivos móveis.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdCloudUpload
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Desempenho de Alto Nível.
                    </strong>{" "} <br />
                    Sites rápidos e bem otimizados para garantir uma excelente
                    experiência do usuário e melhores posições nos motores de
                    busca.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdSearch
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Otimização para SEO.
                    </strong>{" "} <br />
                    Implementamos técnicas de SEO para melhorar a visibilidade
                    do seu site nos motores de busca e atrair mais visitantes.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdLock
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Segurança Garantida.
                    </strong>{" "} <br />
                    Implementamos certificação SSL e outras medidas para
                    proteger os dados e a confiança dos seus clientes.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdAttachFile
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Integração com Ferramentas.
                    </strong>{" "} <br />
                    Integramos seu site com ferramentas como Google Analytics,
                    WhatsApp e sistemas de pagamento, garantindo maior
                    funcionalidade.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdPhone
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Suporte 24/7.
                    </strong>{" "} <br />
                    Oferecemos suporte técnico contínuo para garantir que seu
                    site esteja sempre em funcionamento e respondendo
                    rapidamente.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MdWifi
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Conectividade Eficiente.
                    </strong>{" "} <br />
                    Garantimos a conectividade do seu site com os principais
                    serviços e plataformas online, maximizando a experiência do
                    usuário.
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
