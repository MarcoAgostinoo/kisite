import { Button } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Image from "next/image"; // Importe o componente Image
import styles from "./heroteste.module.css";

const Heroteste = () => {
  return (
    <div
      className={`${styles["hero-container"]} m-4 flex flex-col lg:m-10 lg:flex-row`}
    >
      {/* Lado Esquerdo: Textos */}
      <div className="pr-6 pt-4 lg:w-1/2">
        <p className={`${styles["hero-subtitle"]} text-center`}>
          Atraia mais clientes com um site que reflete a essência da sua marca.
        </p>
        <h2 className={`${styles["hero-title"]} pt-10`}>
          Transforme sua presença digital com design inovador e estratégias
          eficazes.
        </h2>
        <p className={`${styles["hero-text"]} pt-10 text-center`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          repellat maiores odit sunt eum ducimus ipsa illum beatae! Nesciunt
          atque vero assumenda.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 pt-10 sm:flex-row">
          <Button className={styles["hero-button"]}>
            Solicite Seu Orçamento
          </Button>
        </div>
      </div>
      {/* Lado Direito: Carrossel */}
      <div className="mt-0 mr-10 lg:mr-0 lg:mt-12 lg:w-1/2 ">
        <div
          className={`h-56 sm:h-64 xl:h-80 2xl:h-96 ${styles["carousel-3d"]}`}
        >
          <Carousel
          className="shadow-sm"
            pauseOnHover
            leftControl={
              <div className={styles["button-3d"]}>
                <span
                  role="button"
                  className="relative z-10 rounded-full   p-1 text-white shadow-md transition-colors "
                  style={{
                    border: "none",
                    outline: "none",
                  }}
                >
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
                </span>
              </div>
            }
            rightControl={
              <div className={styles["button-3d"]}>
                <span
                  role="button"
                  className="rounded-full  p-1 text-white shadow-md transition-colors"
                >
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
                </span>
              </div>
            }
          >
            <Image
              src="/teste01.jpg"
              alt="Imagem 1"
              width={800}
              height={400}
              className="object-cover w-full h-full rounded-md"
            />
            <Image
              src="/galeria/index01.png"
              alt="Imagem 2"
              width={800}
              height={400}
              className="object-cover w-full h-full rounded-md"
            />
            <Image
              src="/galeria/index02.png"
              alt="Imagem 3"
              width={800}
              height={400}
              className="object-cover w-full h-full rounded-md"
            />
            <Image
              src="/galeria/index03.png"
              alt="Imagem 4"
              width={800}
              height={400}
              className="object-cover w-full h-full rounded-md"
            />
            <Image
              src="/galeria/index04.png"
              alt="Imagem 5"
              width={800}
              height={400}
              className="object-cover w-full h-full rounded-md"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Heroteste;