import GridColumTree from "../gridcolumtree/GridColumTree";
import CaroucelHero from "../caroucelHero/CaroucelHero"

export default function HeroHomeContainer() {
  return (
    <div>
      <div
        className="relative"
        style={{
          background: "linear-gradient(#ffffff 50%, #002b55 50%)", // Gradiente: metade superior transparente, metade inferior com a cor #002b55
        }}
      >
        <div className="flex w-full flex-col items-center justify-center gap-10 px-4 align-middle lg:flex-row lg:justify-around lg:px-8 lg:pb-4">
          <div className="bg-softLavender flex h-64 w-4/5 flex-col items-center justify-center rounded-md bg-secondaryBlue p-4 text-center lg:w-1/3">
            <h3 className="text-primary text-xl font-semibold">
              Sites Profissionais
            </h3>
            <p className="text-sm font-semibold text-white">
              Criamos sites modernos e responsivos para pequenos e médios
              negócios, com design exclusivo e otimização de SEO.
            </p>
          </div>
          <div className="bg-softLavender flex h-64 w-4/5 flex-col items-center justify-center rounded-md bg-secondaryBlue p-4 text-center lg:w-1/3">
            <h3 className="text-primary text-xl font-semibold">
              E-commerce Personalizado
            </h3>
            <p className="text-sm font-semibold text-white">
              Desenvolvemos lojas virtuais sob medida, com integração de
              pagamento, automação de marketing e suporte contínuo.
            </p>
          </div>
          <div className="bg-softLavender flex h-64 w-4/5 flex-col items-center justify-center rounded-md bg-secondaryBlue p-4 text-center lg:w-1/3">
            <h3 className="text-primary text-xl font-semibold">
              Manutenção e Suporte
            </h3>
            <p className="text-sm font-semibold text-white">
              Garantimos a segurança e o desempenho do seu site com
              atualizações, backups e suporte especializado.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-primaryBlue  pb-6 pt-12">
        <div>
          <GridColumTree />
          <div className="p-4">
            <h2 className="mt-4 text-center text-3xl font-semibold text-gray-100">
              Soluções Digitais para Alavancar Seu Negócio
            </h2>
          </div>
          <CaroucelHero />
        </div>
      </div>
    </div>
  );
}
