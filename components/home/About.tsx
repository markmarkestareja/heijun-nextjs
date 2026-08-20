import Image from "next/image";
import React from "react";
import {ButtonPrimary } from "../ui/button";

export default function About() {
  return (
    <section
      className="
        relative
        flex
        flex-col
        lg:flex-row
        gap-9
        lg:pr-0!
        border
      "
    >
      <div className="relative flex-1 text-center flex flex-col gap-2 items-center">
        <h2>About Us</h2>
        <p>
          HEIJUN is a wholesaling company that provides high quality and
          affordable products in the hospitality industry. We supply superior
          quality hotel lines, towels, pillows, and other amenities. The company
          also offers items, ranging from safety deposit boxes, leather
          products, restaurant equipment for guests, housekeeping supplies and
          lobby products.
        </p>
        <ButtonPrimary link="/about" label="Learn More" addClass="Block w-max mt-10"/>
      </div>

      <div className="relative h-96 w-full lg:flex-1 rounded-xl lg:rounded-l-xl lg:rounded-r-none overflow-hidden">
        <Image
          src="/images/home/hero.webp"
          alt="About Us"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
