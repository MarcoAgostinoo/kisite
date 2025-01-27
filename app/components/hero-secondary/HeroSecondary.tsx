import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";

export default function HeroSecondary() {
  return (
    <div className="flex flex-col items-center justify-around overflow-hidden bg-gradient-to-r from-blue-500 via-gray-200 to-white p-10 text-center lg:h-[600px] lg:flex-row">
      <div
        id="esquerda"
        className="mr-20 flex flex-col w-[100%] items-center justify-center p-10 text-center lg:w-[60%]"
      >
        <div className="w-full text-gray-800 lg:mb-0 lg:pr-20 lg:pl-20">
          <p className="mb-4 text-lg font-semibold text-blue-600">
            Conquiste seu espaço online com a KiSite
          </p>
          <h2 className="mb-6 font-extrabold text-gray-800 lg:text-5xl">
            Transforme sua presença digital com soluções inovadoras e eficazes
          </h2>
          <p className="text-base text-gray-700">
            Na KiSite, ajudamos pequenos e médios negócios a crescerem e se
            destacarem online com designs modernos e experiências únicas.
            Oferecemos serviços personalizados para a criação de sites,
            e-commerce, SEO, automação de marketing, e muito mais.
          </p>
        </div>
        <Link className="mt-4 " href="/" target="_blank">
        <Button gradientMonochrome="success">Entre em Contato</Button>
      </Link>
      </div>

      <div id="direita" className="ml-[5%] hidden w-[35%] sm:block">
        <div className="flex space-x-5">
          {/* Primeira coluna */}
          <div className="mb-20 rotate-45 space-y-6">
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
          </div>

          {/* Segunda coluna */}
          <div className="mb-10 ml-4 rotate-45 space-x-20 space-y-6">
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
          </div>

          {/* Terceira coluna */}
          <div className="rotate-45 space-x-24 space-y-6">
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
                  priority={true}
                />
              </div>
            </Link>
            <Link
              href="#"
              className="block transform transition-transform duration-300 hover:scale-110 hover:space-y-6"
            >
              <div className="h-60 w-60 overflow-hidden bg-gray-300">
                <Image
                  src="/webinho11.webp"
                  alt="Webinho Coração"
                  width={800}
                  height={800}
                  className="-rotate-45 object-contain transition-transform duration-300 hover:scale-110"
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
