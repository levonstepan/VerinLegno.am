import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Products } from "../../components/Products";
import { hyContent } from "../../shared/content";

export default function ProductsPageArm() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="arm" />
      <main className="pt-20">
        <Products content={hyContent.products} showAll={true} locale="arm" />
      </main>
      <Footer content={hyContent.footer} />
    </div>
  );
}

