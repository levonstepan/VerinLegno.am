import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { enContent } from "../../shared/content";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative bg-white">
      <Header locale="en" />
      <main className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900">
            Privacy Policy
          </h1>
          
          <p className="text-neutral-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">1. Introduction</h2>
            <p className="text-neutral-700 mb-4">
              Roots Furniture LLC ("we," "our," or "us") operates the website verinlegno.am (the "Website"). This Privacy Policy explains our practices regarding information on our Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">2. No Data Collection</h2>
            <p className="text-neutral-700 mb-4">
              We do not collect, store, or process any personal data from visitors to our Website. Our Website is purely informational and does not include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Contact forms that collect personal information</li>
              <li>User accounts or registration systems</li>
              <li>Newsletter subscriptions</li>
              <li>Analytics or tracking cookies</li>
              <li>Third-party data collection services</li>
            </ul>
            <p className="text-neutral-700">
              If you contact us directly via email or phone using the contact information provided on our Website, any information you share will be handled in accordance with standard business practices and will not be stored on our Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">3. Cookies</h2>
            <p className="text-neutral-700 mb-4">
              Our Website does not use cookies or similar tracking technologies. Your visit to our Website does not leave any tracking information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">4. Third-Party Links</h2>
            <p className="text-neutral-700 mb-4">
              Our Website may contain links to third-party websites (such as PDF documents or external resources). We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">5. Changes to This Privacy Policy</h2>
            <p className="text-neutral-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">6. Contact Us</h2>
            <p className="text-neutral-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-700 mb-2"><strong>Roots Furniture LLC</strong></p>
              <p className="text-neutral-700 mb-2">20/1 Ter-Gabrielyan Street, Vagharshapat</p>
              <p className="text-neutral-700 mb-2">Yerevan, Armenia</p>
              <p className="text-neutral-700 mb-2">Email: <a href="mailto:info@roots.am" className="text-[#D70000] hover:underline">info@roots.am</a></p>
              <p className="text-neutral-700">Phone: <a href="tel:+37491665520" className="text-[#D70000] hover:underline">+374 91 665520</a></p>
            </div>
          </section>
        </div>
      </main>
      <Footer content={enContent.footer} />
    </div>
  );
}
