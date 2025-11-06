"use client";
import { useEffect, useRef, useState } from "react";

export function DynamicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity and transform based on scroll position
  // Always visible with base opacity, intensifies as you scroll
  const baseOpacity = 1.0; // Always fully visible
  const scrollIntensity = Math.min(1, scrollY / 500); // Increases up to 500px scroll
  const opacity = baseOpacity; // Always 100% visible
  
  // Parallax effect - background moves slower than scroll
  const parallaxOffset = scrollY * 0.3;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        opacity: 1, // Always fully visible
        zIndex: 0, // Behind content but visible
        width: '100%',
        height: '100%',
      }}
    >
      {/* White base layer for seamless transition */}
      <div className="absolute inset-0 bg-white" style={{ opacity: 0.2 }} />
      
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% ${50 + parallaxOffset * 0.1}%, 
              rgba(34, 197, 94, 0.4) 0%, 
              rgba(16, 185, 129, 0.35) 25%, 
              rgba(5, 150, 105, 0.3) 50%, 
              rgba(6, 95, 70, 0.2) 75%, 
              transparent 100%
            ),
            radial-gradient(ellipse 60% 40% at ${30 + parallaxOffset * 0.05}% ${40 + parallaxOffset * 0.08}%, 
              rgba(74, 222, 128, 0.35) 0%, 
              rgba(34, 197, 94, 0.3) 40%, 
              transparent 70%
            ),
            radial-gradient(ellipse 70% 50% at ${70 - parallaxOffset * 0.05}% ${60 - parallaxOffset * 0.08}%, 
              rgba(16, 185, 129, 0.32) 0%, 
              rgba(5, 150, 105, 0.25) 50%, 
              transparent 80%
            )
          `,
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      
      {/* Animated floating green orbs */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, transparent 70%)',
          left: `${20 + parallaxOffset * 0.02}%`,
          top: `${30 + parallaxOffset * 0.15}%`,
          transform: `translate(${Math.sin(scrollY * 0.001) * 50}px, ${Math.cos(scrollY * 0.001) * 30}px) scale(${1 + Math.sin(scrollY * 0.0005) * 0.1})`,
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, transparent 70%)',
          right: `${25 - parallaxOffset * 0.02}%`,
          top: `${50 - parallaxOffset * 0.1}%`,
          transform: `translate(${Math.cos(scrollY * 0.001) * -40}px, ${Math.sin(scrollY * 0.001) * 25}px) scale(${1 + Math.cos(scrollY * 0.0006) * 0.1})`,
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(5, 150, 105, 0.4) 0%, transparent 70%)',
          left: `${50 + parallaxOffset * 0.03}%`,
          bottom: `${20 - parallaxOffset * 0.12}%`,
          transform: `translate(${Math.sin(scrollY * 0.0008) * 60}px, ${Math.cos(scrollY * 0.0008) * -35}px) scale(${1 + Math.sin(scrollY * 0.0007) * 0.1})`,
        }}
      />
    </div>
  );
}

