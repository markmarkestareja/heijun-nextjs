import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center flex flex-col gap-5">
      <h1>Who We Are</h1>
      <div className="relative h-[50vh] w-full overflow-hidden rounded-lg">
        <Image
          src="/images/home/bottle-container.webp"
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <p>
        HEIJUN HOTEL SUPPLIES is your trusted partner, catering to all your
        hotel supply needs with utmost convenience. We take pride in offering
        personalized hotel lines and towels carefully designed by our experts
        who have nearly three decades worth of experience in the field of fabric
        and textiles. We are committed to providing linen products and towels at
        various price points without compromising its quality. We guarantee each
        product has gone through our rigorous evaluation from our factory to
        delivery, ensuring each product meets our standards. To emphasize your
        brand and establishment, we offer customization services for our hotel
        amenities. We are able to match the colors, fragrance, and design of our
        products to your unique line. We make sure your hotel leaves a lasting
        impression of luxury and quality to your quest through our high-quality
        products.
      </p>
    </section>
  );
}
