import React from "react";

const LeadConversion = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-primaryBlue dark:text-white mb-4">
        Transforme seu Negócio Digital
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Em um mercado onde 84% das decisões de compra começam com uma pesquisa online, ter uma presença digital profissional não é mais uma opção, mas uma necessidade absoluta para sobrevivência.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        A Kisite atua como sua parceira estratégica, oferecendo soluções completas em desenvolvimento web moderno e responsivo, SEO otimizado e gestão eficiente de tráfego pago.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Com pacotes que unem agilidade e resultados mensuráveis, ajudamos você a se destacar da concorrência e conquistar mais clientes.
      </p>
      <a
        href="https://wa.me/SEU_NUMERO_DE_WHATSAPP"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
      >
        Fale Conosco no WhatsApp
      </a>
    </div>
  );
};

export default LeadConversion;