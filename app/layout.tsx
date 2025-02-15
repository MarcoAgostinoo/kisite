import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
// import Chatbot from "./components/chatbot/Chatbot"; // Importe o componente Chatbot

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kisite",
  description: "Temos a solução para o seu problema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        {children}
         {/* Adicione o chatbot aqui <Chatbot />*/}
      </body>
    </html>
  );
}