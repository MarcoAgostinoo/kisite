import {
  CloudArrowUpIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Criação de Sites Profissionais",
    description:
      "Desenvolvemos sites sob medida para empresas de diversos segmentos, com design responsivo e funcionalidade aprimorada. Seja um mecânico, advogado ou lojista, temos a solução ideal para você.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "E-commerce Personalizado",
    description:
      "Oferecemos lojas virtuais completas com integração de sistemas de pagamento e funcionalidades específicas para seu negócio. Expanda suas vendas com uma plataforma otimizada e intuitiva.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Manutenção e Suporte Contínuo",
    description:
      "Garantimos que seu site esteja sempre atualizado, seguro e funcionando corretamente. Nossos planos de manutenção asseguram que seu site continue eficaz e livre de problemas.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Design Personalizado e Responsivo",
    description:
      "Criamos sites que oferecem a melhor experiência de usuário em qualquer dispositivo. Seja no desktop, tablet ou celular, seu site estará sempre visualmente atrativo e funcional.",
    icon: FolderIcon,
  },
];

export default function Products() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">
            Transforme sua Presença Online
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Soluções digitais para alavancar seu negócio
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Na KiSite, criamos sites modernos e responsivos, com foco em resultados reais. Nossa missão é ajudar pequenos e médios negócios a crescerem, se destacarem e conquistarem mais clientes online.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
