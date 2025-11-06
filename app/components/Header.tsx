"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header({ locale }: { locale: "hy" | "en" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isEn = locale === "en";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3 group">
            <div className="relative">
              <span className="text-2xl font-bold text-[#D70000] group-hover:opacity-80 transition-opacity">
                VerinLegno
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D70000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
            <span className="text-xs md:text-sm text-neutral-600 font-medium px-2 py-1 rounded-full bg-neutral-100">
              Armenia
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            <Link
              href={isEn ? "/en#products" : "#products"}
              className="px-4 py-2 rounded-lg text-neutral-600 font-medium hover:text-[#D70000] hover:bg-[#D70000]/10 transition-all duration-200"
            >
              {isEn ? "Products" : "Ապրանքներ"}
            </Link>
            <Link
              href={isEn ? "/en#catalogues" : "#catalogues"}
              className="px-4 py-2 rounded-lg text-neutral-600 font-medium hover:text-[#D70000] hover:bg-[#D70000]/10 transition-all duration-200"
            >
              {isEn ? "Manuals" : "Կատալոգներ"}
            </Link>
            <Link
              href={isEn ? "/en#services" : "#services"}
              className="px-4 py-2 rounded-lg text-neutral-600 font-medium hover:text-[#D70000] hover:bg-[#D70000]/10 transition-all duration-200"
            >
              {isEn ? "Services" : "Ծառայություններ"}
            </Link>
            <Link
              href={isEn ? "/en#company" : "#company"}
              className="px-4 py-2 rounded-lg text-neutral-600 font-medium hover:text-[#D70000] hover:bg-[#D70000]/10 transition-all duration-200"
            >
              {isEn ? "Partnership" : "Ընկերություն"}
            </Link>
            <Link
              href={isEn ? "/en#workshops" : "#workshops"}
              className="px-4 py-2 rounded-lg text-neutral-600 font-medium hover:text-[#D70000] hover:bg-[#D70000]/10 transition-all duration-200"
            >
              {isEn ? "Workshops" : "Վարպետություններ"}
            </Link>
            <Link
              href={isEn ? "/en#contact" : "#contact"}
              className="px-4 py-2 rounded-lg text-neutral-600 font-medium hover:text-[#D70000] hover:bg-[#D70000]/10 transition-all duration-200"
            >
              {isEn ? "Contact Us" : "Կապ"}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                !isEn 
                  ? "bg-[#D70000] text-white shadow-md shadow-[#D70000]/20" 
                  : "border border-neutral-300 text-neutral-800 hover:border-[#D70000] hover:text-[#D70000]"
              }`}
            >
              {/* Armenia Flag */}
              <svg className="w-4 h-3" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="6.67" fill="#D90012"/>
                <rect y="6.67" width="40" height="6.67" fill="#0033A0"/>
                <rect y="13.33" width="40" height="6.67" fill="#F2A800"/>
              </svg>
              Հայ
            </Link>
            <Link
              href="/en"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isEn 
                  ? "bg-[#D70000] text-white shadow-md shadow-[#D70000]/20" 
                  : "border border-neutral-300 hover:border-[#D70000] hover:text-[#D70000]"
              }`}
            >
              {/* USA Flag */}
              <svg className="w-4 h-3" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" fill="#B22234"/>
                <rect width="40" height="1.54" fill="#FFFFFF" y="0"/>
                <rect width="40" height="1.54" fill="#FFFFFF" y="3.08"/>
                <rect width="40" height="1.54" fill="#FFFFFF" y="6.15"/>
                <rect width="40" height="1.54" fill="#FFFFFF" y="9.23"/>
                <rect width="40" height="1.54" fill="#FFFFFF" y="12.31"/>
                <rect width="40" height="1.54" fill="#FFFFFF" y="15.38"/>
                <rect width="40" height="1.54" fill="#FFFFFF" y="18.46"/>
                <rect width="16" height="10.77" fill="#3C3B6E" x="0" y="0"/>
                <circle cx="2" cy="1.85" r="0.8" fill="#FFFFFF"/>
                <circle cx="5.5" cy="1.85" r="0.8" fill="#FFFFFF"/>
                <circle cx="9" cy="1.85" r="0.8" fill="#FFFFFF"/>
                <circle cx="12.5" cy="1.85" r="0.8" fill="#FFFFFF"/>
                <circle cx="2" cy="4.62" r="0.8" fill="#FFFFFF"/>
                <circle cx="5.5" cy="4.62" r="0.8" fill="#FFFFFF"/>
                <circle cx="9" cy="4.62" r="0.8" fill="#FFFFFF"/>
                <circle cx="12.5" cy="4.62" r="0.8" fill="#FFFFFF"/>
                <circle cx="2" cy="7.38" r="0.8" fill="#FFFFFF"/>
                <circle cx="5.5" cy="7.38" r="0.8" fill="#FFFFFF"/>
                <circle cx="9" cy="7.38" r="0.8" fill="#FFFFFF"/>
                <circle cx="12.5" cy="7.38" r="0.8" fill="#FFFFFF"/>
                <circle cx="2" cy="10.15" r="0.8" fill="#FFFFFF"/>
                <circle cx="5.5" cy="10.15" r="0.8" fill="#FFFFFF"/>
                <circle cx="9" cy="10.15" r="0.8" fill="#FFFFFF"/>
                <circle cx="12.5" cy="10.15" r="0.8" fill="#FFFFFF"/>
              </svg>
              EN
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-fade-in-up">
            <Link 
              href={isEn ? "/en#products" : "#products"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Products" : "Ապրանքներ"}
            </Link>
            <Link 
              href={isEn ? "/en#catalogues" : "#catalogues"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Manuals" : "Կատալոգներ"}
            </Link>
            <Link 
              href={isEn ? "/en#services" : "#services"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Services" : "Ծառայություններ"}
            </Link>
            <Link 
              href={isEn ? "/en#company" : "#company"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Partnership" : "Ընկերություն"}
            </Link>
            <Link 
              href={isEn ? "/en#workshops" : "#workshops"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Workshops" : "Վարպետություններ"}
            </Link>
            <Link 
              href={isEn ? "/en#contact" : "#contact"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium text-neutral-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Contact Us" : "Կապ"}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}


