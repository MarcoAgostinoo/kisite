"use client";
import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
      setMenuOpen(false);
    }
  };

  return (
    <Navbar
      fluid
      className={`text-slate-950 fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${
        scrolling ? "bg-gray-200 bg-opacity-95" : "bg-transparent"
      } ${scrolling ? "top-0" : isMobile ? "top-0" : "mt-12"} ${
        menuOpen ? "bg-gray-900 bg-opacity-70" : ""
      }`}
    >
      <Navbar.Brand href="/">
        <div className="group flex items-center">
          <Image
            src="/logo.png"
            alt="Flowbite Logo"
            width={70}
            height={70}
            className="mr-3 object-contain lg:ml-40"
          />
          <motion.span
            className="self-center whitespace-nowrap text-xl font-semibold text-shadow-lg group-hover:text-blue-500" // Mudança de cor ao passar o mouse
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Animação de escala
          >
            Kisite
          </motion.span>
        </div>
      </Navbar.Brand>
      <div className="flex gap-10 md:order-2">
        <Navbar.Toggle onClick={handleToggle} />
      </div>
      <Navbar.Collapse className={menuOpen ? "block" : "hidden"}>
        <motion.div
          className="group relative"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Navbar.Link
            href="/"
            active
            onClick={handleLinkClick}
            className={`text-slate-800 group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
              menuOpen ? "text-white" : ""
            }`}
          >
            Início
          </Navbar.Link>
        </motion.div>

        <motion.div
          className="group relative"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Navbar.Link
            href="/#servicos"
            active
            onClick={handleLinkClick}
            className={`text-slate-800 group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
              menuOpen ? "text-white" : ""
            }`}
          >
            Serviços
          </Navbar.Link>
        </motion.div>

        <motion.div
          className="group relative"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Navbar.Link
            href="/#portifolio"
            active
            onClick={handleLinkClick}
            className={`text-slate-800 group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
              menuOpen ? "text-white" : ""
            }`}
          >
            Portfólio
          </Navbar.Link>
        </motion.div>

        <motion.div
          className="group relative"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Navbar.Link
            href="/#precos"
            active
            onClick={handleLinkClick}
            className={`text-slate-800 group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
              menuOpen ? "text-white" : ""
            }`}
          >
            Preços
          </Navbar.Link>
        </motion.div>

        <motion.div
          className="group relative"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Navbar.Link
            href="/pages/contato"
            active
            onClick={handleLinkClick}
            className={`text-slate-800 group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
              menuOpen ? "text-white" : ""
            }`}
          >
            Contato
          </Navbar.Link>
        </motion.div>

        <motion.div
          className="group relative"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <Navbar.Link
            href="/pages/blog"
            active
            onClick={handleLinkClick}
            className={`text-slate-800 group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
              menuOpen ? "text-white" : ""
            }`}
          >
            Blog
          </Navbar.Link>
        </motion.div>
      </Navbar.Collapse>
      <Link href="/" target="_blank">
        <Button gradientMonochrome="success">11 91907-2390</Button>
      </Link>
    </Navbar>
  );
}
