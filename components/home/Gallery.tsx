import React from 'react'
import SwiperCarousel from "@/components/ui/SwiperCarousel";

export default function Gallery() {
  return (
    <section className='flex flex-col gap-9'>
      <div
        className="text-center flex flex-col gap-2"
      >
        <p>Gallery</p>
        <h2>Quality meets Affordability</h2>
      </div>
      
      <SwiperCarousel />
    </section>
  )
}
