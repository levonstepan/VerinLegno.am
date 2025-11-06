import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { enContent } from "../../shared/content";

export default function TermsOfService() {
  return (
    <div className="min-h-screen relative bg-white">
      <Header locale="en" />
      <main className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900">
            Terms of Service
          </h1>
          
          <p className="text-neutral-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">1. Acceptance of Terms</h2>
            <p className="text-neutral-700 mb-4">
              By accessing and using the website verinlegno.am (the "Website"), operated by Roots Furniture LLC ("we," "our," or "us"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">2. Use of the Website</h2>
            <h3 className="text-xl font-medium mb-3 text-neutral-800">2.1 Permitted Use</h3>
            <p className="text-neutral-700 mb-4">
              You may use our Website for lawful purposes only. You agree to use the Website in accordance with all applicable laws and regulations.
            </p>

            <h3 className="text-xl font-medium mb-3 text-neutral-800">2.2 Prohibited Activities</h3>
            <p className="text-neutral-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Use the Website in any way that violates any applicable law or regulation</li>
              <li>Transmit any malicious code, viruses, or harmful components</li>
              <li>Attempt to gain unauthorized access to any portion of the Website</li>
              <li>Interfere with or disrupt the Website or servers connected to the Website</li>
              <li>Use automated systems to access the Website without permission</li>
              <li>Reproduce, duplicate, copy, or exploit any portion of the Website without express written permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">3. Intellectual Property Rights</h2>
            <p className="text-neutral-700 mb-4">
              All content on this Website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Roots Furniture LLC, VerinLegno S.p.A., or their respective content suppliers and is protected by international copyright and trademark laws.
            </p>
            <p className="text-neutral-700 mb-4">
              You may not modify, publish, transmit, participate in the transfer or sale of, create derivative works from, or in any way exploit any of the content, in whole or in part, without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">4. Product Information</h2>
            <p className="text-neutral-700 mb-4">
              We strive to provide accurate product information, descriptions, and specifications. However, we do not warrant that product descriptions, prices, or other content on the Website is accurate, complete, reliable, current, or error-free.
            </p>
            <p className="text-neutral-700 mb-4">
              Product images are for illustrative purposes only and may not reflect the exact appearance of the product. Colors and specifications may vary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">5. User Accounts and Information</h2>
            <p className="text-neutral-700 mb-4">
              If you provide information to us through our Website, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of any account information and passwords.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">6. Third-Party Links</h2>
            <p className="text-neutral-700 mb-4">
              Our Website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p className="text-neutral-700 mb-4">
              You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such third-party content, goods, or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">7. Disclaimer of Warranties</h2>
            <p className="text-neutral-700 mb-4">
              THE WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-neutral-700 mb-4">
              We do not warrant that the Website will be uninterrupted, secure, or error-free, or that defects will be corrected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">8. Limitation of Liability</h2>
            <p className="text-neutral-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ROOTS FURNITURE LLC, ITS AFFILIATES, OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE WEBSITE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">9. Indemnification</h2>
            <p className="text-neutral-700 mb-4">
              You agree to defend, indemnify, and hold harmless Roots Furniture LLC and its affiliates from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Website or your violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">10. Governing Law</h2>
            <p className="text-neutral-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Armenia, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">11. Changes to Terms</h2>
            <p className="text-neutral-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="text-neutral-700 mb-4">
              By continuing to access or use our Website after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">12. Contact Information</h2>
            <p className="text-neutral-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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

