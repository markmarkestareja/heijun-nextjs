import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductHotelAmenities } from "@/data/ProductHotelAmenities";
import type { Product, ProductCategory } from "@/types/product";

type ProductCardProps = {
    productCategory: ProductCategory;
}

export default function ProductCard({
    productCategory,
}: ProductCardProps) {

    const products: Record<ProductCategory, Product[]> ={
        HotelAmenities: ProductHotelAmenities,
    };

    const productList = products[productCategory];
  return (
    <>
      {productList.map((product, index) => (
        <Card className="border rounded-none p-0" key={index}>
          <div className="w-fill p-4">
            <Image
              src={`/images/product/hotel-amenities/${product.productImage}.webp`}
              alt={product.productImageAlt}
              width={500}
              height={500}
            />
          </div>
          <CardHeader className="flex flex-col justify-between h-full p-4">
            <div className="flex flex-col gap-2">
              <CardTitle>{product.productName}</CardTitle>
              <CardDescription className="hidden lg:block">{product.productDescription}</CardDescription>
            </div>
            <Link href={product.productLink} className="flex items-center mt-4">
              VIEW THIS PRODUCT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.483 4.47a.75.75 0 0 1 1.06 0l6.988 7a.75.75 0 0 1 0 1.06l-6.988 7a.75.75 0 0 1-1.061-1.06l5.709-5.719L3 12.762a.75.75 0 0 1-.002-1.5l16.194-.01l-5.711-5.722a.75.75 0 0 1 0-1.06"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
