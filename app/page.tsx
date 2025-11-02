import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Catalogues } from "./components/Catalogues";
import { Services } from "./components/Services";`nimport { Workshops } from "./components/Workshops";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { enContent } from "./shared/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="en" />
      <main>
        <Hero content={enContent.hero} />
        <Products content={enContent.products} />
        <Catalogues content={enContent.catalogues} />
        <Services content={enContent.services} />`n        <Workshops content={enContent.workshops} />
        <About content={enContent.about} />
        <Contact content={enContent.contact} />
      </main>
      <Footer content={enContent.footer} />
    </div>
  );
}

