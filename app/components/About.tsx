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
    <section id="company" className="py-16 md:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {content.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{content.verinlegnoTitle}</h3>
            <p className="text-neutral-700 leading-relaxed">{content.verinlegnoText}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">{content.rootsTitle}</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">{content.rootsText}</p>
            {content.acobianNote && (
              <p className="text-sm text-neutral-600 italic">{content.acobianNote}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

