"use client";
import Link from "next/link";
import { useState } from "react";

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
  const displayedItems = showAll ? content.items : content.items.slice(0, 4);

  return (
    <section id="catalogues" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(156,163,175,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(156,163,175,0.08)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-32 right-20 w-80 h-80 bg-neutral-200/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-32 left-20 w-[400px] h-[400px] bg-neutral-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s', animationDuration: '6s' }} />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-neutral-100/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s', animationDuration: '5.5s' }} />
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
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


