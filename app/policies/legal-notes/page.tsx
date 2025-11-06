import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { enContent } from "../../shared/content";

export default function LegalNotes() {
  return (
    <div className="min-h-screen relative bg-white">
      <Header locale="en" />
      <main className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900">
            Legal Notes
          </h1>
          
          <p className="text-neutral-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">1. Company Information</h2>
            <div className="bg-neutral-50 p-6 rounded-lg mb-4">
              <p className="text-neutral-700 mb-2"><strong>Roots Furniture LLC</strong></p>
              <p className="text-neutral-700 mb-2">Official representative of VerinLegno S.p.A. in Armenia</p>
              <p className="text-neutral-700 mb-2">Address: 20/1 Ter-Gabrielyan Street, Vagharshapat</p>
              <p className="text-neutral-700 mb-2">Yerevan, Armenia</p>
              <p className="text-neutral-700 mb-2">Email: <a href="mailto:info@roots.am" className="text-[#D70000] hover:underline">info@roots.am</a></p>
              <p className="text-neutral-700">Phone: <a href="tel:+37491665520" className="text-[#D70000] hover:underline">+374 91 665520</a></p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="text-neutral-700 mb-2"><strong>VerinLegno S.p.A.</strong></p>
              <p className="text-neutral-700 mb-2">Founded in Massa e Cozzile, Italy, 1975</p>
              <p className="text-neutral-700">High-technology coatings for wood, metal, and glass</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">2. Website Ownership</h2>
            <p className="text-neutral-700 mb-4">
              This website (verinlegno.am) is owned and operated by Roots Furniture LLC. All content, design, graphics, and other materials on this website are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">3. Trademarks</h2>
            <p className="text-neutral-700 mb-4">
              "VerinLegno" and related trademarks, service marks, and logos are the property of VerinLegno S.p.A. and are used with permission. "Roots Furniture" and "Acobian Furniture" are trademarks of Roots Furniture LLC.
            </p>
            <p className="text-neutral-700 mb-4">
              All other trademarks, service marks, and trade names referenced on this website are the property of their respective owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">4. Product Information</h2>
            <p className="text-neutral-700 mb-4">
              All product information, technical specifications, and documentation provided on this website are for informational purposes only. While we strive to ensure accuracy, we do not guarantee that all information is complete, current, or error-free.
            </p>
            <p className="text-neutral-700 mb-4">
              Product images are for illustrative purposes only and may not accurately represent the actual product. Colors, textures, and specifications may vary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">5. Limitation of Liability</h2>
            <p className="text-neutral-700 mb-4">
              Roots Furniture LLC and VerinLegno S.p.A. shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of information or products obtained through this website.
            </p>
            <p className="text-neutral-700 mb-4">
              Users are responsible for ensuring that products are used in accordance with manufacturer instructions and applicable safety regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">6. External Links</h2>
            <p className="text-neutral-700 mb-4">
              This website may contain links to external websites operated by third parties. We are not responsible for the content, privacy practices, or terms of use of these external websites. The inclusion of any link does not imply endorsement by Roots Furniture LLC or VerinLegno S.p.A.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">7. Applicable Law</h2>
            <p className="text-neutral-700 mb-4">
              These legal notes and all matters relating to this website shall be governed by the laws of the Republic of Armenia. Any disputes arising from or related to this website shall be subject to the exclusive jurisdiction of the courts of Armenia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">8. Data Protection</h2>
            <p className="text-neutral-700 mb-4">
              The collection, processing, and use of personal data through this website is governed by our Privacy Policy. By using this website, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">9. Modifications</h2>
            <p className="text-neutral-700 mb-4">
              Roots Furniture LLC reserves the right to modify, suspend, or discontinue any aspect of this website at any time without prior notice. We also reserve the right to update these legal notes at any time.
            </p>
            <p className="text-neutral-700 mb-4">
              Continued use of the website after any changes constitutes acceptance of the modified legal notes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">10. Contact</h2>
            <p className="text-neutral-700 mb-4">
              For any questions regarding these legal notes or the website, please contact us:
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

