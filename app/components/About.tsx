"use client";
import Image from "next/image";
import Link from "next/link";

export function About({
  content,
}: {
  content: Readonly<{
    title: string;
    verinlegnoTitle: string;
    verinlegnoText: string;
    rootsTitle: string;
    rootsText: string;
    acobianNote?: string;
  }>;
}) {
  return (
    <section id="company" className="py-8 md:py-12 bg-white relative">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 leading-normal bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Partnership Image Frame - Takes 3 columns */}
          <div className="md:col-span-3 group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D70000] to-[#b30000] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl p-4 border-2 border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative w-full min-h-[400px]">
                <Image
                  src="/partnership.jpg"
                  alt="Partnership"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
          
          {/* Roots Furniture Card - Takes 2 columns */}
          <div className="md:col-span-2 group relative flex flex-col">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl p-6 border-2 border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
              {/* Armenia flag icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D90012] via-[#0033A0] to-[#F2A800] flex items-center justify-center shadow-md">
                  <span className="text-xl">🇦🇲</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{content.rootsTitle}</h3>
                  <div className="text-xs text-neutral-600">Official Representative</div>
                </div>
              </div>
              
              <p className="text-neutral-700 leading-relaxed mb-4 text-sm flex-1">{content.rootsText}</p>
              
              {/* Partnership badge */}
              <div className="flex items-center gap-2 pt-4 border-t border-neutral-200 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D70000]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#D70000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900">Certified Partnership</div>
                  <div className="text-xs text-neutral-600">Exclusive Armenia Distributor</div>
                </div>
              </div>
              
              {/* More Button inside the frame */}
              <Link
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-4 rounded-full font-medium bg-[#D70000] text-white hover:shadow-xl hover:shadow-[#D70000]/20 hover:scale-105 transition-all duration-300 mt-auto"
              >
                <span>More</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Connection line visualization */}
        <div className="mt-12 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#D70000]" />
            <div className="w-3 h-3 rounded-full bg-[#D70000] animate-pulse" />
            <div className="text-sm font-medium text-neutral-600 px-4 py-2 bg-neutral-100 rounded-full">
              Partnership Since 2020
            </div>
            <div className="w-3 h-3 rounded-full bg-[#D70000] animate-pulse" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#D70000]" />
          </div>
        </div>
      </div>
    </section>
  );
}


