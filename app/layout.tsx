import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react"; // Import the component
import "./globals.css";

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
      <body className={inter.className}>
        {/* Render ThemeModeScript directly in the body */}
        <ThemeModeScript />
        {children}
      </body>
    </html>
  );
}