import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Catalogues } from "../../components/Catalogues";
import { hyContent } from "../../shared/content";

export default function CataloguesPageArm() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="arm" />
      <main className="pt-20">
        <Catalogues content={hyContent.catalogues} showAll={true} locale="arm" />
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}

