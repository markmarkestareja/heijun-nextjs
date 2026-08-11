import Marquee from "react-fast-marquee";
import { Brands } from "../data/Brands";
import Image from "next/image";

export default function BrandLogos() {
  return (
    <section 
      className="
        flex 
        flex-col 
        gap-9
        bg-[linear-gradient(to_top_left,#af821d,#dbc774,#eff0b9)]
        ">
      <h2>Brands Who Trust Us</h2>

      <Marquee>
        {Brands.map((brand) => (
          <div
            key={brand.name}
            className="w-32 h-20 mx-4 flex items-center justify-center shrink-0"
          >
            <Image
              src={`/images/brands/${brand.logo}`}
              alt={brand.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}