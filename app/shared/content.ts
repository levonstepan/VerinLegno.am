export const hyContent = {
  hero: {
    title: "VerinLegno in Armenia",
    subtitle:
      "Verinlegno Spa, founded in Massa e Cozzile in 1975 — high-technology, reliable and increasingly green coatings for wood, metal and glass. Roots Furniture LLC — official representative in Armenia.",
    cta: "Discover more",
    ctaLink: "#products",
  },
  products: {
    title: "Product Catalogues",
    subtitle: "High technology, reliability and sustainability",
    items: [
      { name: "Special effects", href: "/catalogues/Crystal-epox_ENG.pdf", image: "/images/catalogues/Crystal Epox.jpeg", pdf: "/catalogues/Crystal-epox_ENG.pdf" },
      { name: "Water-based exterior", href: "/catalogues/WOOD-OIL.pdf", image: "/images/catalogues/Wood oil.jpeg", pdf: "/catalogues/WOOD-OIL.pdf" },
      { name: "Water-based interior", href: "/catalogues/Stains.pdf", image: "/images/catalogues/Stains.jpeg", pdf: "/catalogues/Stains.pdf" },
      { name: "Fire retardant", href: "/catalogues/Firefighter.pdf", image: "/images/catalogues/Firefighter.png", pdf: "/catalogues/Firefighter.pdf" },
      { name: "Metal", href: "#products" },
      { name: "Parquet", href: "/catalogues/Parquet.pdf", image: "/images/catalogues/Parquet.png", pdf: "/catalogues/Parquet.pdf" },
      { name: "Special products", href: "/catalogues/UNICOL 2023.pdf", image: "/images/catalogues/Special Effects.png", pdf: "/catalogues/UNICOL 2023.pdf" },
      { name: "Solvent exterior", href: "/catalogues/VERIN-SEA FINISHING.pdf", image: "/images/catalogues/Verin-Sea Finishing.png", pdf: "/catalogues/VERIN-SEA FINISHING.pdf" },
      { name: "Solvent interior", href: "#products" },
      { name: "Glass", href: "#products" },
    ] as const,
  },
  catalogues: {
    title: "Technical Documents",
    items: [
      // All 6 manuals - first 4 shown on main page, all 6 on See more page
      { name: "G100 - VF BIANCO 310", href: "/manuals/G100 - VF BIANCO 310.pdf" },
      { name: "G490 - VF BIANCO 470", href: "/manuals/G490 - VF BIANCO 470.pdf" },
      { name: "G790 - VF A TX 2019 E", href: "/manuals/G790 - VF A TX 2019 E.pdf" },
      { name: "G930 - VF A 893", href: "/manuals/G930 - VF A 893.pdf" },
      { name: "H36025 - VPK BIANCO 260 25 GLOSS", href: "/manuals/H36025 - VPK BIANCO 260 25 GLOSS.pdf" },
      { name: "M90030 - FO FI ACRILICO LONG LIFE 30 GLOSS", href: "/manuals/M90030 - FO FI ACRILICO LONG LIFE 30 GLOSS.pdf" },
    ] as const,
    cta: "Discover all catalogues",
  },
  services: {
    title: "Verinchrome",
    subtitle: "Verinchrome",
    description:
      "The Verinchrome Tinting System allows you to reproduce with maximum reliability a wide range of pigmented bases and finishes in water and solvent, in a simple, fast and flexible way.\n\nDesigned for professionals who value precision, Verinchrome provides a smart and intuitive approach to color creation. Its high-performance pigments ensure consistent tones across various materials — wood, metal, and plastic.\n\nThe system supports both manual and automated color matching, empowering workshops, industrial users, and designers to achieve perfect results every time.",
    cta: "Access now",
    ctaLink: "#contact",
  },
  workshops: {
    label: "Professional Training",
    title: "Workshops",
    subtitle: "Professional training programs for mastering VerinLegno products and techniques",
    items: [
      {
        title: "Application Techniques",
        description:
          "Join our comprehensive workshops to learn expert application techniques, product knowledge, and best practices from industry professionals.",
        icon: "application",
      },
      {
        title: "Product Knowledge",
        description:
          "Learn about the full range of VerinLegno products, their applications, and best practices for optimal results.",
        icon: "product",
      },
      {
        title: "Color Matching",
        description:
          "Master the art of color matching and tinting with our professional training programs.",
        icon: "color",
      },
      {
        title: "Quality Control",
        description:
          "Understand quality standards and inspection techniques to ensure professional finishes every time.",
        icon: "quality",
      },
    ] as const,
    cta: "Contact us for workshops",
    ctaLink: "#contact",
  },
  about: {
    title: "VerinLegno and Roots Furniture",
    verinlegnoTitle: "VerinLegno S.p.A.",
    verinlegnoText:
      "Verinlegno is an Italian company that develops high-technology, reliable and increasingly green coatings for wood, metal, glass, interiors and exteriors. Over 40 years of experience, distribution in many countries, wide catalogue.",
    rootsTitle: "Roots Furniture LLC",
    rootsText:
      "Roots Furniture LLC is a furniture manufacturing company in Armenia, represented in the market by the Acobian Furniture brand. Roots LLC is the official / exclusive representative of VerinLegno Italy in Armenia, so the supply of VerinLegno coatings and preparation solutions in Armenia is carried out by us.",
    acobianNote: "Acobian ≈ brand, Roots ≈ company (like Apple → iPhone)",
  },
  contact: {
    title: "Contact Us",
    rootsTitle: "Roots Furniture LLC",
    rootsText: "Furniture manufacturer in Vagharshapat",
    address: "20/1 Ter-Gabrielyan Street, Vagharshapat",
    phone: "+374 91 665520",
    ceoName: "Levon Stepanyan - CEO of Roots LLC",
    email: "info@roots.am",
    newsletterTitle: "Subscribe to our newsletter!",
    newsletterText:
      "Don't miss anything about VerinLegno, read the privacy policy and subscribe to our newsletter",
  },
  footer: {
    companyInfo: "Roots Furniture LLC — Official representative of VerinLegno S.p.A. in Armenia",
    address: "Yerevan, Armenia",
    email: "info@roots.am",
    phone: "+374 91 665520",
    links: [
      { label: "Privacy Policy", href: "/policies/privacy-policy" },
      { label: "Terms of Service", href: "/policies/terms-of-service" },
      { label: "Legal Notes", href: "/policies/legal-notes" },
    ] as const,
    copyright: `© ${new Date().getFullYear()} Roots Furniture LLC - VerinLegno Armenia`,
  },
} as const;

