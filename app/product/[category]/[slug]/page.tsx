import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductHotelAmenities } from "@/data/ProductHotelAmenities";

import type { ProductCategory } from "@/types/product";

const products: Record<ProductCategory, typeof ProductHotelAmenities> = {
  "hotel-amenities" : ProductHotelAmenities,
}

type Props = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;

  if(!(category in products)) {
    notFound();
  }

  const productList = products[category as ProductCategory];

  const product = productList.find(
    (product) => product.productLink === slug
  );

  if(!product){
    notFound();
  }


  return (
    <section className="border pt-25! bg-yellow1">
      <p className="mb-4">
        <Link href={`/product/${category}`}>{category}</Link> / {product.productName}
      </p>
      <div className="relative flex flex-col lg:flex-row justify-center items-start">
        <div className="top-0 flex-1 max-w-150 h-auto bg-yellow2 shadow-[inset_2px_2px_2px_0_rgba(0,0,0,0.25)] border-2 border-yellow3">
          <Image 
            src={`/images/product/${category}/${product.productImage}.webp`}
            alt={product.productImageAlt}
            width={1000}
            height={1000}
            className="object-contain h-auto w-full"
          />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-start items-start gap-6">
          <h1 className="m-0!">
            {product.productName}
          </h1>
          <p>
            {product.productDescription}
          </p>

          {product.productDetails && (
            <div className="flex flex-col gap-3">
              {product.productDetails.map((detail) => (
                <p key={detail.label}>
                  <strong>{detail.label}: </strong>
                  {detail.value}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}