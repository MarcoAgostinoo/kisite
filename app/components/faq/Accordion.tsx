'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion-open" data-accordion="open">
      {accordionData.map((item, index) => (
        <div key={index}>
          <h2 id={`accordion-open-heading-${index + 1}`}>
            <button
              type="button"
              className={`flex w-full items-center justify-between rounded-t-xl border border-b-0 border-gray-200 p-5 font-medium text-gray-500 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-800 rtl:text-right hover:bg-[${item.bgColor}] gap-3 dark:hover:bg-[#3a6ea5]`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-open-body-${index + 1}`}
            >
              <span className="flex items-center">
                <svg
                  className="me-2 h-5 w-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                {item.title}
              </span>
              <svg
                data-accordion-icon
                className={`h-3 w-3 ${activeIndex === index ? "rotate-180" : ""} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                id={`accordion-open-body-${index + 1}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                aria-labelledby={`accordion-open-heading-${index + 1}`}
              >
                <div className="border border-b-0 border-gray-200 p-5 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.content}
                  </p>
                  {item.link && (
                    <p className="text-gray-500 dark:text-gray-400">
                      Confira este guia para aprender como{" "}
                      <a
                        href={item.link}
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        começar
                      </a>{" "}
                      e desenvolver sites ainda mais rápido com componentes
                      sobre o Tailwind CSS.
                    </p>
                  )}
                  {item.list && (
                    <ul className="list-disc ps-5 text-gray-500 dark:text-gray-400">
                      {item.list.map((listItem, idx) => (
                        <li key={idx}>
                          <a
                            href={listItem.link}
                            className="text-blue-600 hover:underline dark:text-blue-500"
                          >
                            {listItem.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

const accordionData = [
  {
    title: "O que é a KiSite?",
    content:
      "A KiSite é uma empresa especializada na criação de sites profissionais, e-commerce personalizado e soluções digitais para ajudar pequenos e médios negócios a crescerem online.",
    link: "/docs/getting-started/introduction/",
    bgColor: "#3a6ea5",
  },
  {
    title: "Quais serviços a KiSite oferece?",
    content:
      "A KiSite oferece serviços como criação de sites personalizados, integração com e-commerce, otimização de SEO, automação de marketing e suporte contínuo para manter seu site sempre atualizado.",
    link: "https://kisite.com/servicos/",
    bgColor: "#f59c42",
  },
  {
    title: "Quais planos estão disponíveis?",
    content:
      "Oferecemos três planos: Básico, Profissional e Enterprise, para atender diferentes necessidades e orçamentos. Cada plano inclui recursos personalizados para atender às demandas de sua empresa.",
    list: [
      { text: "Plano Básico", link: "/planos#basico" },
      { text: "Plano Profissional", link: "/planos#profissional" },
      { text: "Plano Enterprise", link: "/planos#enterprise" },
    ],
    bgColor: "#d1d1d1",
  },
];
