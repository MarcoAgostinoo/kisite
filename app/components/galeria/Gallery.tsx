"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      phrase: "A beleza das montanhas nos inspira a criar projetos grandiosos.",
      phrase2: "Site para a empresa:",
      url: "/",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      phrase: "Cada nascer do sol é uma oportunidade de inovar e transformar.",
      phrase2: "Site para a empresa:",
      url: "/",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      phrase:
        "Inspirados pela natureza, criamos soluções que conectam pessoas e ambientes.",
      phrase2: "Site para a empresa:",
      url: "/",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      phrase:
        "A serenidade de um lago reflete a harmonia que buscamos em nossos projetos.",
      phrase2: "Site para a empresa:",
      url: "/",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      phrase:
        "Caminhos floridos simbolizam o crescimento sustentável que promovemos.",
      phrase2: "Site para a empresa:",
      url: "/",
    },
  ];

  const [active, setActive] = useState(data[0]);

  return (
    <div id="portifolio" className="lg:m-16 px-4 py-8 lg:px-12">
      {/* Seção de introdução */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Bem-vindo ao nosso Portfólio
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore nossa coleção de projetos que refletem paixão, criatividade e
          inovação. Cada imagem conta uma história e inspira soluções únicas.
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
        >
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">
            {active.phrase2}
          </h2>
          <p className="mb-4 text-lg text-gray-700">{active.phrase}</p>
          <a
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600"
          >
            Confira nosso trabalho
          </a>
        </motion.div>

        {/* Imagem em destaque com animação */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.imgelink}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={active.imgelink}
                alt="Imagem destacada"
                layout="responsive"
                width={1070}
                height={680}
                className="rounded-lg object-cover object-center shadow-lg"
              />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Miniaturas interativas */}
      <div className="mt-2 grid grid-cols-5 gap-1">
        {data.map(({ imgelink, phrase, url }, index) => (
          <motion.div
            key={index}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setActive(data[index])}
          >
            <Image
              src={imgelink}
              alt={`Miniatura ${index + 1}`}
              layout="responsive"
              width={200}
              height={200}
              className="rounded-md object-cover object-center"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
