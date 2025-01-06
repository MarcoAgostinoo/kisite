import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <section className="mt-24 flex w-full flex-col items-center justify-center px-4 text-center bg-[url('/texte.jpg')] bg-cover bg-center bg-no-repeat sm:px-8 lg:mt-36">
      <div className="space-y-4">
        <p className="max-w-lg text-lg text-shadow-lg sm:text-xl md:text-2xl">
          Seu negócio online começa aqui. Transforme sua presença digital com um
          site profissional e acessível.
        </p>
      </div>
      <div className="m-5 md:mx-20 sm:mx-8">
        <h1 className="text-4xl text-shadow-lg sm:text-5xl md:text-6xl">
          Conquiste mais clientes com um site que reflete sua marca!
        </h1>
      </div>
      <div className="m-5 md:mx-20 sm:mx-8">
        <h3 className="text-lg text-shadow-lg sm:text-xl md:text-2xl">
          Soluções personalizadas para pequenas e médias empresas. Sites rápidos,
          responsivos e otimizados para o sucesso.
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
