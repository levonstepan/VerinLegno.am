"use client";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <section id="workshops" className="py-8 md:py-12 bg-white relative">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Professional Training</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
          
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
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
            className="group inline-flex items-center gap-2 bg-[#D70000] text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-[#D70000]/20 transition-all duration-300 hover:scale-105"
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

