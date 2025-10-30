import Link from "next/link";

export function Products({
  content,
}: {
  content: Readonly<{
    title: string;
    subtitle: string;
    items: ReadonlyArray<{
      name: string;
      href: string;
      desc?: string;
    }>;
  }>;
}) {
  return (
    <section id="products" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {content.items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group p-6 rounded-lg border border-neutral-200 hover:border-[#D70000] hover:shadow-md transition-all bg-white"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-[#D70000]">
                {item.name}
              </h3>
              {item.desc && (
                <p className="text-sm text-neutral-600">{item.desc}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

