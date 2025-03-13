"use client";

import { useEffect, useState, useCallback } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Interface atualizada com tipos corretos
interface ScrollOptions {
  el: HTMLElement;
  smooth: boolean;
  multiplier: number;
  lerp: number;
  getDirection: boolean;
  class: string;
  reloadOnContextChange: boolean;
  touchMultiplier: number;
  smartphone: {
    smooth: boolean;
    breakpoint: number;
  };
  tablet: {
    smooth: boolean;
    breakpoint: number;
  };
}

export default function SmoothScroll() {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  const initScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return;

    // Adjust the options to reduce spacing issues
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainer as HTMLElement,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.1,
      getDirection: true,
      class: "is-revealed",
      reloadOnContextChange: true,
      touchMultiplier: 2,
      // Reduce the smoothness on mobile to minimize spacing issues
      smartphone: {
        smooth: false, // Changed to false to use native scrolling on mobile
        breakpoint: 767,
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
      },
    } as ScrollOptions);

    // Force update after a short delay to fix initial positioning
    setTimeout(() => {
      locomotiveScroll.update();
    }, 100);

    setScroll(locomotiveScroll);

    return locomotiveScroll;
  }, []);

  useEffect(() => {
    const locomotiveScroll = initScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [initScroll]);

  useEffect(() => {
    if (!scroll) return;

    const handleResize = () => {
      scroll.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scroll]);

  return null;
}
