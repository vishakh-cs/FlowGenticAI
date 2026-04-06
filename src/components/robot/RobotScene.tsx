"use client";

import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-[#FF6A00]/10 rounded-3xl" />
});
import { useEffect, useRef } from 'react';

export function RobotScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { capture: true, passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel, { capture: true });
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[400px] w-full sm:h-[500px] lg:h-[600px] relative flex items-center justify-center"
      style={{
        maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 75%)',
      }}
    >
      <Spline
        scene="https://prod.spline.design/o40IsJLU9w3sDo2h/scene.splinecode"
      />
    </div>
  )
}
