"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type AnimatedStatProps = {
  value: number;
  isVisible: boolean;
};

const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000;
    const start = 0;
    const end = value;
    const increment = end / (duration / 10);
    let current = start;

    setCount(0);

    const timer = setInterval(() => {
      current += increment;
      setCount(Math.ceil(current));
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <motion.span>{count}+</motion.span>;
};
export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 },
    );
    if (linksRef.current) observer.observe(linksRef.current);
    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Nossos Produtos", href: "#" },
    { name: "Nossos Serviços", href: "#" },
    { name: "Depoimentos de Clientes", href: "#" },
    { name: "Entre em Contato", href: "#" },
  ];

  const stats = [
    { name: "Produtos Disponíveis", value: 6 },
    { name: "Serviços Personalizados", value: 50 },
    { name: "Clientes Satisfeitos", value: 127 },
    { name: "Projetos Concluídos", value: 255 },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* Background Image */}
      <Image
        alt="Background image"
        src="/backgroundhero.gif"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 -z-10 opacity-20" // Reduz a opacidade da imagem para destacar o conteúdo
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Título */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-primaryBlue text-shadow-lg sm:text-7xl">
            Criando Sites para Pequenos Negócios Crescerem
          </h2>
          <p className="mt-8 text-lg font-medium text-deepBlack text-shadow-md">
            Na KiSite, entendemos as necessidades de empreendedores como você.
          </p>
        </div>

        {/* Links */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            ref={linksRef}
            className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-primaryBlue text-shadow-md sm:grid-cols-2 md:flex lg:gap-x-10"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-300 hover:text-accentYellow"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>

          {/* Estatísticas */}
          <dl className="mt-16 grid grid-cols-1 gap-8 text-shadow-md sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base text-neutralGray">{stat.name}</dt>
                <dd className="text-4xl font-bold tracking-tight text-primaryBlue">
                  <AnimatedStat value={stat.value} isVisible={isVisible} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
