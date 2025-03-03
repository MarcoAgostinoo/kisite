import React from "react";

const LeadConversion = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-primaryBlue dark:text-white mb-6">
        Transforme a presença online da sua empresa!
      </h2>
      
      <div className="space-y-6">
        <p className="text-gray-700 dark:text-gray-300">
          Oferecemos soluções personalizadas para empresas que desejam{' '}
          <span className="font-semibold text-primaryBlue">
            se destacar no mercado digital
          </span>
          . Com{' '}
          <span className="font-semibold text-primaryBlue">
            designs responsivos, carregamento ágil e foco em conversão
          </span>
          , criamos sites, landing pages e e-commerces que não apenas impressionam, mas também geram resultados.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          Atendemos diversos setores, como{' '}
          <span className="font-semibold text-primaryBlue">
            advocacia, clínicas de estética e consultórios odontológicos
          </span>
          , com{' '}
          <span className="font-semibold text-green-600">
            pacotes acessíveis que cabem no seu orçamento
          </span>
          .
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          Seja para{' '}
          <span className="font-semibold text-primaryBlue">
            atrair novos clientes
          </span>{' '}
          ou{' '}
          <span className="font-semibold text-primaryBlue">
            fortalecer sua marca
          </span>
          , temos o plano ideal para você!
        </p>

        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-8">
          <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
            Não perca mais tempo com sites ultrapassados ou ineficientes!
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Nossa equipe está pronta para entender suas necessidades e oferecer uma{' '}
            <span className="font-semibold text-primaryBlue">
              solução sob medida para o seu negócio
            </span>
            . Garanta já sua vaga e leve sua empresa para o próximo nível com um site que realmente faz a diferença!
          </p>
        </div>

        <a
          href="https://wa.me/SEU_NUMERO_DE_WHATSAPP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-4 bg-green-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
        >
          Fale Agora com um Especialista
        </a>
      </div>
    </div>
  );
};

export default LeadConversion;