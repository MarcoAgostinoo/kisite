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

  return (
    <Navbar
      fluid
      rounded
      className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${
        scrolling ? "bg-gray-500 bg-opacity-60" : "bg-transparent"
      } ${scrolling ? "top-0" : isMobile ? "top-0" : "mt-16"} ${
        menuOpen ? "bg-gray-900 bg-opacity-70" : ""
      }`}
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <Image
          src="/logo.png"
          alt="Flowbite Logo"
          className="mr-3 h-8"
          width={60}
          height={60}
        />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-10">
        <Button>Get started</Button>
        <Navbar.Toggle onClick={handleToggle} /> 
      </div>
      <Navbar.Collapse className={menuOpen ? "block" : "hidden"}> {/* Garante que o menu seja visível quando aberto */}
        <Navbar.Link href="#" active className={menuOpen ? "text-white" : ""}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className={menuOpen ? "text-white" : ""}>
          About
        </Navbar.Link>
        <Navbar.Link href="#" className={menuOpen ? "text-white" : ""}>
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className={menuOpen ? "text-white" : ""}>
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className={menuOpen ? "text-white" : ""}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
