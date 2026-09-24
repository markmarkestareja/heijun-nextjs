import ProductCard from "@/components/product/ProductCard";
import { notFound } from "next/navigation";
import type { ProductCategory } from "@/types/product";
import Footer from "@/components/Footer";

const categories = {
  "hotel-amenities": {
    title: "Hotel Amenities",
    description: "Explore our range of hotel amenities designed to provide comfort and convenience for guests.",
  },
  "linens-and-towels":{
    title: "Linens and Towels",
    description:
      "Discover quality linens and towels designed for comfort, durability, and everyday hospitality use.",
  },
} as const;

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params;

  

  if (!(category in categories)) {
    notFound();
  }

  const productCategory = category as ProductCategory;
  const categoryData = categories[productCategory];




  return (
    <>
      <section className="pt-25! lg:pt-30! border flex flex-col gap-9 bg-yellow2 text-dark">
        <h1>{categoryData.title}</h1>
        <p>{categoryData.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
          <ProductCard productCategory={productCategory} />
        </div>
      </section>
      <Footer />
    </>
  );
}