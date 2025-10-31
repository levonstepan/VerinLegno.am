"use client";
import { useState } from "react";

export function Contact({
  content,
}: {
  content: Readonly<{
    title: string;
    rootsTitle: string;
    rootsText: string;
    address: string;
    phone: string;
    email: string;
    newsletterTitle?: string;
    newsletterText?: string;
  }>;
}) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D70000]/3 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl -z-10" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D70000]/10 rounded-full border border-[#D70000]/20">
            <span className="text-sm font-medium text-[#D70000]">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {content.title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">{content.rootsTitle}</h3>
              <p className="text-neutral-700 mb-8 leading-relaxed">{content.rootsText}</p>
              
              <div className="space-y-6">
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
            
            {/* Newsletter */}
            {content.newsletterTitle && (
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-6 border-2 border-neutral-200">
                <h3 className="text-xl font-bold mb-2 text-neutral-900">{content.newsletterTitle}</h3>
                <p className="text-neutral-700 mb-4 text-sm">{content.newsletterText}</p>
                <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); }}>
                  <input
                    type="email"
                    placeholder={content.email}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D70000] focus:border-[#D70000] transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#D70000] text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#D70000]/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            )}
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D70000] focus:border-[#D70000] transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D70000] focus:border-[#D70000] transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D70000] focus:border-[#D70000] transition-all resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  submitted
                    ? "bg-green-500 text-white"
                    : isSubmitting
                    ? "bg-neutral-400 text-white cursor-not-allowed"
                    : "bg-[#D70000] text-white hover:shadow-xl hover:shadow-[#D70000]/20 hover:scale-[1.02]"
                }`}
              >
                {submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message Sent!
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


