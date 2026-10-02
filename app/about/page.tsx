import React from 'react'
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/mission';
import Vision from '@/components/about/Vision';
import BrandLogos from '@/components/BrandLogos';
import CTA from '@/components/home/CTA';

function page() {
  return (
    <>
      <Hero />
      <Mission />
      <Vision />
      <BrandLogos />
      <CTA />
    </>
  )
}

export default page
