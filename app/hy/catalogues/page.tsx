import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Catalogues } from "../../components/Catalogues";
import { hyContent } from "../../shared/content";

export default function CataloguesPageHy() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="hy" />
      <main className="pt-20">
        <Catalogues content={hyContent.catalogues} showAll={true} />
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}

