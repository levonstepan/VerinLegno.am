"use client";
import Link from "next/link";

export function Hero({
  content,
  locale = "en",
}: {
  content: Readonly<{
    title: string;
    badge?: string;
    subtitle: string;
    cta: string;
    ctaLink: string;
    cta2?: string;
    cta2Link?: string;
    stats?: {
      yearsLabel: string;
      countriesLabel: string;
      ecoLabel: string;
    };
  }>;
  locale?: "arm" | "en";
}) {
  return (
    <section className="relative pt-0 pb-8 md:pb-12 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/blue.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
      
      <div className="relative z-20 mx-auto max-w-7xl px-4 md:px-6 pt-4 md:pt-6">
        <div className="max-w-4xl">
          {/* Content card */}
          <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
              <span className="text-sm font-medium text-[#D70000]">{content.badge || "Since 1975 • Italian Excellence"}</span>
            </div>
            
            <h1 className={`${locale === "arm" ? "text-3xl md:text-4xl lg:text-5xl" : "text-4xl md:text-5xl lg:text-6xl"} font-semibold leading-tight mb-8 text-neutral-800`}>
              {content.title}
            </h1>
            
            <p className={`${locale === "arm" ? "text-sm md:text-base" : "text-lg md:text-xl"} text-neutral-800 mb-10 leading-relaxed max-w-2xl drop-shadow-md`}>
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
              href={content.cta2Link || "#company"}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border-2 border-neutral-300 text-neutral-700 hover:border-[#D70000] hover:text-[#D70000] transition-all duration-300"
            >
              {content.cta2 || "Learn More"}
            </Link>
          </div>
          </div>
          
          {/* Stats or highlights */}
          <div className="mt-8 grid grid-cols-3 gap-8 pt-8 border-t border-neutral-300 bg-white rounded-2xl p-6 shadow-lg border border-neutral-200">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D70000] mb-2">50+</div>
              <div className="text-sm text-neutral-600">{content.stats?.yearsLabel || "Years Experience"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D70000] mb-2">50+</div>
              <div className="text-sm text-neutral-600">{content.stats?.countriesLabel || "Countries"}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D70000] mb-2">100%</div>
              <div className="text-sm text-neutral-600">{content.stats?.ecoLabel || "Eco-Friendly"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


