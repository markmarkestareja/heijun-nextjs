import ProductCard from "@/components/product/ProductCard";

export default function page() {
  return (
    <section className="pt-25! lg:pt-30! border flex flex-col gap-9">
      <h1>Product Page</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
        <ProductCard productCategory="HotelAmenities" />
      </div>
    </section>
  );
}
