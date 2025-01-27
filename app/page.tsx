import { DarkThemeToggle } from "flowbite-react";
import Navbar from "./components/navbar/NavBar";
import CustomFooter from "./components/footer/CustomFooter";
import Hero from "./components/hero/Hero";
import SectionTwo from "./components/sectiontwo/SectionTwo";
import Servicos from "./components/servicos/Servicos";
import About from "./components/about/About";
import ContantSection from "./components/contentsection/ContentSection";
import BannerTop from "./components/bannertop/BannerTop";
import Precos from "./components/precos/Precos";
import Gallery from "./components/galeria/Gallery";
import GridColumTree from "./components/gridcolumtree/GridColumTree";
import OutrosServicos from "./components/outrosservicos/OutrosServicos";
import FaqAccordion from "./components/faqAccordion/FaqAccordion";
import HeroSecondary from "./components/hero-secondary/HeroSecondary";


export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <BannerTop />
      <Navbar />
      <Hero />
      <OutrosServicos />
      <Servicos />
      <About />
      <Precos />
      <Gallery />
      <HeroSecondary />
      <ContantSection />      
      <GridColumTree />
      <FaqAccordion />
      <CustomFooter />
    </main>
  );
}
