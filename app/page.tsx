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


export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <BannerTop />
      <Navbar />
      <Hero />
      <SectionTwo />
      <Servicos />
      <About />
      <Precos />
      <Gallery />
      <ContantSection />      
      <GridColumTree />
      <CustomFooter />
    </main>
  );
}
