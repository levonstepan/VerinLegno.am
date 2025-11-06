"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Icon mapping for different product types (fallback when no image)
const productIcons: Record<string, string> = {
  "Special effects": "✨",
  "Water-based exterior": "🌊",
  "Water-based interior": "💧",
  "Fire retardant": "🔥",
  "Metal": "⚙️",
  "Parquet": "🪵",
  "Special products": "⭐",
  "Solvent exterior": "🌿",
  "Solvent interior": "🌱",
  "Glass": "🔷",
};

export function Products({
  content,
  showAll = false,
}: {
  content: Readonly<{
    title: string;
    subtitle: string;
    items: ReadonlyArray<{
      name: string;
      href: string;
      desc?: string;
      image?: string;
    }>;
  }>;
  showAll?: boolean;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const displayedItems = showAll ? content.items : content.items.slice(0, 4);

  // Helper function to get catalogue name from image path
  const getCatalogueName = (imagePath: string | undefined): string => {
    if (!imagePath) return '';
    if (imagePath.includes('Crystal Epox')) return 'Crystal Epox';
    if (imagePath.includes('Wood oil')) return 'Wood Oil';
    if (imagePath.includes('Stains')) return 'Stains';
    if (imagePath.includes('Patinas')) return 'Patinas';
    return '';
  };

  return (
    <section id="products" className="pt-8 md:pt-12 pb-4 md:pb-6 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(215,0,0,0.03)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(215,0,0,0.025)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D70000]/8 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D70000]/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '6s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#D70000]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#D70000]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s', animationDuration: '7s' }} />
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-10 leading-normal bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>
        
        <div className={`grid ${showAll ? 'sm:grid-cols-2 md:grid-cols-4' : 'sm:grid-cols-2'} gap-6 md:gap-8`}>
          {displayedItems.map((item, index) => {
            const icon = productIcons[item.name] || "🎨";
            const isHovered = hoveredIndex === index;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative ${showAll ? 'p-3' : 'p-4 md:p-5'} rounded-xl border-2 border-neutral-200 bg-white hover:border-[#D70000] hover:shadow-xl hover:shadow-[#D70000]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${!showAll ? 'min-h-[280px]' : ''} max-w-sm mx-auto`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#D70000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
                
                {/* Catalogue Image or Icon */}
                {item.image ? (
                  <div className="relative z-10 mb-3 flex justify-center">
                    <div className={`${showAll ? 'w-full' : 'w-full'} ${showAll ? 'h-48' : 'h-64 md:h-72'} rounded-lg overflow-hidden bg-neutral-100 flex items-center justify-center`}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={600}
                        height={400}
                        className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ${
                          item.image.includes('Crystal Epox') || 
                          item.image.includes('Stains') || 
                          item.image.includes('Patinas') 
                            ? 'scale-125' : ''
                        }`}
                        sizes="(max-width: 768px) 100vw, 100vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={`relative z-10 mb-4 ${showAll ? 'text-4xl' : 'text-5xl md:text-6xl'} transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    {icon}
                  </div>
                )}
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`font-bold ${showAll ? 'text-base' : 'text-lg md:text-xl'} mb-2 group-hover:text-[#D70000] transition-colors duration-300 text-center ${item.image ? 'text-neutral-900' : ''}`}>
                    {item.image ? getCatalogueName(item.image) : item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors">
                      {item.desc}
                    </p>
                  )}
                  
                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center text-[#D70000] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span className="text-sm font-medium mr-2">Explore</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#D70000]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>
        
        {/* See More Button - only show if not showing all */}
        {!showAll && (
          <div className="mt-8 text-center">
            <Link
              href="/products"
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


