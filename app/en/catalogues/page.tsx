import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Catalogues } from "../../components/Catalogues";
import { enContent } from "../../shared/content";

export default function CataloguesPageEn() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="en" />
      <main className="pt-20">
        <Catalogues content={enContent.catalogues} showAll={true} locale="en" />
      </main>
      <Footer content={enContent.footer} />
    </div>
  );
}

