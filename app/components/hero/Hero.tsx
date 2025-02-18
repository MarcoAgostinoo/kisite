import { Button } from "flowbite-react";
import Webinhocoracao from "../../components/animações/webinhocoracao/Webinhocoracao";
import Homemdigitando from "../animações/homemdigitando/Homemdigitando";

export default function Hero() {
  return (
    <section className="mt-24 pt-10 relative flex flex-col items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center">
      {/* Overlay para suavizar o background */}
      <div className="absolute inset-0 bg-primaryBlue opacity-80"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-12">
        {/* Elemento opcional, pode ser removido se desejar simplicidade */}

        <p className="text-xl text-accentYellow mb-4 tracking-wide">
          Dê o primeiro passo do seu negócio online.
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-5xl font-extrabold text-pureWhite mb-6 leading-tight">
          Atraia mais clientes com um site que reflete a essência da sua marca.
        </h1>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-secondaryBlue mb-10 font-medium">
          Sites rápidos, responsivos e personalizados para alavancar o seu negócio.
        </h3>

        <Button className="bg-successGreen text-deepBlack hover:bg-secondaryBlue transition-colors duration-300 rounded-full py-3 px-6">
          Solicite Seu Orçamento
        </Button>
      </div>

      {/* Componente animado */}
      <div className="relative z-10 mt-8">
        <Webinhocoracao />
      </div>
    </section>
  );
}
