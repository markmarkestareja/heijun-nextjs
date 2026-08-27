"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GalleryImages } from "@/data/GalleryImages";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperCarousel() {
  return (
    <div className="mx-auto w-full max-w-[750px]">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className="aspect-3/2 w-full"
      >
        {GalleryImages.map((GalleryImage, index) => (
          <SwiperSlide
            key={index}
            className="relative flex items-center justify-center"
          >
            <Image
              src={`/images/home/categories-image/${GalleryImage.img}`}
              alt={GalleryImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 750px) 100vw, 750px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}