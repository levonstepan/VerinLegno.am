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
  const baseOpacity = 0.5; // Always visible at 50%
  const scrollIntensity = Math.min(1, scrollY / 500); // Increases up to 500px scroll
  const opacity = baseOpacity + (scrollIntensity * 0.5); // Range from 0.5 to 1.0
  
  // Parallax effect - background moves slower than scroll
  const parallaxOffset = scrollY * 0.3;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        opacity,
        transition: 'opacity 0.2s ease-out',
        zIndex: 0, // Behind content but visible
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% ${50 + parallaxOffset * 0.1}%, 
              rgba(34, 197, 94, 0.25) 0%, 
              rgba(16, 185, 129, 0.20) 25%, 
              rgba(5, 150, 105, 0.15) 50%, 
              rgba(6, 95, 70, 0.10) 75%, 
              transparent 100%
            ),
            radial-gradient(ellipse 60% 40% at ${30 + parallaxOffset * 0.05}% ${40 + parallaxOffset * 0.08}%, 
              rgba(74, 222, 128, 0.20) 0%, 
              rgba(34, 197, 94, 0.15) 40%, 
              transparent 70%
            ),
            radial-gradient(ellipse 70% 50% at ${70 - parallaxOffset * 0.05}% ${60 - parallaxOffset * 0.08}%, 
              rgba(16, 185, 129, 0.18) 0%, 
              rgba(5, 150, 105, 0.12) 50%, 
              transparent 80%
            )
          `,
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Animated floating green orbs */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
          left: `${20 + parallaxOffset * 0.02}%`,
          top: `${30 + parallaxOffset * 0.15}%`,
          transform: `translate(${Math.sin(scrollY * 0.001) * 50}px, ${Math.cos(scrollY * 0.001) * 30}px) scale(${1 + Math.sin(scrollY * 0.0005) * 0.1})`,
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
          right: `${25 - parallaxOffset * 0.02}%`,
          top: `${50 - parallaxOffset * 0.1}%`,
          transform: `translate(${Math.cos(scrollY * 0.001) * -40}px, ${Math.sin(scrollY * 0.001) * 25}px) scale(${1 + Math.cos(scrollY * 0.0006) * 0.1})`,
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(5, 150, 105, 0.22) 0%, transparent 70%)',
          left: `${50 + parallaxOffset * 0.03}%`,
          bottom: `${20 - parallaxOffset * 0.12}%`,
          transform: `translate(${Math.sin(scrollY * 0.0008) * 60}px, ${Math.cos(scrollY * 0.0008) * -35}px) scale(${1 + Math.sin(scrollY * 0.0007) * 0.1})`,
        }}
      />
    </div>
  );
}

