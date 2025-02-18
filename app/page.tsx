import Navbar from "./components/navbar/NavBar";
import CustomFooter from "./components/footer/CustomFooter";
import Hero from "./components/hero/Hero";
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
import HeroHomeContainer from "./components/heroHomecontainer/HeroHomeContainer";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <BannerTop />
      <Navbar />
      <Hero />
      <HeroHomeContainer />
      <Servicos />
      <Precos />
      <About />
      <Gallery />
      <HeroSecondary />
      <ContantSection />
      <FaqAccordion />
      <CustomFooter />
    </main>
  );
}
