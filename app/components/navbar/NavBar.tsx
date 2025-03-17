"use client";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navegacao() {
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
    <div className={`z-100`}>
      <Navbar
        fluid
        className={`z-1000 text-slate-950 fixed left-0 right-0 top-0 z-20 transition-all duration-300 ${
          scrolling
            ? "bg-white/80 shadow-lg backdrop-blur-md dark:bg-gray-900/80"
            : "bg-transparent"
        } ${scrolling ? "top-0" : isMobile ? "top-0" : "mt-12"} ${
          menuOpen ? "bg-gray-900 bg-opacity-70" : ""
        }`}
      >
        <Navbar.Brand href="/">
          <div className="group flex items-center">
            <Image
              src="/logo.png"
              alt="Flowbite Logo"
              width={scrolling ? 70 : 100}
              height={scrolling ? 70 : 100}
              className={`mr-3 object-contain lg:ml-40 transition-all duration-300`}
              style={{ height: "auto" }}
              priority={true}
              loading="eager"
            />
            <motion.span
              className="self-center whitespace-nowrap text-2xl font-semibold text-shadow-lg group-hover:text-blue-500"
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              Kisite
            </motion.span>
          </div>
        </Navbar.Brand>
        <div className="flex items-center gap-4 md:order-2">
          <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block"></motion.div>
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
              className={`text-slate-800 text-base group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
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
              className={`text-slate-800 text-base group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
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
              className={`text-slate-800 text-base group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
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
              className={`text-slate-800 text-base group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
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
              href="/pag/contato"
              active
              onClick={handleLinkClick}
              className={`text-slate-800 text-base group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
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
              href="/pag/kiblog"
              active
              onClick={handleLinkClick}
              className={`text-slate-800 text-base group-hover:text-blue-500 lg:p-[6px] lg:text-black ${
                menuOpen ? "text-white" : ""
              }`}
            >
              Blog
            </Navbar.Link>
          </motion.div>
        </Navbar.Collapse>
        <Link
          href="https://wa.me/5511919072390?text=Olá! Gostaria de saber mais sobre os serviços da Kisite"
          target="_blank"
          rel="noopener noreferrer"
          className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-md bg-successGreen px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
        >
          <motion.span
            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
            className="block"
          >
            WhatsApp
          </motion.span>
        </Link>
      </Navbar>
    </div>
  );
}