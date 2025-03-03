import Hero from "@/app/components/hero/Hero";
import SplideCarousel from "@/app/components/caroucelanimated/Caroucelanimated";
import TesteMargin from "@/app/components/teste/Testemargin";


export default function teste() {
  const imageUrls = [
    '/background.png', // Substitua pelos seus URLs
    '/logo.png',
    '/images/slide3.jpg',
    '/images/slide4.png',
    '/images/slide5.jpg',
  ];

  return (
    <div>
      <Hero />
      <SplideCarousel imageUrls={imageUrls} />
      <TesteMargin />
    </div>
  );
}