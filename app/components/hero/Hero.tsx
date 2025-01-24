import { Button } from "flowbite-react";
import Webinhocoracao from "../../components/animações/webinhocoracao/Webinhocoracao";
import Homemdigitando from "../animações/homemdigitando/Homemdigitando";

export default function Hero() {
  return (
    <section className="bg mt-24 flex w-full flex-col items-center justify-center  bg-cover bg-center bg-no-repeat px-2 text-center sm:px-4 lg:mt-36 lg:flex-row">
      <div className="ml-0 hidden sm:block lg:ml-16">
        <Homemdigitando />
      </div>
      <div className="ml-0 flex flex-col items-center lg:ml-2">
        <div className="flex flex-col items-center space-y-2">
          <p className="animate-pulse animate-infinite text-shadow-amber max-w-lg lg:mb-10 mb-0 text-lg text-yellow-400 text-shadow-lg sm:text-xl md:text-2xl">
            Dê o primeiro passo do seu negócio online.
          </p>
        </div>
        <div className="my-1 sm:mx-2 md:mx-3">
          <h1 className="antialiased animate-flip-up animate-once animate-ease-linear animate-normal animate-fill-forwards text-4xl text-black-800 font-bold text-shadow-lg sm:text-5xl md:text-6xl">
            Atraia mais clientes com um site que reflete a essência da sua
            marca.
          </h1>
        </div>
        <div className="my-1 sm:mx-2 md:mx-3">
          <h3 className="animate-flip-up animate-once animate-ease-linear animate-normal animate-fill-forwards text-lg  text-blue-800 text-shadow-lg sm:text-xl md:text-2xl">
            Sites rápidos, responsivos e personalizados para alavancar o seu
            negócio. Conquiste o sucesso digital!
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <Button className="bg-blue-600 text-white hover:bg-blue-500">
            Solicite Seu Orçamento
          </Button>
        </div>
      </div>
      <div className="mr-0 lg:mr-16">
        <Webinhocoracao />
      </div>
    </section>
  );
}
