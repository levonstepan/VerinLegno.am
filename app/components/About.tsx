"use client";

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
    <section id="company" className="py-8 md:py-12 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden wood-grain-oak">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* VerinLegno Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D70000] to-[#b30000] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Flag icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D70000] via-[#008C45] to-white flex items-center justify-center shadow-md">
                  <span className="text-2xl">🇮🇹</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">{content.verinlegnoTitle}</h3>
                  <div className="text-sm text-neutral-600">Est. 1983 • Italy</div>
                </div>
              </div>
              
              <p className="text-neutral-700 leading-relaxed mb-6">{content.verinlegnoText}</p>
              
              {/* Timeline milestones */}
              <div className="space-y-3 pt-6 border-t border-neutral-200">
                {[
                  { year: "1983", event: "Company Founded" },
                  { year: "40+", event: "Years of Innovation" },
                  { year: "50+", event: "Countries Worldwide" }
                ].map((milestone, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D70000]/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#D70000]">{milestone.year}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{milestone.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Roots Furniture Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Armenia flag icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D90012] via-[#0033A0] to-[#F2A800] flex items-center justify-center shadow-md">
                  <span className="text-2xl">🇦🇲</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">{content.rootsTitle}</h3>
                  <div className="text-sm text-neutral-600">Official Representative</div>
                </div>
              </div>
              
              <p className="text-neutral-700 leading-relaxed mb-6">{content.rootsText}</p>
              
              {content.acobianNote && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-blue-800 italic">{content.acobianNote}</p>
                  </div>
                </div>
              )}
              
              {/* Partnership badge */}
              <div className="flex items-center gap-3 pt-6 border-t border-neutral-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D70000]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D70000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Certified Partnership</div>
                  <div className="text-xs text-neutral-600">Exclusive Armenia Distributor</div>
                </div>
              </div>
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


