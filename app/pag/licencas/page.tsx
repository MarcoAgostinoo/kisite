import React from "react";
import SplideCarousel from "@/app/components/caroucelanimated/Caroucelanimated";

const Licencas = () => {
  const imageUrls = [
    '/images/react-license.png',    // Imagem da licença do React
    '/images/nextjs-license.png',   // Imagem da licença do Next.js
    '/images/tailwind-license.png', // Imagem da licença do Tailwind
    '/images/flowbite-license.png', // Imagem da licença do Flowbite
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen pt-56">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
            Licenças e Tecnologias
          </h1>
          
          <div className="mb-12">
            <SplideCarousel imageUrls={imageUrls} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Bibliotecas Utilizadas
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
                  <li>React - Licença MIT</li>
                  <li>Next.js - Licença MIT</li>
                  <li>Tailwind CSS - Licença MIT</li>
                  <li>Flowbite - Licença MIT</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Termos de Uso
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  O uso deste projeto está sujeito aos termos das licenças das bibliotecas utilizadas. 
                  Certifique-se de ler e entender os termos de cada licença antes de utilizar o projeto.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contato
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Se você tiver alguma dúvida sobre as licenças ou o uso deste projeto, 
                  entre em contato conosco através do e-mail: 
                  <a href="mailto:contato@kisite.com.br" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                    contato@kisite.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licencas;