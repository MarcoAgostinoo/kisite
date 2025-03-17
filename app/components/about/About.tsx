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

  return <motion.span>+{count}</motion.span>;
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (linksRef.current) observer.observe(linksRef.current);
    return () => observer.disconnect();
  }, []);

  // Estatísticas atualizadas com explicações
  const stats = [
    {
      name: "R$ Bilhões de Faturamento do E-commerce em 2025",
      value: 234,
      explanation: "Um site profissional muda o jogo.",
    },
    {
      name: "Milhões de Consumidores Online em 2025",
      value: 94,
      explanation: "Esteja onde seus clientes estão.",
    },
    {
      name: "Milhões de Pedidos Online em 2025",
      value: 435,
      explanation: "Automatize vendas com um Agente de I.A.",
    },
    {
      name: "Milhões de Usuários de Internet no Brasil",
      value: 150,
      explanation: "Chegue ao topo do Google.",
    },
  ];

  const links = [
    { 
      name: "Site Profissional em 7 dias", 
      href: "https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre o site profissional em 7 dias" 
    },
    { 
      name: "Agente Inteligente 24/7", 
      href: "https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre o Agente inteligente" 
    },
    { 
      name: "SEO para o Topo do Google", 
      href: "https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre SEO" 
    },
    { 
      name: "Integração com WhatsApp", 
      href: "https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre a integração com WhatsApp" 
    },
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
        className="absolute inset-0 -z-10 opacity-20"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Título */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-primaryBlue text-shadow-lg sm:text-7xl">
            Seu Negócio Está Perdendo Clientes? Aproveite o Boom Digital Agora!
          </h2>
          <p className="mt-8 text-lg font-medium text-deepBlack text-shadow-md">
            O e-commerce no Brasil vai faturar R$234 bilhões em 2025, e 94 milhões de consumidores estão online agora. Sem um site profissional e um Agente de I.a, seu negócio está ficando para trás.
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
                className="transition-colors duration-300 hover:text-successGreen"
              >
                {link.name} <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <dl className="mt-16 grid grid-cols-1 gap-8 text-shadow-md sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse gap-1">
              <dt className="text-base text-neutralGray">{stat.name}</dt>
              <dd className="text-4xl font-bold tracking-tight text-primaryBlue">
                <AnimatedStat value={stat.value} isVisible={isVisible} />
              </dd>
              <dt className="text-sm text-neutralGray">{stat.explanation}</dt>
            </div>
          ))}
        </dl>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5511919072390?text=Olá! Gostaria de transformar meu negócio digitalmente"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-secondaryBlue px-8 py-4 text-lg font-bold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-successGreen"
          >
            Não Espere Mais – Transforme Seu Negócio Hoje!
          </a>
        </div>
      </div>
    </div>
  );
}