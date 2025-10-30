"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header({ locale }: { locale: "hy" | "en" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isEn = locale === "en";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3">
            <div className="relative h-8 w-[180px]">
              <span className="text-2xl font-bold text-[#D70000]">VerinLegno</span>
            </div>
            <span className="text-sm text-neutral-600">Armenia</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            <Link
              href={isEn ? "/en#company" : "#company"}
              className="px-4 py-2 hover:text-[#D70000] transition-colors"
            >
              {isEn ? "Company" : "Ընկերություն"}
            </Link>
            <Link
              href={isEn ? "/en#products" : "#products"}
              className="px-4 py-2 hover:text-[#D70000] transition-colors"
            >
              {isEn ? "Products" : "Ապրանքներ"}
            </Link>
            <Link
              href={isEn ? "/en#services" : "#services"}
              className="px-4 py-2 hover:text-[#D70000] transition-colors"
            >
              {isEn ? "Services" : "Ծառայություններ"}
            </Link>
            <Link
              href={isEn ? "/en#catalogues" : "#catalogues"}
              className="px-4 py-2 hover:text-[#D70000] transition-colors"
            >
              {isEn ? "Catalogues" : "Կատալոգներ"}
            </Link>
            <Link
              href={isEn ? "/en#contact" : "#contact"}
              className="px-4 py-2 hover:text-[#D70000] transition-colors"
            >
              {isEn ? "Contact" : "Կապ"}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`px-3 py-1 rounded-full text-sm ${!isEn ? "bg-[#D70000] text-white" : "border border-neutral-300"}`}
            >
              Հայ
            </Link>
            <Link
              href="/en"
              className={`px-3 py-1 rounded-full text-sm ${isEn ? "bg-[#D70000] text-white" : "border border-neutral-300"}`}
            >
              EN
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href={isEn ? "/en#company" : "#company"} className="block px-4 py-2 hover:text-[#D70000]">
              {isEn ? "Company" : "Ընկերություն"}
            </Link>
            <Link href={isEn ? "/en#products" : "#products"} className="block px-4 py-2 hover:text-[#D70000]">
              {isEn ? "Products" : "Ապրանքներ"}
            </Link>
            <Link href={isEn ? "/en#services" : "#services"} className="block px-4 py-2 hover:text-[#D70000]">
              {isEn ? "Services" : "Ծառայություններ"}
            </Link>
            <Link href={isEn ? "/en#catalogues" : "#catalogues"} className="block px-4 py-2 hover:text-[#D70000]">
              {isEn ? "Catalogues" : "Կատալոգներ"}
            </Link>
            <Link href={isEn ? "/en#contact" : "#contact"} className="block px-4 py-2 hover:text-[#D70000]">
              {isEn ? "Contact" : "Կապ"}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

