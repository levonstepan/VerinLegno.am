import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { hyContent } from "../../../shared/content";

export default function PrivacyPolicyArm() {
  const content = hyContent.privacyPolicy;
  
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
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.introduction.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.introduction.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.noDataCollection.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.noDataCollection.content}
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              {content.sections.noDataCollection.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-neutral-700">
              {content.sections.noDataCollection.additionalContent}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.cookies.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.cookies.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.thirdPartyLinks.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.thirdPartyLinks.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.changes.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.changes.content}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">{content.sections.contact.title}</h2>
            <p className="text-neutral-700 mb-4">
              {content.sections.contact.content}
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-700 mb-2"><strong>{content.sections.contact.company}</strong></p>
              <p className="text-neutral-700 mb-2">{content.sections.contact.address}</p>
              <p className="text-neutral-700 mb-2">{content.sections.contact.city}</p>
              <p className="text-neutral-700 mb-2">Էլ. փոստ: <a href={`mailto:${content.sections.contact.email}`} className="text-[#D70000] hover:underline">{content.sections.contact.email}</a></p>
              <p className="text-neutral-700">Հեռախոս: <a href={`tel:${content.sections.contact.phone.replace(/\s/g, '')}`} className="text-[#D70000] hover:underline">{content.sections.contact.phone}</a></p>
            </div>
          </section>
        </div>
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}

