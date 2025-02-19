'use client';
import { useEffect, useState } from 'react';

export default function BannerTop() {
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade

  useEffect(() => {
    const handleScroll = () => {
      // Se a posição de rolagem vertical for maior que 50px, oculta o banner
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Adiciona o listener de scroll ao montar o componente
    window.addEventListener('scroll', handleScroll);

    // Remove o listener ao desmontar o componente para evitar memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio garante que o useEffect só será executado uma vez

  return (
    isVisible && (
      <div
        className="fixed top-0 left-0 right-0 z-50 hidden sm:block overflow-hidden px-6 py-2.5 sm:px-3.5"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Fundo branco com transparência
      >
        {/* Conteúdo centralizado */}
        <div className="flex justify-center items-center gap-x-4 text-center">
          <p className="text-sm text-gray-900">
            <strong className="font-semibold">Kisite - Agência de Sites e Marketing Digital</strong>
            <span className="mx-2 inline-block size-0.5 bg-current rounded-full" />
            Transforme seu negócio com um site profissional. Oferecemos soluções completas para sua presença online.
          </p>
          <a
            href="#"
            className="rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Solicite um orçamento agora →
          </a>
        </div>
      </div>
    )
  );
}