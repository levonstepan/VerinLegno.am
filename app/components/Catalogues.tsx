"use client";
import Link from "next/link";
import { useState, useRef } from "react";

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
  const displayedItems = showAll ? content.items : content.items.slice(0, 4);

  // Dynamic gradient colors for each frame - different colors that change on hover (more saturated)
  const gradientColors = [
    { from: 'from-blue-100', via: 'via-purple-100', to: 'to-pink-100', hoverFrom: 'group-hover:from-blue-200', hoverVia: 'group-hover:via-purple-200', hoverTo: 'group-hover:to-pink-200' },
    { from: 'from-emerald-100', via: 'via-teal-100', to: 'to-cyan-100', hoverFrom: 'group-hover:from-emerald-200', hoverVia: 'group-hover:via-teal-200', hoverTo: 'group-hover:to-cyan-200' },
    { from: 'from-amber-100', via: 'via-orange-100', to: 'to-red-100', hoverFrom: 'group-hover:from-amber-200', hoverVia: 'group-hover:via-orange-200', hoverTo: 'group-hover:to-red-200' },
    { from: 'from-indigo-100', via: 'via-blue-100', to: 'to-violet-100', hoverFrom: 'group-hover:from-indigo-200', hoverVia: 'group-hover:via-blue-200', hoverTo: 'group-hover:to-violet-200' },
    { from: 'from-rose-100', via: 'via-pink-100', to: 'to-fuchsia-100', hoverFrom: 'group-hover:from-rose-200', hoverVia: 'group-hover:via-pink-200', hoverTo: 'group-hover:to-fuchsia-200' },
    { from: 'from-green-100', via: 'via-emerald-100', to: 'to-teal-100', hoverFrom: 'group-hover:from-green-200', hoverVia: 'group-hover:via-emerald-200', hoverTo: 'group-hover:to-teal-200' },
  ];

  return (
    <section ref={sectionRef} id="catalogues" className="pt-4 md:pt-6 pb-8 md:pb-12 bg-white relative">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
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
        
        <div className={`grid ${showAll ? 'sm:grid-cols-2 md:grid-cols-3' : 'sm:grid-cols-2'} gap-6 md:gap-8`}>
          {displayedItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const gradient = gradientColors[index % gradientColors.length];
            
            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative ${showAll ? 'p-6' : 'p-8 md:p-10'} rounded-xl border-2 border-neutral-200 hover:border-[#D70000] hover:shadow-xl hover:shadow-[#D70000]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${!showAll ? 'min-h-[280px]' : ''}`}
              >
                {/* Dynamic gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.via} ${gradient.to} ${gradient.hoverFrom} ${gradient.hoverVia} ${gradient.hoverTo} transition-all duration-500 ease-in-out rounded-xl`} />
                
                {/* Additional gradient overlay for depth and readability */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent group-hover:from-white/30 group-hover:via-white/20 group-hover:to-transparent transition-all duration-500 rounded-xl`} />
                
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


