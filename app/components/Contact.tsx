"use client";

export function Contact({
  content,
}: {
  content: Readonly<{
    title: string;
    rootsTitle: string;
    rootsText: string;
    address: string;
    phone: string;
    ceoName?: string;
    email: string;
    newsletterTitle?: string;
    newsletterText?: string;
  }>;
}) {
  return (
    <section id="contact" className="py-8 md:py-12 bg-white relative">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-10 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg min-h-[400px] flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">{content.rootsTitle}</h3>
            <p className="text-neutral-700 mb-8 leading-relaxed">{content.rootsText}</p>
            
            <div className="space-y-6 flex-grow">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D70000]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D70000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Address</div>
                  <div className="text-neutral-700">{content.address}</div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D70000]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D70000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Phone</div>
                  <a 
                    href={`tel:${content.phone}`} 
                    className="text-[#D70000] hover:underline transition-all"
                  >
                    {content.phone}
                  </a>
                  {content.ceoName && (
                    <div className="text-neutral-600 mt-1 text-sm">{content.ceoName}</div>
                  )}
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D70000]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D70000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">Email</div>
                  <a 
                    href={`mailto:${content.email}`} 
                    className="text-[#D70000] hover:underline transition-all"
                  >
                    {content.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white rounded-2xl border-2 border-neutral-200 shadow-lg overflow-hidden min-h-[400px]">
            <div className="h-full min-h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6097.289334478398!2d44.330187!3d40.1724645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a959d3f8e0701%3A0x4f3c4dcd7d2a4d07!2sRoots%20Furniture!5e0!3m2!1sen!2sam!4v1762201646766!5m2!1sen!2sam"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Roots Furniture Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


