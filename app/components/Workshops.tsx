"use client";
import Link from "next/link";

export function Workshops({
  content,
}: {
  content: Readonly<{
    title: string;
    subtitle: string;
    description?: string;
    cta: string;
    ctaLink: string;
  }>;
}) {
  return (
    <section id="workshops" className="py-12 md:py-16 relative scroll-mt-20 md:scroll-mt-24" style={{ visibility: 'visible', display: 'block' }}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Background card for visibility */}
        <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-neutral-100">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
              <span className="text-sm font-medium text-[#D70000]">Professional Training</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-normal bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              {content.title}
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-6">
              {content.subtitle}
            </p>
            {content.description && (
              <p className="text-base text-neutral-600 max-w-2xl mx-auto mb-8">
                {content.description}
              </p>
            )}
          </div>
          
          <div className="flex justify-center">
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
              className="inline-flex items-center gap-2 bg-[#D70000] text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-[#D70000]/20 transition-all duration-300 hover:scale-105"
            >
              <span>{content.cta}</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
