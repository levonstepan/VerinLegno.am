export function Catalogues({
  content,
}: {
  content: Readonly<{
    title: string;
    items: ReadonlyArray<{
      name: string;
      href: string;
    }>;
    cta: string;
  }>;
}) {
  return (
    <section id="catalogues" className="py-16 md:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {content.title}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {content.items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group p-6 rounded-lg border border-neutral-200 bg-white hover:border-[#D70000] hover:shadow-md transition-all"
            >
              <h3 className="font-semibold mb-2 group-hover:text-[#D70000]">
                {item.name}
              </h3>
              <span className="text-sm text-[#D70000] inline-flex items-center gap-1">
                {content.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

