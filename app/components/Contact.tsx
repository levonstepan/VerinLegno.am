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
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.title}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">{content.rootsTitle}</h3>
                <p className="text-neutral-700 mb-4">{content.rootsText}</p>
              </div>
              <div className="space-y-2 text-neutral-700">
                <p>{content.address}</p>
                <p>
                  <a href={`tel:${content.phone}`} className="hover:text-[#D70000]">
                    {content.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${content.email}`} className="hover:text-[#D70000]">
                    {content.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          {content.newsletterTitle && (
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <h3 className="text-xl font-semibold mb-2">{content.newsletterTitle}</h3>
              <p className="text-neutral-700 mb-4">{content.newsletterText}</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder={content.email}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D70000]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D70000] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

