'use client';

import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.7,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    const handleRouteChange = () => {
      scroll.update();
    };

    window.addEventListener('locationchange', handleRouteChange);

    return () => {
      scroll.destroy();
      window.removeEventListener('locationchange', handleRouteChange);
    };
  }, [isClient]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;