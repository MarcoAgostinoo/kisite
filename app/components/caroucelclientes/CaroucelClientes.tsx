import { Carousel } from "flowbite-react";

export default function CaroucelClientes() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row h-56 w-full items-center gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <div>
          <div className="flex items-center justify-start p-4 text-left text-white bg-blue-600 rounded-md">
            <div>
              <h1 className="text-3xl font-semibold">Transforme seu negócio com a KiSite</h1>
              <p className="mt-2 text-xl">
                Ajudamos empresas a crescerem online com soluções digitais inovadoras.
              </p>
            </div>
          </div>
        </div>
        
        {/* Seção de imagens no Carousel */}
        <Carousel className="w-full">
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Imagem 1"
            className="object-cover w-full h-full rounded-md"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Imagem 2"
            className="object-cover w-full h-full rounded-md"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="Imagem 3"
            className="object-cover w-full h-full rounded-md"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="Imagem 4"
            className="object-cover w-full h-full rounded-md"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="Imagem 5"
            className="object-cover w-full h-full rounded-md"
          />
        </Carousel>
      </div>
    </div>
  );
}
