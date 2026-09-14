import { notFound } from "next/navigation";
import type { ProductCategory } from "@/types/product";
import { ProductHotelAmenities } from "@/data/ProductHotelAmenities";
import { ProductLinenTowel } from "@/data/ProductLinenTowel";

const categories: Record<string, ProductCategory> = {
  "hotel-amenities": "HotelAmenities",
  "linens-and-towels": "LinenTowel",
};

const products = {
  HotelAmenities: ProductHotelAmenities,
  LinenTowel: ProductLinenTowel,
};

type Props = {
  params: Promise<{
    category: string;
    productLink: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { category, productLink } = await params;

  const productCategory =
    categories[category as keyof typeof categories];

  if (!productCategory) {
    notFound();
  }

  const product = products[productCategory].find(
    (product) => product.productLink === productLink
  );

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.productName}</h1>

      {/* Product image */}
      {/* Product description */}
      {/* Product details */}
    </main>
  );
}