export const enContent = {
  hero: {
    title: "VerinLegno in Armenia",
    subtitle:
      "Verinlegno Spa, founded in Massa e Cozzile in 1975 — high-technology, reliable and increasingly green coatings for wood, metal and glass. Roots Furniture LLC — official representative in Armenia.",
    cta: "Discover more",
    ctaLink: "#products",
  },
  products: {
    title: "Product Catalogues",
    subtitle: "High technology, reliability and sustainability",
    items: [
      { name: "Special effects", href: "/catalogues/Crystal-epox_ENG.pdf", image: "/images/catalogues/Crystal Epox.jpeg", pdf: "/catalogues/Crystal-epox_ENG.pdf" },
      { name: "Water-based exterior", href: "/catalogues/WOOD-OIL.pdf", image: "/images/catalogues/Wood oil.jpeg", pdf: "/catalogues/WOOD-OIL.pdf" },
      { name: "Water-based interior", href: "/catalogues/Stains.pdf", image: "/images/catalogues/Stains.jpeg", pdf: "/catalogues/Stains.pdf" },
      { name: "Fire retardant", href: "/catalogues/Firefighter.pdf", image: "/images/catalogues/Firefighter.png", pdf: "/catalogues/Firefighter.pdf" },
      { name: "Metal", href: "#products" },
      { name: "Parquet", href: "/catalogues/Parquet.pdf", image: "/images/catalogues/Parquet.png", pdf: "/catalogues/Parquet.pdf" },
      { name: "Special products", href: "/catalogues/UNICOL 2023.pdf", image: "/images/catalogues/Special Effects.png", pdf: "/catalogues/UNICOL 2023.pdf" },
      { name: "Solvent exterior", href: "/catalogues/VERIN-SEA FINISHING.pdf", image: "/images/catalogues/Verin-Sea Finishing.png", pdf: "/catalogues/VERIN-SEA FINISHING.pdf" },
      { name: "Solvent interior", href: "#products" },
      { name: "Glass", href: "#products" },
    ] as const,
  },
  catalogues: {
    title: "Technical Documents",
    items: [
      // All 6 manuals - first 4 shown on main page, all 6 on See more page
      { name: "G100 - VF BIANCO 310", href: "/manuals/G100 - VF BIANCO 310.pdf" },
      { name: "G490 - VF BIANCO 470", href: "/manuals/G490 - VF BIANCO 470.pdf" },
      { name: "G790 - VF A TX 2019 E", href: "/manuals/G790 - VF A TX 2019 E.pdf" },
      { name: "G930 - VF A 893", href: "/manuals/G930 - VF A 893.pdf" },
      { name: "H36025 - VPK BIANCO 260 25 GLOSS", href: "/manuals/H36025 - VPK BIANCO 260 25 GLOSS.pdf" },
      { name: "M90030 - FO FI ACRILICO LONG LIFE 30 GLOSS", href: "/manuals/M90030 - FO FI ACRILICO LONG LIFE 30 GLOSS.pdf" },
    ] as const,
    cta: "Discover all catalogues",
  },
  services: {
    title: "Verinchrome",
    subtitle: "Verinchrome",
    description:
      "The Verinchrome Tinting System allows you to reproduce with maximum reliability a wide range of pigmented bases and finishes in water and solvent, in a simple, fast and flexible way.\n\nDesigned for professionals who value precision, Verinchrome provides a smart and intuitive approach to color creation. Its high-performance pigments ensure consistent tones across various materials — wood, metal, and plastic.\n\nThe system supports both manual and automated color matching, empowering workshops, industrial users, and designers to achieve perfect results every time.",
    cta: "Access now",
    ctaLink: "#contact",
  },
  workshops: {
    label: "Professional Training",
    title: "Workshops",
    subtitle: "Professional training programs for mastering VerinLegno products and techniques",
    items: [
      {
        title: "Application Techniques",
        description:
          "Join our comprehensive workshops to learn expert application techniques, product knowledge, and best practices from industry professionals.",
        icon: "application",
      },
      {
        title: "Product Knowledge",
        description:
          "Learn about the full range of VerinLegno products, their applications, and best practices for optimal results.",
        icon: "product",
      },
      {
        title: "Color Matching",
        description:
          "Master the art of color matching and tinting with our professional training programs.",
        icon: "color",
      },
      {
        title: "Quality Control",
        description:
          "Understand quality standards and inspection techniques to ensure professional finishes every time.",
        icon: "quality",
      },
    ] as const,
    cta: "Contact us for workshops",
    ctaLink: "#contact",
  },
  about: {
    title: "VerinLegno and Roots Furniture",
    verinlegnoTitle: "VerinLegno S.p.A.",
    verinlegnoText:
      "Verinlegno is an Italian company that develops high-technology, reliable and increasingly green coatings for wood, metal, glass, interiors and exteriors. Over 40 years of experience, distribution in many countries, wide catalogue.",
    rootsTitle: "Roots Furniture LLC",
    rootsText:
      "Roots Furniture LLC is a furniture manufacturing company in Armenia, represented in the market by the Acobian Furniture brand. Roots LLC is the official / exclusive representative of VerinLegno Italy in Armenia, so the supply of VerinLegno coatings and preparation solutions in Armenia is carried out by us.",
    acobianNote: "Acobian ≈ brand, Roots ≈ company (like Apple → iPhone)",
  },
  contact: {
    title: "Contact Us",
    rootsTitle: "Roots Furniture LLC",
    rootsText: "Furniture manufacturer in Vagharshapat",
    address: "20/1 Ter-Gabrielyan Street, Vagharshapat",
    phone: "+374 91 665520",
    ceoName: "Levon Stepanyan - CEO of Roots LLC",
    email: "info@roots.am",
    newsletterTitle: "Subscribe to our newsletter!",
    newsletterText:
      "Don't miss anything about VerinLegno, read the privacy policy and subscribe to our newsletter",
  },
  footer: {
    companyInfo: "Roots Furniture LLC — Official representative of VerinLegno S.p.A. in Armenia",
    address: "Yerevan, Armenia",
    email: "info@roots.am",
    phone: "+374 91 665520",
    links: [
      { label: "Privacy Policy", href: "/policies/privacy-policy" },
      { label: "Terms of Service", href: "/policies/terms-of-service" },
      { label: "Legal Notes", href: "/policies/legal-notes" },
    ] as const,
    copyright: `© ${new Date().getFullYear()} Roots Furniture LLC - VerinLegno Armenia`,
  },
} as const;
