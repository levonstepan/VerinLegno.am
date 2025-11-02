"use client";
import Link from "next/link";
import { useState } from "react";

// Icon mapping for different product types
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
}: {
  content: Readonly<{
    title: string;
    subtitle: string;
    items: ReadonlyArray<{
      name: string;
      href: string;
      desc?: string;
    }>;
  }>;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="pt-8 md:pt-12 pb-4 md:pb-6 bg-white relative">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {content.items.map((item, index) => {
            const icon = productIcons[item.name] || "🎨";
            const isHovered = hoveredIndex === index;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative p-6 rounded-xl border-2 border-neutral-200 bg-white hover:border-[#D70000] hover:shadow-xl hover:shadow-[#D70000]/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#D70000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-4 text-4xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#D70000] transition-colors duration-300">
                    {item.name}
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
        
        {/* CTA Section */}
        <div className="mt-8 text-center">
          <p className="text-neutral-600 mb-6">Looking for a specific solution?</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border-2 border-neutral-300 text-neutral-700 hover:border-[#D70000] hover:text-[#D70000] transition-all duration-300"
          >
            Contact Our Experts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


