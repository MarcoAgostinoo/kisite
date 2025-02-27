"use client";

import React, { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";

interface SplideCarouselProps {
  imageUrls: string[];
  backgroundColor?: string; // Optional background color prop
}

const SplideCarousel: React.FC<SplideCarouselProps> = ({
  imageUrls,
  backgroundColor = "#f0f0f0", // Default background color to light gray
}) => {  
  const splideRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        width: "100%",
        height: "100%",

        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 5,
        arrows: false,
        autoScroll: {
          rewind: true,
          speed: 3,
          pauseOnHover: false,
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
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 py-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Slider Modular</h2>
      <div ref={splideRef} className="splide w-full bg-gray-100">
        <div className="splide__track w-full ">
          <ul className="splide__list w-full ">
            {imageUrls.map((imageUrl, index) => (
              <li key={index} className="splide__slide w-full ">
                <div className="w-full h-full flex items-center justify-center ">
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}                    
                    className="w-full h-full object-cover"
                    style={{ width: '200px', height: '200px' }}
                  />
                </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplideCarousel;

