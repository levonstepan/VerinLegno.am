import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { hyContent } from "../../../shared/content";

export default function LegalNotesArm() {
  const content = hyContent.legalNotes;
  
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
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.companyInfo.title}</h2>
            <div className="bg-neutral-50 p-6 rounded-lg mb-4">
              <p className="text-neutral-700 mb-2"><strong>{content.sections.companyInfo.rootsTitle}</strong></p>
              <p className="text-neutral-700 mb-2">{content.sections.companyInfo.rootsDescription}</p>
              <p className="text-neutral-700 mb-2">{content.sections.companyInfo.rootsAddress}</p>
              <p className="text-neutral-700 mb-2">{content.sections.companyInfo.rootsCity}</p>
              <p className="text-neutral-700 mb-2">Էլ. փոստ: <a href={`mailto:${content.sections.companyInfo.rootsEmail}`} className="text-[#D70000] hover:underline">{content.sections.companyInfo.rootsEmail}</a></p>
              <p className="text-neutral-700">Հեռախոս: <a href={`tel:${content.sections.companyInfo.rootsPhone.replace(/\s/g, '')}`} className="text-[#D70000] hover:underline">{content.sections.companyInfo.rootsPhone}</a></p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-700 mb-2"><strong>{content.sections.companyInfo.verinlegnoTitle}</strong></p>
              <p className="text-neutral-700 mb-2">{content.sections.companyInfo.verinlegnoDescription}</p>
              <p className="text-neutral-700">{content.sections.companyInfo.verinlegnoInfo}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.websiteOwnership.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.websiteOwnership.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.trademarks.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.trademarks.content}
            </p>
            <p className="text-neutral-700 mb-4">
              {content.sections.trademarks.additionalContent}
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
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.limitation.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.limitation.content}
            </p>
            <p className="text-neutral-700 mb-4">
              {content.sections.limitation.additionalContent}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.externalLinks.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.externalLinks.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.applicableLaw.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.applicableLaw.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.modifications.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.modifications.content}
            </p>
            <p className="text-neutral-700 mb-4">
              {content.sections.modifications.additionalContent}
            </p>
          </section>
        </div>
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}

