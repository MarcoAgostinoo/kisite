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
      { threshold: 0.5 }
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
    { name: "Produtos Disponíveis", value: 100 },
    { name: "Serviços Personalizados", value: 50 },
    { name: "Clientes Satisfeitos", value: 2000 },
    { name: "Projetos Concluídos", value: 1500 },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        alt="Background image"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 -z-10"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Criando Sites para Pequenos Negócios Crescerem
          </h2>
          <p className="mt-8 text-lg font-medium text-gray-300">
            Na KiSite, entendemos as necessidades de empreendedores como você.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            ref={linksRef}
            className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10"
          >
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-indigo-600">
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
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

