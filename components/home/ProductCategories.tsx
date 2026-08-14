import Image from "next/image";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCategories() {
  return (
    <section
      className="
        border"
    >
      <div>
        <h2>Our Products</h2>
        <p>
          Discover a complete range of premium hotel supplies designed to
          elevate every guest experience. From luxurious pillows and linens to
          essential amenities, housekeeping tools, and elegant lobby accents,
          our carefully curated selection ensures comfort, style, and lasting
          quality for your property.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/images/home/categories-image/amenities.webp"
              alt="Event cover"
              fill
              className="object-cover transition-all dark:brightness-40"
            />
          </div>
          <CardHeader>
            <CardAction></CardAction>
            <CardTitle>Hotel Amenities</CardTitle>
            <CardDescription>
              Delight your guests with premium hotel essentials such as
              toiletries, bath kits, and spa-inspired items designed to elevate
              their stay and reflect your brand’s hospitality.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            {/* <Button className="w-full">View Event</Button> */}
          </CardFooter>
        </Card>

        
      </div>
    </section>
  );
}
