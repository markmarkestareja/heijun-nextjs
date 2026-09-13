import ProductCard from "@/components/product/ProductCard";
import { notFound } from "next/navigation";
import type { ProductCategory } from "@/types/product";

const categories: Record<string, ProductCategory> = {
  "hotel-amenities": "HotelAmenities",
} as const;

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params;

  const productCategory = categories[
    category as keyof typeof categories
  ];

  if (!productCategory) {
    notFound();
  }

  return (
    <section className="pt-25! lg:pt-30! border flex flex-col gap-9">
      <h1>{category.replaceAll("-", " ")}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
        <ProductCard productCategory={productCategory} />
      </div>
    </section>
  );
}