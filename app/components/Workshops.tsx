"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Workshops({
  content,
}: {
  content: Readonly<{
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    ctaLink: string;
  }>;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="workshops" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-white relative overflow-hidden">
      {/* Animated Background with Scroll Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(215,0,0,0.03)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(215,0,0,0.025)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Scroll-responsive moving shapes */}
          <div 
            className="absolute top-32 right-20 w-80 h-80 bg-[#D70000]/8 rounded-full blur-3xl animate-float"
            style={{ 
              transform: `translate(${scrollY * 30}px, ${scrollY * 40}px) scale(${1 + scrollY * 0.1})`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          <div 
            className="absolute bottom-32 left-20 w-[400px] h-[400px] bg-[#D70000]/6 rounded-full blur-3xl animate-float" 
            style={{ 
              animationDelay: '2.5s', 
              animationDuration: '6s',
              transform: `translate(${-scrollY * 25}px, ${-scrollY * 35}px) scale(${1 + scrollY * 0.08})`,
              transition: 'transform 0.1s ease-out'
            }} 
          />
          <div 
            className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#D70000]/10 rounded-full blur-3xl animate-float" 
            style={{ 
              animationDelay: '0.5s', 
              animationDuration: '5.5s',
              transform: `translate(${scrollY * 20}px, ${-scrollY * 30}px) scale(${1 + scrollY * 0.12})`,
              transition: 'transform 0.1s ease-out'
            }} 
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D70000]/5 rounded-full blur-3xl animate-float" 
            style={{ 
              animationDelay: '3.5s', 
              animationDuration: '7.5s',
              transform: `translate(${-scrollY * 35}px, ${scrollY * 25}px) scale(${1 + scrollY * 0.15})`,
              transition: 'transform 0.1s ease-out'
            }} 
          />
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Professional Training</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 leading-normal bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {[
            {
              title: "Application Techniques",
              description: content.description,
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              ),
            },
            {
              title: "Product Knowledge",
              description: "Learn about the full range of VerinLegno products, their applications, and best practices for optimal results.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              ),
            },
            {
              title: "Color Matching",
              description: "Master the art of color matching and tinting with our professional training programs.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              ),
            },
            {
              title: "Quality Control",
              description: "Understand quality standards and inspection techniques to ensure professional finishes every time.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((workshop, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl p-6 border-2 border-neutral-200 hover:border-[#D70000] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#D70000]/10 flex items-center justify-center text-[#D70000] group-hover:bg-[#D70000] group-hover:text-white transition-all duration-300">
                  {workshop.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{workshop.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{workshop.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href={content.ctaLink}
            onClick={(e) => {
              // Handle hash links smoothly
              if (content.ctaLink.startsWith('#')) {
                e.preventDefault();
                const targetId = content.ctaLink.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className="group inline-flex items-center gap-2 bg-[#D70000] text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-[#D70000]/20 transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>{content.cta}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}



