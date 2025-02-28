import { Button } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import styles from "./CaroucelHero.module.css";

const CaroucelHero = () => {
  return (
    <div>
      <h2>title Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ullam dolorum sed recusandae, repudiandae veniam, eveniet, accusantium commodi voluptate possimus corrupti pariatur velit quae rerum quisquam laborum saepe. Laudantium, quisquam!</h2>
      <div className="m-4 flex flex-col lg:m-10 lg:flex-row">
        {/* Lado Esquerdo: Textos */}
        <div className="pr-6 pt-4 lg:w-1/2">
          <p className="text-center text-lg font-medium text-white">
            Atraia mais clientes com um site que reflete a essência da sua
            marca.
          </p>
          <h2 className="pt-10 text-4xl font-extrabold text-white">
            Transforme sua presença digital com design inovador e estratégias
            eficazes.
          </h2>
          <p className="pt-10 text-center text-base text-neutralGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            repellat maiores odit sunt eum ducimus ipsa illum beatae! Nesciunt
            atque vero assumenda.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 pt-10 sm:flex-row">
            <Button className="bg-gradient-to-r from-secondaryBlue to-secondaryBlue font-medium text-secondaryBlue shadow-lg hover:from-blue-600 hover:to-secondaryBlue">
              Solicite Seu Orçamento
            </Button>
          </div>
        </div>
        {/* Lado Direito: Carrossel */}
        <div className="mt-6 w-full lg:mt-10 lg:w-1/2">
          <div
            className={`mr-4 h-56 sm:h-64 lg:mr-8 xl:h-80 2xl:h-96 ${styles["carousel-3d"]}`}
          >
            <Carousel
              className="shadow-lg"
              pauseOnHover
              leftControl={
                <div className="relative z-10 mr-6 rounded-full  bg-black bg-opacity-50 p-0 pr-6 text-white shadow-md transition-colors hover:bg-opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              }
              rightControl={
                <div className="relative z-10 rounded-full bg-black bg-opacity-50 p-1 text-white shadow-md transition-colors hover:bg-opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              }
            >
              <Image
                src="/teste01.jpg"
                alt="Imagem 1"
                width={800}
                height={400}
                className="h-full w-full rounded-md object-cover"
              />
              <Image
                src="/galeria/index01.png"
                alt="Imagem 2"
                width={800}
                height={400}
                className="h-full w-full rounded-md object-cover"
              />
              <Image
                src="/galeria/index02.png"
                alt="Imagem 3"
                width={800}
                height={400}
                className="h-full w-full rounded-md object-cover"
              />
              <Image
                src="/galeria/index03.png"
                alt="Imagem 4"
                width={800}
                height={400}
                className="h-full w-full rounded-md object-cover"
              />
              <Image
                src="/galeria/index04.png"
                alt="Imagem 5"
                width={800}
                height={400}
                className="h-full w-full rounded-md object-cover"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaroucelHero;
