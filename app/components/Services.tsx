"use client";
import Link from "next/link";
import { useState } from "react";

export function Services({
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

  return (
    <section id="services" className="py-8 md:py-12 bg-white relative">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
              <span className="text-sm font-medium text-[#D70000]">Advanced Technology</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              {content.title}
            </h2>
            
            <h3 className="text-2xl font-semibold text-[#D70000] mb-6">{content.subtitle}</h3>
            
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              {content.description}
            </p>
            
            {/* Features list */}
            <div className="space-y-3 mb-8">
              {[
                "Maximum color accuracy",
                "Simple and fast application",
                "Water and solvent compatibility",
                "Wide range of finishes"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D70000]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#D70000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link
              href={content.ctaLink}
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
          
          {/* Visual mockup */}
          <div className="relative">
            <div 
              className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border-2 border-neutral-200 shadow-2xl transform transition-all duration-500 hover:shadow-[#D70000]/10 hover:scale-[1.02]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Mock interface */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D70000] to-[#b30000] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">V</span>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">Verinchrome</div>
                    <div className="text-sm text-neutral-600">Tinting System</div>
                  </div>
                </div>
                
                {/* Color palette mockup */}
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { color: "#D70000", label: "Red" },
                    { color: "#1E40AF", label: "Blue" },
                    { color: "#059669", label: "Green" },
                    { color: "#F59E0B", label: "Orange" },
                    { color: "#6366F1", label: "Purple" }
                  ].map((swatch, idx) => (
                    <div key={idx} className="group/item">
                      <div 
                        className="w-full aspect-square rounded-lg mb-2 shadow-md transition-transform duration-300 group-hover/item:scale-110"
                        style={{ backgroundColor: swatch.color }}
                      />
                      <div className="text-xs text-center text-neutral-600">{swatch.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Status indicator */}
                <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-700 font-medium">System Ready</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}


