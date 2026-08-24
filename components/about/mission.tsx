import Image from "next/image";
import React from "react";

export default function mission() {
  return (
    <section className="flex flex-col lg:flex-row-reverse gap-9 items-center">
      <div className="relative w-full h-75 lg:h-100 flex-1">
        <Image
          src="/images/home/main-cta-img.webp"
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 text-center flex-1">
        <h2>Mission</h2>
        <p>
          To deliver flexibility and value through our wide range of hotel
          supplies, spanning across all levels of luxury and quality.
        </p>
      </div>
    </section>
  );
}
