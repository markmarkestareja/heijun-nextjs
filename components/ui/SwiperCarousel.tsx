"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GalleryImages } from '@/data/GalleryImages';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperCarousel() {
  return (
    <div style={{ maxWidth: '750px', margin: '0 auto' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        style={{
          height: '450px',
          width: '100%',
        }}
      >
        
        {
          GalleryImages.map((GalleryImage, index) => (
            <SwiperSlide key={index}  
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%', // Ensures the slide container fills out the swiper canvas frame
              }}
            >
              <img src={`/images/home/categories-image/${GalleryImage.img}`} alt={GalleryImage.alt} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                }}  
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
