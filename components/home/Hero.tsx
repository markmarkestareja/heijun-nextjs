import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-dvh w-full flex flex-col justify-center items-center">
      <div className="absolute z-0 h-full w-full">
        <Image
          src="/images/home/hero.webp"
          alt="Image"
          fill
          className="object-cover"
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
          <Link
            href="/"
            className="
              inline-block
              rounded-[5px]
              px-6.5
              py-3
              text-light
              bg-linear-to-r
              from-[#ee0000]
              via-[#b50202]
              to-[#ee0000]
              bg-[length:200%_auto]
              bg-left
              transition-all
              duration-500
              hover:bg-right
              active:bg-[hsla(0,100%,47%,0.6)]
            "
          >
            Explore More
          </Link>

          <Link
            href="/"
            className="
              inline-block
              rounded-[5px]
              px-6.5
              py-3
              text-primary
              bg-light
              transition-all
              duration-300
              ease-in-out
              hover:bg-light-hover
              active:bg-light-active
            "
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
