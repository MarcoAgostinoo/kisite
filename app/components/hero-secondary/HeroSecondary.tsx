import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";


export default function HeroSecondary() {
  return (
    <div className="flex flex-col items-center justify-around overflow-hidden bg-gradient-to-r from-primaryBlue via-secondaryBlue to-primaryBlue p-4 md:p-10 text-center lg:h-[660px] lg:flex-row">
      <div
        id="esquerda"
        className="mr-0 lg:mr-20 flex w-full flex-col items-center justify-center p-4 md:p-10 text-center lg:w-3/5"
      >
        {/* Título Principal */}
        <h2 className="mb-8 text-center text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Conquiste seu espaço online com a KiSite
        </h2>

        {/* Subtítulo */}
        <p className="mb-8 text-center text-lg md:text-xl font-medium text-white drop-shadow-md">
          Transforme sua presença digital com soluções inovadoras e eficazes
        </p>

        {/* Descrição */}
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm md:text-base font-normal text-white drop-shadow-sm">
          Na KiSite, ajudamos pequenos e médios negócios a crescerem e se destacarem online com designs modernos e experiências únicas. Oferecemos serviços personalizados para a criação de sites, e-commerce, SEO, automação de marketing e muito mais.
        </p>

        {/* Botão de Chamada para Ação */}
        <div className="flex justify-center">
          <Link href="/contato">
            <Button className="rounded-md bg-secondaryBlue px-6 py-3 font-bold text-white shadow-md transition-all duration-300 hover:bg-successGreen">
              Entre em Contato
            </Button>
          </Link>
        </div>
      </div>

      <div id="direita" className="ml-[5%] hidden w-[35%] sm:block">
        <div className="flex space-x-5">
          {/* Primeira coluna */}
          <div className="mb-20 rotate-45 space-y-6">
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.4] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
          </div>

          {/* Segunda coluna */}
          <div className="mb-10 ml-4 rotate-45 space-x-20 space-y-6">
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
          </div>

          {/* Terceira coluna */}
          <div className="rotate-45 space-x-24 space-y-6">
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-180"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110"
            >
              <div className="h-60 w-60 overflow-hidden">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 scale-[1.42] object-cover transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
