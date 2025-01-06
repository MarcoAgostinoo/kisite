import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <section className="mt-24  flex w-full flex-col items-center justify-center px-4 lg:mt-36 text-center sm:px-8">
      <div className="flex items-center space-y-4">
        <p className="max-w-lg text-lg sm:text-xl md:text-2xl">
          Seu negócio online começa aqui. Transforme sua presença digital com um
          site profissional e acessível.
        </p>
      </div>
      <div className="m-5 sm:ml-8 sm:mr-8 md:ml-20 md:mr-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl">
          Conquiste mais clientes com um site que reflete sua marca!
        </h1>
      </div>
      <div className="m-5 sm:ml-8 sm:mr-8 md:ml-20 md:mr-20">
        <h3 className="text-lg sm:text-xl md:text-2xl">
          Soluções personalizadas para pequenas e médias empresas. Sites
          rápidos, responsivos e otimizados para o sucesso.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button color="blue">Solicitar Orçamento</Button>
        <Button outline gradientDuoTone="greenToBlue">
          Conheça Nosso Portfólio
        </Button>
      </div>
    </section>
  );
}
