import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Products } from "../../components/Products";
import { hyContent } from "../../shared/content";

export default function ProductsPageHy() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="hy" />
      <main className="pt-20">
        <Products content={hyContent.products} showAll={true} />
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}

