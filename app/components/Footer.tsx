"use client";
import Link from "next/link";

export function Footer({
  content,
}: {
  content: Readonly<{
    companyInfo: string;
    address: string;
    email: string;
    phone: string;
    links: ReadonlyArray<{ label: string; href: string }>;
    copyright: string;
  }>;
}) {
  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-neutral-300 py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">VerinLegno</span>
              <span className="text-sm text-neutral-400 ml-2">Armenia</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {content.companyInfo}
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span>Contact</span>
              <div className="h-px flex-1 bg-neutral-700" />
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#D70000] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-neutral-400">{content.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#D70000] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${content.phone}`} className="text-neutral-400 hover:text-[#D70000] transition-colors">
                  {content.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#D70000] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${content.email}`} className="text-neutral-400 hover:text-[#D70000] transition-colors">
                  {content.email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span>Information</span>
              <div className="h-px flex-1 bg-neutral-700" />
            </h3>
            <ul className="space-y-2 text-sm">
              {content.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-[#D70000] transition-colors inline-flex items-center gap-2">
                    <span>{link.label}</span>
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span>Quick Links</span>
              <div className="h-px flex-1 bg-neutral-700" />
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#company" className="text-neutral-400 hover:text-[#D70000] transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-neutral-400 hover:text-[#D70000] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-neutral-400 hover:text-[#D70000] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#catalogues" className="text-neutral-400 hover:text-[#D70000] transition-colors">
                  Manuals
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-400 hover:text-[#D70000] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">{content.copyright}</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">Made with</span>
              <span className="text-[#D70000]">❤</span>
              <span className="text-xs text-neutral-500">in Armenia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


