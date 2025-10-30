import Link from "next/link";

export function Services({
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
  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
            <h3 className="text-xl font-semibold text-[#D70000] mb-4">{content.subtitle}</h3>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              {content.description}
            </p>
            <Link
              href={content.ctaLink}
              className="inline-block bg-[#D70000] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {content.cta}
            </Link>
          </div>
          <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
            <div className="aspect-video bg-white rounded flex items-center justify-center text-neutral-400">
              Verinchrome System
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

