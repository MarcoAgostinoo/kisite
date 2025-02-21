import Hero from "./components/hero/Hero";
import Servicos from "./components/servicos/Servicos";
import About from "./components/about/About";
import ContantSection from "./components/contentsection/ContentSection";
import Precos from "./components/precos/Precos";
import Gallery from "./components/galeria/Gallery";
import FaqAccordion from "./components/faqAccordion/FaqAccordion";
import HeroSecondary from "./components/hero-secondary/HeroSecondary";
import HeroHomeContainer from "./components/heroHomecontainer/HeroHomeContainer";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <HeroHomeContainer />
      <Servicos />
      <ContantSection />
      <Precos />
      <About />
      <Gallery />
      <HeroSecondary />
      <FaqAccordion />
    </main>
  );
}
