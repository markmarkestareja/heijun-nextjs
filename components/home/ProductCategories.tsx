import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProductCategoriesData } from "@/data/ProductCategories";
import Link from "next/link";

export default function ProductCategories() {
  return (
    <section
      className="
        flex
        flex-col
        gap-9"
    >
      <div className="flex flex-col gap-2">
        <h2>Our Products</h2>
        <p>
          Discover a complete range of premium hotel supplies designed to
          elevate every guest experience. From luxurious pillows and linens to
          essential amenities, housekeeping tools, and elegant lobby accents,
          our carefully curated selection ensures comfort, style, and lasting
          quality for your property.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ProductCategoriesData.map((productCategory, index) => (
          <Link href="/about" key={index}>
            <Card className="relative mx-auto w-full h-full pt-0">
              <div className="h-auto w-full relative aspect-video overflow-hidden">
                <Image
                  src={`/images/home/categories-image/${productCategory.image}`}
                  alt={productCategory.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-all dark:brightness-40"
                />
              </div>
              <CardHeader>
                <CardTitle
                  className="text-xl md:text-2xl font-bold"
                >{productCategory.title}</CardTitle>
                <CardDescription
                  className="text-sm md:text-base lg:text-lg text-dark-muted"
                >{productCategory.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
