import Image from "next/image";
import React from "react";
import { ButtonPrimary } from "../ui/button";

export default function CTA() {
  return (
    <section className="p-0! h-screen w-full flex items-center">
      <Image
        src="/images/home/main-cta-img.webp"
        alt="image"
        fill
        className="object-cover"
      />
      <div 
        className="
            relative 
            z-10 
            border border-white/20
            bg-white/10
            backdrop-blur-md 
            w-fit 
            max-w-175 
            h-fit 
            p-8 
            lg:pl-30
            rounded-e-xl
            text-center
            flex
            flex-col
            items-center
            gap-2
        ">
        <p>Contact Us</p>
        <h2>We Would be Happy to Hear from You</h2>
        <ButtonPrimary link="/" label="Get in Touch with Us" addClass="mt-9 w-fit" />
      </div>
    </section>
  );
}
