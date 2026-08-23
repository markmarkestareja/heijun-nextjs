import React from "react";
import Image from "next/image";

export default function Copyright() {
  return (
    <div className="relative w-full h-50">
      <Image src="/images/home/footer-img.webp" alt="images" fill 
        className="object-cover"/>
        <p
            className="absolute bottom-0 w-full text-center bg-amber-50/50 p-2"
        >@2025 HEIJUN Hotel Supply &amp; Gen. Merchandise. All Rights Reserved.</p>
    </div>
  );
}
