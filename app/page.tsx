import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Catalogues } from "./components/Catalogues";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { hyContent } from "./shared/content";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="hy" />
      <main>
        <Hero content={hyContent.hero} />
        <Products content={hyContent.products} />
        <Catalogues content={hyContent.catalogues} />
        <Services content={hyContent.services} />
        <About content={hyContent.about} />
        <Contact content={hyContent.contact} />
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}
