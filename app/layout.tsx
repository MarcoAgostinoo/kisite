import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react"; // Import the component
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import BannerTop from "./components/bannertop/BannerTop";
import CustomFooter from "./components/footer/CustomFooter";
import Footer from "./components/Footer/Footer";

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
        <BannerTop />
        <NavBar />
        <ThemeModeScript />
        {children}
        <Footer />
      </body>
    </html>
  );
}
