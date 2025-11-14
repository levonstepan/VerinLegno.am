import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Products } from "../../components/Products";
import { enContent } from "../../shared/content";

export default function ProductsPageEn() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="en" />
      <main className="pt-20">
        <Products content={enContent.products} showAll={true} locale="en" />
      </main>
      <Footer content={enContent.footer} />
    </div>
  );
}

