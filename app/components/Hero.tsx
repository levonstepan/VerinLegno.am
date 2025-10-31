"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero({
  content,
}: {
  content: Readonly<{
    title: string;
    subtitle: string;
    cta: string;
    ctaLink: string;
  }>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animated gradient background
    let time = 0;
    const animate = () => {
      time += 0.01;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      const hue1 = (Math.sin(time) * 10 + 350) % 360;
      const hue2 = (Math.sin(time + 2) * 10 + 360) % 360;
      
      gradient.addColorStop(0, `hsla(${hue1}, 20%, 98%, 0.03)`);
      gradient.addColorStop(1, `hsla(${hue2}, 15%, 96%, 0.03)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 via-white to-white py-20 md:py-32 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ zIndex: 0 }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D70000]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl -z-10" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Since 1983 • Italian Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
            {content.title}
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-700 mb-10 leading-relaxed max-w-2xl">
            {content.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={content.ctaLink}
              className="group relative inline-flex items-center justify-center bg-[#D70000] text-white px-8 py-4 rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#D70000]/20 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.cta}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D70000] to-[#b30000] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link
              href="#company"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border-2 border-neutral-300 text-neutral-700 hover:border-[#D70000] hover:text-[#D70000] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Stats or highlights */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D70000] mb-2">40+</div>
              <div className="text-sm text-neutral-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D70000] mb-2">50+</div>
              <div className="text-sm text-neutral-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D70000] mb-2">100%</div>
              <div className="text-sm text-neutral-600">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


