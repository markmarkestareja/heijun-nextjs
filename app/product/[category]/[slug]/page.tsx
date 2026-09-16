import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;

  // Later: find the product using category + slug

  return (
    <section className="border pt-25!">
      <p>Breadcrumb</p>
      <div className="relative flex flex-col lg:flex-row justify-center items-start">
        <div className="top-0 flex-1 max-w-150 h-auto">
          <Image 
            src="/images/product/hotel-amenities/bath-soap.webp"
            alt="Bath Soap"
            width={1000}
            height={1000}
            className="object-contain h-auto w-full"
          />
        </div>
        <div className="flex-1 pt-4">
          <h1>Bath Soap</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, sequi.</p>

          <div>
            <p>
              <strong>Shapes: </strong>
              Round and Square for Otmeal Soap
            </p>
            <p>
              <strong>Available Scents: </strong>
              Nature and Green Tea
            </p>
            <p>
              <strong>Weight: </strong>
              20g | 15g | 12g
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}