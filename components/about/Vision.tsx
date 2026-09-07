import React from "react";
import Image from "next/image";

export default function Vision() {
  return (
    <section className="flex flex-col lg:flex-row gap-9 items-center">
      <div className="relative w-full h-75 lg:h-100 flex-1">
        <Image
          src="/images/gallery/body-wash-shampoo-conditioner-hotel-soap.webp"
          alt="Bathroom amenities including Body Wash, Shampoo, and Conditioner Hotel Soap"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4 text-center flex-1">
        <h2>Vision</h2>
        <p>
          To be the leading provider of hotel supplies and be the trusted
          partners and be the brand of choice in creating the face of their
          business.
        </p>
      </div>
    </section>
  );
}
