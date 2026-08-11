import Image from "next/image";
import React from "react";

export default function Offer() {
  return (
    <section
        className="
            flex
            flex-col
            gap-9
        "
    >
      <div 
        className="
            flex 
            flex-col 
            gap-2
            text-center
            ">
        <h2>What We Offer</h2>
        <p>
          We are your trusted partner in hospitality, providing everything your
          property~ needs—from linens and amenities to housekeeping and service
          equipment. Our curated selection ensures consistent quality and value
          for every business needs.
        </p>
      </div>
      <div 
        className="
            w-full
            h-[30vh] md:h-[50vh] lg:h-[70vh]
            overflow-hidden
            relative
            rounded-lg
            ">
        <Image
          src="/images/home/bottle-container.webp"
          alt="Offer"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
