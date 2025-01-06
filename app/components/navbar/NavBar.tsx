"use client";
import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Inicializar o estado baseado no tamanho da tela
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false); // Fecha o menu ao clicar no link em dispositivos móveis
    }
  };

  return (
    <Navbar
      fluid
      className={`fixed left-0 right-0 top-0 z-30 text-slate-950 transition-all duration-300 ${
        scrolling ? "bg-gray-200 bg-opacity-80" : "bg-transparent"
      } ${scrolling ? "top-0" : isMobile ? "top-0" : "mt-12"} ${
        menuOpen ? "bg-gray-900 bg-opacity-70" : ""
      }`}
    >
      <Navbar.Brand href="/">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Flowbite Logo"
            width={70}
            height={70}
            className="mr-3 object-contain lg:ml-40"
          />
          <span className="text-shadow-lg self-center whitespace-nowrap text-xl font-semibold text-slate-800">
            Kisite
          </span>
        </div>
      </Navbar.Brand>
      <div className="flex gap-10 md:order-2">
        {/* <Button>Get started</Button> */}
        <Navbar.Toggle onClick={handleToggle} />
      </div>
      <Navbar.Collapse className={menuOpen ? "block" : "hidden"}>
        <Navbar.Link
          href="/"
          active
          onClick={handleLinkClick}
          className={`${menuOpen ? "text-white" : "text-slate-800"} lg:p-[6px] lg:text-black`}
        >
          Início
        </Navbar.Link>
        <Navbar.Link
          href="/#servicos"
          active
          onClick={handleLinkClick}
          className={`${menuOpen ? "text-white" : "text-slate-800"} lg:p-[6px] lg:text-black`}
        >
          Serviços
        </Navbar.Link>
        <Navbar.Link
          href="#"
          active
          onClick={handleLinkClick}
          className={`${menuOpen ? "text-white" : "text-slate-800"} lg:p-[6px] lg:text-black`}
        >
          Portfólio
        </Navbar.Link>
        <Navbar.Link
          href="/#precos"
          active
          onClick={handleLinkClick}
          className={`${menuOpen ? "text-white" : "text-slate-800"} lg:p-[6px] lg:text-black`}
        >
          Preços
        </Navbar.Link>
        <Navbar.Link
          href="/pages/contato"
          active
          onClick={handleLinkClick}
          className={`${menuOpen ? "text-white" : "text-slate-800"} lg:p-[6px] lg:text-black`}
        >
          Contato
        </Navbar.Link>
        <Navbar.Link
          href="/pages/blog"
          active
          onClick={handleLinkClick}
          className={`${menuOpen ? "text-white" : "text-slate-800"} lg:mr-56 lg:p-[6px] lg:text-black`}
        >
          Blog
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
