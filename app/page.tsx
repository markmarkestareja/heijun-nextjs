import Hero from "@/components/home/Hero";
import BrandLogos from "@/components/BrandLogos";
import Offer from "@/components/home/Offer";
import ProductCategories from "@/components/home/ProductCategories";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandLogos />
      <Offer />
      <ProductCategories />
    </div>
  );
}
