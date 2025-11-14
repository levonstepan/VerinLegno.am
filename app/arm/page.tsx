import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Catalogues } from "../components/Catalogues";
import { Services } from "../components/Services";
import { Workshops } from "../components/Workshops";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { hyContent } from "../shared/content";

export default function HomeArm() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="arm" />
      <main>
        <Hero content={hyContent.hero} locale="arm" />
        <Products content={hyContent.products} locale="arm" />
        <Catalogues content={hyContent.catalogues} locale="arm" />
        <Services content={hyContent.services} locale="arm" />
        <About content={hyContent.about} locale="arm" />
        <Workshops content={hyContent.workshops} locale="arm" />
        <Contact content={hyContent.contact} locale="arm" />
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}

