'use client';
// components/ClientOnlyAnimation.tsx
import { useEffect, useState, useRef } from "react";

const ClientOnlyAnimation = ({
  threshold,
  children,
  animationClasses,
  animationDelay,
}: {
  threshold: number;
  children: React.ReactNode;
  animationClasses: string; // Classes de animação
  animationDelay?: string; // Delay da animação
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    const currentElement = ref.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isIntersecting ? animationClasses : "opacity-0"}`}
      style={{ animationDelay }}
    >
      {children}
    </div>
  );
};

export default ClientOnlyAnimation;
