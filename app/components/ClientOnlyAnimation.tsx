'use client';
// components/ClientOnlyAnimation.tsx
import { useEffect, useState } from 'react';

const ClientOnlyAnimation = ({
  threshold,
  children,
  animationClasses,
}: {
  threshold: number;
  children: React.ReactNode;
  animationClasses: string;  // Aqui recebemos as classes de animação
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    const element = document.querySelector('.animate-on-scroll');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return (
    <div
      className={`animate-on-scroll transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${animationClasses}`}
    >
      {children}
    </div>
  );
};

export default ClientOnlyAnimation;
