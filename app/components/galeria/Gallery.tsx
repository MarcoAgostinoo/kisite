"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Adicione esta importação
import { motion, AnimatePresence } from "framer-motion";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Gallery() {
  const data = [
    {
      imgelink: "/galeria/index01.png",
      phrase: "LcCopper Metalurgica eirelli",
      phrase2: "Projeto Desenvolvido para:",
      url: "https://www.lccopper.com/",
    },
    {
      imgelink: "/galeria/index02.png",
      phrase: "Garagem Oficina",
      phrase2: "Site para a empresa:",
      url: "https://marcoagostinoo.github.io/garagemoficina/",
    },
    {
      imgelink: "/galeria/index03.png",
      phrase: "Concursos Agora",
      phrase2: "Site para a empresa:",
      url: "https://www.concursosagora.com.br/",
    },
    {
      imgelink: "/galeria/index04.png",
      phrase: "Delicias da Deda",
      phrase2: "Site para a empresa:",
      url: "https://marcoagostinoo.github.io/deliciasdaguega/",
    },
    {
      imgelink: "/galeria/index05.png",
      phrase: "Modelo de Ecomerce",
      phrase2: "Site para a empresa:",
      url: "https://marcoagostinoo.github.io/ecomerce-template/",
    },
  ];

  const [active, setActive] = useState(data[0]);

  return (
    <div id="portifolio" className="bg-primaryBlue px-4 py-8 lg:px-12">
      {/* Seção de introdução */}
      <div className="mb-8 mt-12 text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
          Nossos Projetos em Destaque
        </h2>
        <p className="mt-4 text-xl text-blue-100 font-light">
          Descubra como transformamos ideias em experiências digitais memoráveis. 
          Cada projeto é uma história de inovação e excelência.
        </p>
      </div>

      {/* Destaque principal */}
      <div className="grid items-center gap-8 lg:mx-16 lg:grid-cols-2 lg:gap-12">
        {/* Texto descritivo com animação */}
        <motion.div
          key={active.phrase}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-sm bg-white/10 p-6 rounded-md"
        >
          <h2 className="mb-2 text-3xl font-semibold text-blue-200">
            {active.phrase2}
          </h2>
          <p className="mb-4 text-lg text-blue-100">{active.phrase}</p>
          <Link
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-3 text-white font-medium shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
          >
            Visualizar Projeto
          </Link>
        </motion.div>

        {/* Imagem em destaque com animação */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.imgelink}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative group cursor-pointer"
            onClick={() => window.open(active.url, '_blank', 'noopener,noreferrer')}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#002b59]/50 to-transparent rounded-lg group-hover:from-[#002b59]/60 transition-all duration-300"></div>
            <Image
              src={active.imgelink}
              alt="Imagem destacada"
              layout="responsive"
              width={1070}
              height={680}
              className="rounded-md object-cover object-center shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Miniaturas interativas com Splide */}
      <div className="mt-12">
        <Splide
          options={{
            perPage: 5,
            gap: '1rem',
            pagination: false,
            type: 'loop', // Adiciona o comportamento de loop
            rewind: true, // Permite voltar ao início
            autoplay: true, // Habilita autoplay
            interval: 4000, // Intervalo de 4 segundos entre slides
            pauseOnHover: true, // Pausa no hover
            arrows: true, // Mostra as setas de navegação
            breakpoints: {
              640: {
                perPage: 2,
              },
              768: {
                perPage: 3,
              },
              1024: {
                perPage: 4,
              },
            },
          }}
        >
          {data.map((item, index) => (
            <SplideSlide key={index}>
              <motion.div
                className="cursor-pointer transition-all duration-300 hover:scale-105 relative group"
                onClick={() => setActive(item)}
              >
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors duration-300 rounded-md"></div>
                <Image
                  src={item.imgelink}
                  alt={item.phrase}
                  layout="responsive"
                  width={200}
                  height={200}
                  className="rounded-md object-cover object-center shadow-md group-hover:shadow-blue-400/30"
                />
              </motion.div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
