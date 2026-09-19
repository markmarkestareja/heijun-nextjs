import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductHotelAmenities } from "@/data/ProductHotelAmenities";

import type { ProductCategory } from "@/types/product";
import { ButtonPrimary } from "@/components/ui/button";
import Footer from "@/components/Footer";

const products: Record<ProductCategory, typeof ProductHotelAmenities> = {
  "hotel-amenities" : ProductHotelAmenities,
}

type Props = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata>{
  const { category, slug } = await params;

  if (!(category in products)){
    return {};
  }

  const productList = products[category as ProductCategory];

  const product = productList.find(
    (product) => product.productLink === slug
  );

  if (!product){
    return{};
  }

  return{
    title: product.metaTitle ?? product.productName,
    description: product.metaDescription ?? product.productDescription,
  };
}

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
    <>
      <section className="border pt-25! bg-yellow1 flex flex-col justify-center items-center lg:items-start">
        <p className="mb-4">
          <Link href={`/product/${category}`}>{category}</Link> / {product.productName}
        </p>
        <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <div className="top-0 flex-1 max-w-150 h-auto bg-yellow2 shadow-[inset_2px_2px_8px_0_rgba(0,0,0,0.25)] border-2 border-yellow3">
            <Image 
              src={`/images/product/${category}/${product.productImage}.webp`}
              alt={product.productImageAlt}
              width={1000}
              height={1000}
              className="object-contain h-auto w-full"
            />
          </div>
          <div className="flex-1 p-4 flex flex-col justify-start item-center lg:items-start gap-6">
            <h1 className="m-0!">
              {product.productName}
            </h1>
            <p>
              {product.productDescription}
            </p>

            {product.productDetails && (
              <div className="flex flex-col gap-3 text-start">
                {product.productDetails.map((detail) => (
                  <p key={detail.label}>
                    <strong>{detail.label}: </strong>
                    {detail.value}
                  </p>
                ))}
              </div>
            )}

            <ButtonPrimary link="/contact" label="Inquire about this product" />
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
}