// hooks/useIntersectionObserver.ts
'use client'
import { useEffect, useState } from 'react';

export const useIntersectionObserver = (threshold: number) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },
      {
        threshold: threshold, // 10% da visibilidade
      }
    );

    const element = document.querySelector('.animate-on-scroll');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return isIntersecting;
};

