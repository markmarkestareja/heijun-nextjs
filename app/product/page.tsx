import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductHotelAmenities } from "@/data/ProductHotelAmenities";

export default function page() {
  return (
    <section className="pt-20! border">
      <h1>Product Page</h1>
      <div>
        {ProductHotelAmenities.map((product, index) => (
          <Card className="border" key={index}>
            <div className="w-fill">
              <Image
                src={`/images/product/hotel-amenities/${product.productImage}.webp`}
                alt={product.productImageAlt}
                width={500}
                height={500}
              />
            </div>
            <CardHeader>
              <CardTitle>{product.productName}</CardTitle>
              <CardDescription>
                {product.productDescription}
              </CardDescription>
              <Link
                href={product.productLink}
                className="flex items-center"
              >
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
      </div>
    </section>
  );
}
