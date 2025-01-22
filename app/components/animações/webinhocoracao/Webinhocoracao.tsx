'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WebinhoCoracao() {
  return (
    <div>
      <motion.div
        animate={{
          y: [0, -10, 0], // Move para cima e volta
          rotate: [0, 10, -10, 0], // Inclinação para os lados
        }}
        transition={{
          duration: 2, // Tempo total da animação
          repeat: Infinity, // Repetição infinita
          ease: 'easeInOut', // Suavidade nos movimentos
        }}
      >
        <Image
          src="/webinhocoracao.png"
          alt="Webinho Coração"
          width={270}
          height={270}
          className="mr-0 mt-6 lg:mt-0  lg:mr-16 object-contain"
          priority={true}
        />
      </motion.div>
    </div>
  );
}
