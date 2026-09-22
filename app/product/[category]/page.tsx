import ProductCard from "@/components/product/ProductCard";
import { notFound } from "next/navigation";
import type { ProductCategory } from "@/types/product";

const categories: ProductCategory[] = [
  "hotel-amenities",
];

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params;

  if (!categories.includes(category as ProductCategory)) {
    notFound();
  }

  const productCategory = category as ProductCategory;

  if (!productCategory) {
    notFound();
  }

  return (
    <section className="pt-25! lg:pt-30! border flex flex-col gap-9 bg-yellow2 text-dark">
      <h1>{category.replaceAll("-", " ")}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem officia quisquam quia atque qui nihil?</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
        <ProductCard productCategory={productCategory} />
      </div>
    </section>
  );
}