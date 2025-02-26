"use client";

import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import Image from "next/image";

interface SplideCarouselProps {
  imageUrls: string[];
}

const SplideCarousel: React.FC<SplideCarouselProps> = ({ imageUrls }) => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 5,
        arrows: false, // Desabilita os botões laterais
        autoScroll: {
          speed: 3,
          pauseOnHover: false, // Desabilita a pausa ao passar o mouse
        },
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
        },
      });

      splide.mount({ AutoScroll });

      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <div ref={splideRef} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {imageUrls.map((imageUrl, index) => (
            <li key={index} className="splide__slide">
              <Image
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                width={200}
                height={200}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SplideCarousel;