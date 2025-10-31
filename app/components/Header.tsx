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
              href={isEn ? "/en#company" : "#company"}
              className="px-4 py-2 rounded-lg hover:text-[#D70000] hover:bg-[#D70000]/5 transition-all duration-200 font-medium"
            >
              {isEn ? "Company" : "Ընկերություն"}
            </Link>
            <Link
              href={isEn ? "/en#products" : "#products"}
              className="px-4 py-2 rounded-lg hover:text-[#D70000] hover:bg-[#D70000]/5 transition-all duration-200 font-medium"
            >
              {isEn ? "Products" : "Ապրանքներ"}
            </Link>
            <Link
              href={isEn ? "/en#services" : "#services"}
              className="px-4 py-2 rounded-lg hover:text-[#D70000] hover:bg-[#D70000]/5 transition-all duration-200 font-medium"
            >
              {isEn ? "Services" : "Ծառայություններ"}
            </Link>
            <Link
              href={isEn ? "/en#catalogues" : "#catalogues"}
              className="px-4 py-2 rounded-lg hover:text-[#D70000] hover:bg-[#D70000]/5 transition-all duration-200 font-medium"
            >
              {isEn ? "Catalogues" : "Կատալոգներ"}
            </Link>
            <Link
              href={isEn ? "/en#contact" : "#contact"}
              className="px-4 py-2 rounded-lg hover:text-[#D70000] hover:bg-[#D70000]/5 transition-all duration-200 font-medium"
            >
              {isEn ? "Contact" : "Կապ"}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                !isEn 
                  ? "bg-[#D70000] text-white shadow-md shadow-[#D70000]/20" 
                  : "border border-neutral-300 hover:border-[#D70000] hover:text-[#D70000]"
              }`}
            >
              Հայ
            </Link>
            <Link
              href="/en"
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isEn 
                  ? "bg-[#D70000] text-white shadow-md shadow-[#D70000]/20" 
                  : "border border-neutral-300 hover:border-[#D70000] hover:text-[#D70000]"
              }`}
            >
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
              href={isEn ? "/en#company" : "#company"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Company" : "Ընկերություն"}
            </Link>
            <Link 
              href={isEn ? "/en#products" : "#products"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Products" : "Ապրանքներ"}
            </Link>
            <Link 
              href={isEn ? "/en#services" : "#services"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Services" : "Ծառայություններ"}
            </Link>
            <Link 
              href={isEn ? "/en#catalogues" : "#catalogues"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Catalogues" : "Կատալոգներ"}
            </Link>
            <Link 
              href={isEn ? "/en#contact" : "#contact"} 
              className="block px-4 py-3 rounded-lg hover:bg-[#D70000]/5 hover:text-[#D70000] transition-all font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Contact" : "Կապ"}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}


