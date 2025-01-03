import { DarkThemeToggle } from "flowbite-react";
import Navbar from "./components/navbar/NavBar";
import CustomFooter from "./components/footer/CustomFooter";
import Hero from "./components/hero/Hero";
import SectionTwo from "./components/sectiontwo/SectionTwo";
import Products from "./components/products/Products";
import About from "./components/about/About";
import ContantSection from "./components/contentsection/ContentSection";
import BannerTop from "./components/bannertop/BannerTop";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <BannerTop />
      <Navbar />
      <Hero />
      <SectionTwo />
      <Products />
      <About />
      <ContantSection />
      <CustomFooter />
    </main>
  );
}
