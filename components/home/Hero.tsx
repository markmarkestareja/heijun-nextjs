import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative h-dvh w-screen flex flex-col justify-center items-center">

      <div className="absolute z-0 h-full w-full">
        <Image
          src="/images/home/heijun-hotel-supplies-philippines.webp"
          alt="Heijun Hotel Supplies and General Merchandise in the Philippines"
          fill
          sizes="100vw"
          className="object-cover"
          loading="eager"
        />
      </div>
      <div 
        className="
          relative 
          z-10 
          w-full 
          h-auto 
          flex 
          flex-col 
          items-center 
          justify-center 
          gap-6 
          text-center 
          max-w-200
          px-5
          ">
        <h1 className="text-[#704D00] font-bold">Your Partner in World-Class Hotel Essentials</h1>
        <p>HEIJUN is a One-Stop-Shop for your hotel product needs.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <ButtonPrimary link="/about" label="Learn More About Our Company" />
          <ButtonSecondary link="/about" label="Get In Touch" />
        </div>
      </div>
    </section>
  )
}
