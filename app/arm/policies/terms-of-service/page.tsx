import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { hyContent } from "../../../shared/content";

export default function TermsOfServiceArm() {
  const content = hyContent.termsOfService;
  
  return (
    <div className="min-h-screen relative bg-white">
      <Header locale="arm" />
      <main className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900">
            {content.title}
          </h1>
          
          <p className="text-neutral-600 mb-6">
            <strong>{content.lastUpdated}:</strong> {new Date().toLocaleDateString('hy-AM', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.acceptance.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.acceptance.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.useOfWebsite.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.useOfWebsite.content}
            </p>
            <p className="text-neutral-700 mb-4">{content.sections.useOfWebsite.agreement}</p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              {content.sections.useOfWebsite.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.intellectualProperty.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.intellectualProperty.content}
            </p>
            <p className="text-neutral-700 mb-4">
              {content.sections.intellectualProperty.additionalContent}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.productInformation.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.productInformation.content}
            </p>
            <p className="text-neutral-700 mb-4">
              {content.sections.productInformation.additionalContent}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.thirdPartyLinks.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.thirdPartyLinks.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.disclaimer.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.disclaimer.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.limitation.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.limitation.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.governingLaw.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.governingLaw.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.changes.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.changes.content}
            </p>
          </section>
        </div>
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}

