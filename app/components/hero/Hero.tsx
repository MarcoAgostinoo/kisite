import { Button } from "flowbite-react";
import Webinhocoracao from "../../components/animações/webinhocoracao/Webinhocoracao";
import Homemdigitando from "../animações/homemdigitando/Homemdigitando";

export default function Hero() {
  return (
    <section className="bg mt-24 flex w-full flex-col items-center justify-center bg-[url('/texte.jpg')] bg-cover bg-center bg-no-repeat px-2 text-center sm:px-4 lg:mt-36 lg:flex-row">
      <div className="ml-0 hidden sm:block lg:ml-6">
        <Homemdigitando />
      </div>
      <div className="ml-0 flex flex-col items-center lg:ml-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="max-w-lg text-lg text-blue-600 text-shadow-lg sm:text-xl md:text-2xl">
            Dê o primeiro passo para transformar o seu negócio online.
          </p>
        </div>
        <div className="my-3 sm:mx-6 md:mx-12">
          <h1 className="text-4xl text-yellow-400 text-shadow-lg sm:text-5xl md:text-6xl">
            Atraia mais clientes com um site que reflete a essência da sua
            marca.
          </h1>
        </div>
        <div className="my-3 sm:mx-6 md:mx-12">
          <h3 className="text-lg text-blue-800 text-shadow-lg sm:text-xl md:text-2xl">
            Sites rápidos, responsivos e personalizados para alavancar o seu
            negócio. Conquiste o sucesso digital!
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="bg-blue-800 text-white hover:bg-blue-600">
            Solicite Seu Orçamento
          </Button>
          <Button
            outline
            gradientDuoTone="yellowToGold"
            className="border-yellow-400 text-yellow-400 hover:text-gray-50"
          >
            Descubra Nosso Portfólio
          </Button>
        </div>
      </div>
      <div>
        <Webinhocoracao />
      </div>
    </section>
  );
}
