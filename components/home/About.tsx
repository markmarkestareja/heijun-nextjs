import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section>
      <div
        className="h-96 w-full"
      >
        <Image 
            src="/images/hero.webp"
            alt="About Us"
            fill
        />
      </div>
    </section>
  );
}
