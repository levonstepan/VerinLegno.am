export function Footer({
  content,
}: {
  content: Readonly<{
    companyInfo: string;
    address: string;
    email: string;
    phone: string;
    links: ReadonlyArray<{ label: string; href: string }>;
    copyright: string;
  }>;
}) {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Contatti</h3>
            <div className="space-y-2 text-sm">
              <p>{content.address}</p>
              <p>
                <a href={`mailto:${content.email}`} className="hover:text-white">
                  {content.email}
                </a>
              </p>
              <p>
                <a href={`tel:${content.phone}`} className="hover:text-white">
                  {content.phone}
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Info</h3>
            <ul className="space-y-2 text-sm">
              {content.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <p className="text-sm">{content.companyInfo}</p>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-sm text-center">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
}

