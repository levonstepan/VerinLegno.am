"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export function Catalogues({
  content,
  showAll = false,
}: {
  content: Readonly<{
    title: string;
    items: ReadonlyArray<{
      name: string;
      href: string;
    }>;
    cta: string;
  }>;
  showAll?: boolean;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const background1Ref = useRef<HTMLDivElement>(null);
  const background2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const drawRef = useRef(1);
  const displayedItems = showAll ? content.items : content.items.slice(0, 4);

  useEffect(() => {
    // Dynamic import of Trianglify to avoid SSR issues
    let Trianglify: any;
    let intervalId: NodeJS.Timeout;
    let resizeHandler: () => void;

    const initBackground = async () => {
      try {
        // Load trianglify from CDN (npm package has native dependencies that cause build issues)
        // Load from CDN using dynamic script injection
        await new Promise((resolve, reject) => {
          if ((window as any).Trianglify) {
            Trianglify = (window as any).Trianglify;
            resolve(true);
            return;
          }
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/trianglify@4/dist/trianglify.bundle.js';
          script.onload = () => {
            Trianglify = (window as any).Trianglify || (window as any).trianglify;
            resolve(true);
          };
          script.onerror = () => {
            console.warn('Failed to load Trianglify from CDN');
            reject(new Error('CDN load failed'));
          };
          document.head.appendChild(script);
        });
        
        if (!Trianglify) {
          console.warn('Trianglify not available, using fallback pattern');
          return;
        }

        const updateSize = () => {
          if (!containerRef.current || !background1Ref.current || !background2Ref.current) return;
          
          const width = window.innerWidth;
          const height = containerRef.current.offsetHeight || window.innerHeight;
          
          containerRef.current.style.minWidth = `${width}px`;
          containerRef.current.style.minHeight = `${height}px`;
          background1Ref.current.style.minWidth = `${width}px`;
          background1Ref.current.style.minHeight = `${height}px`;
          background2Ref.current.style.minWidth = `${width}px`;
          background2Ref.current.style.minHeight = `${height}px`;
        };

        const svgNew = () => {
          if (!Trianglify || !background1Ref.current || !background2Ref.current) return;

          // Handle both constructor and function call APIs
          let t;
          if (typeof Trianglify === 'function') {
            try {
              t = new Trianglify({
                noiseIntensity: 0,
              });
            } catch (e) {
              // If constructor fails, try as a function
              t = Trianglify({
                noiseIntensity: 0,
              });
            }
          } else {
            t = Trianglify;
          }

          const width = window.innerWidth;
          const height = containerRef.current?.offsetHeight || window.innerHeight;
          const pattern = t.generate(width, height);

          // Get dataUrl - handle different pattern formats
          let dataUrl = pattern.dataUrl;
          if (!dataUrl && pattern.toCanvas) {
            // If pattern has toCanvas method, convert to data URL
            const canvas = pattern.toCanvas();
            dataUrl = canvas.toDataURL();
          } else if (!dataUrl && pattern.svg) {
            // If pattern is an SVG element, convert to data URL
            const svgString = new XMLSerializer().serializeToString(pattern.svg || pattern);
            dataUrl = 'data:image/svg+xml;base64,' + btoa(svgString);
          }

          if (drawRef.current === 1) {
            svgDraw1({ dataUrl }, width, height);
          } else {
            svgDraw2({ dataUrl }, width, height);
          }
        };

        const svgDraw1 = (pattern: any, width: number, height: number) => {
          if (!background1Ref.current) return;
          
          drawRef.current = 2;
          background1Ref.current.style.background = pattern.dataUrl;
          background1Ref.current.style.minWidth = `${width}px`;
          background1Ref.current.style.minHeight = `${height}px`;
          
          // Fade animations
          background1Ref.current.classList.remove('fade-out');
          background1Ref.current.classList.add('fade-in');
          if (background2Ref.current) {
            background2Ref.current.classList.remove('fade-in');
            background2Ref.current.classList.add('fade-out');
          }
        };

        const svgDraw2 = (pattern: any, width: number, height: number) => {
          if (!background2Ref.current) return;
          
          drawRef.current = 1;
          background2Ref.current.style.background = pattern.dataUrl;
          background2Ref.current.style.minWidth = `${width}px`;
          background2Ref.current.style.minHeight = `${height}px`;
          
          // Fade animations
          background2Ref.current.classList.remove('fade-out');
          background2Ref.current.classList.add('fade-in');
          if (background1Ref.current) {
            background1Ref.current.classList.remove('fade-in');
            background1Ref.current.classList.add('fade-out');
          }
        };

        // Initial setup
        updateSize();
        svgNew();

        // Set up interval to recreate SVG every 5 seconds
        intervalId = setInterval(svgNew, 5000);

        // Handle resize
        resizeHandler = () => {
          updateSize();
          svgNew();
        };
        window.addEventListener('resize', resizeHandler);

      } catch (error) {
        console.warn('Failed to load Trianglify:', error);
        // Fallback: create a simple gradient pattern
        if (background1Ref.current && background2Ref.current) {
          const gradient1 = 'linear-gradient(135deg, rgba(215, 0, 0, 0.05) 0%, rgba(215, 0, 0, 0.02) 100%)';
          const gradient2 = 'linear-gradient(45deg, rgba(215, 0, 0, 0.03) 0%, rgba(215, 0, 0, 0.01) 100%)';
          background1Ref.current.style.background = gradient1;
          background2Ref.current.style.background = gradient2;
        }
      }
    };

    initBackground();

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (resizeHandler) window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <section ref={sectionRef} id="catalogues" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-white relative overflow-hidden">
      {/* Multi-layered SVG Background */}
      <div id="background-container" ref={containerRef} className="background-container">
        <div id="background-1" ref={background1Ref} className="background-1"></div>
        <div id="background-2" ref={background2Ref} className="background-2"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6" style={{ position: 'relative', zIndex: 10 }}>
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 leading-normal bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Browse our comprehensive collection of product catalogs and technical documentation
          </p>
        </div>
        
        <div className={`grid ${showAll ? 'sm:grid-cols-2 md:grid-cols-4' : 'sm:grid-cols-2'} gap-6 md:gap-8`}>
          {displayedItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative ${showAll ? 'p-6' : 'p-8 md:p-10'} rounded-xl border-2 border-neutral-200 bg-white hover:border-[#D70000] hover:shadow-xl hover:shadow-[#D70000]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${!showAll ? 'min-h-[280px]' : ''}`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#D70000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
                
                {/* PDF icon */}
                <div className={`relative z-10 mb-4 flex items-center gap-3`}>
                  <div className={`${showAll ? 'w-12 h-12' : 'w-16 h-16 md:w-20 md:h-20'} rounded-lg bg-[#D70000]/10 flex items-center justify-center group-hover:bg-[#D70000]/20 transition-colors`}>
                    <svg className={`${showAll ? 'w-6 h-6' : 'w-8 h-8 md:w-10 md:h-10'} text-[#D70000]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className={`${showAll ? 'text-xs' : 'text-sm md:text-base'} font-medium text-neutral-500 group-hover:text-[#D70000] transition-colors`}>
                    PDF
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`font-semibold ${showAll ? 'text-base' : 'text-lg md:text-xl'} mb-3 group-hover:text-[#D70000] transition-colors duration-300 line-clamp-2`}>
                    {item.name}
                  </h3>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#D70000] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                    <span>{content.cta}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#D70000]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            );
          })}
        </div>
        
        {/* See More Button - only show if not showing all */}
        {!showAll && (
          <div className="mt-8 text-center">
            <Link
              href="/catalogues"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium bg-[#D70000] text-white hover:shadow-xl hover:shadow-[#D70000]/20 hover:scale-105 transition-all duration-300"
            >
              See more
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}


