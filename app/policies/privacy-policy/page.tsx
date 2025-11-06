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
              Roots Furniture LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website verinlegno.am (the "Website").
            </p>
            <p className="text-neutral-700">
              By using our Website, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3 text-neutral-800">2.1 Personal Information</h3>
            <p className="text-neutral-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Contact us through our contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our products or services</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-neutral-700 mb-4">
              This information may include your name, email address, phone number, company name, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-medium mb-3 text-neutral-800">2.2 Automatically Collected Information</h3>
            <p className="text-neutral-700 mb-4">
              When you visit our Website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">3. How We Use Your Information</h2>
            <p className="text-neutral-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>To provide, maintain, and improve our Website</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you newsletters and marketing communications (with your consent)</li>
              <li>To analyze usage patterns and improve user experience</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">4. Information Sharing and Disclosure</h2>
            <p className="text-neutral-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, and email services.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">5. Data Security</h2>
            <p className="text-neutral-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">6. Your Rights</h2>
            <p className="text-neutral-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="text-neutral-700">
              To exercise these rights, please contact us using the contact information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">7. Cookies and Tracking Technologies</h2>
            <p className="text-neutral-700 mb-4">
              Our Website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse cookies, but this may limit some functionality of the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">8. Third-Party Links</h2>
            <p className="text-neutral-700 mb-4">
              Our Website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">9. Children's Privacy</h2>
            <p className="text-neutral-700 mb-4">
              Our Website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">10. Changes to This Privacy Policy</h2>
            <p className="text-neutral-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-900">11. Contact Us</h2>
            <p className="text-neutral-700 mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

