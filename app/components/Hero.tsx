import Link from "next/link";

export function Hero({
  content,
}: {
  content: Readonly<{
    title: string;
    subtitle: string;
    cta: string;
    ctaLink: string;
  }>;
}) {
  return (
    <section className="relative bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed">
            {content.subtitle}
          </p>
          <Link
            href={content.ctaLink}
            className="inline-block bg-[#D70000] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            {content.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

