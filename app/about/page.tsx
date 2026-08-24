import React from 'react'
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/mission';
import Vision from '@/components/about/Vision';
import BrandLogos from '@/components/BrandLogos';
import CTA from '@/components/home/CTA';
import Footer from '@/components/Footer';
import Copyright from '@/components/Copyright';

function page() {
  return (
    <>
      <Hero />
      <Mission />
      <Vision />
      <BrandLogos />
      <CTA />
      <Footer />
      <Copyright />
    </>
  )
}

export default page
