import withMT from "@material-tailwind/react/utils/withMT";
import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const baseConfig: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      aspectRatio: {
        "577/310": "577 / 310", // Adicionando a proporção personalizada
      },
      colors: { myCustomBlue: "#002d52" },
      textShadow: {
        sm: "1px 1px 2px rgba(255, 255, 255, 0.6)", // Pequeno: Sombra clara
        md: "2px 2px 4px rgba(255, 255, 255, 0.5)", // Médio: Sombra mais intensa
        lg: "3px 3px 6px rgba(255, 255, 255, 0.4)", // Grande: Sombra suave
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function (pluginApi: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      const { addUtilities } = pluginApi;
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(255, 255, 255, 0.6)", // Sombra leve
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)", // Sombra média
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(255, 255, 255, 0.8)", // Sombra grande e suave
        },
      });
    },
  ],
};

const config = withMT(baseConfig);

export default config;
