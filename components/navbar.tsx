"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-20 w-full bg-white/35 px-6 py-2 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link href="/" aria-label="Heijun Hotel Supply & General Merchandise" className="relative h-15 w-32 lg:w-80">
          <Image
            src="/images/logo/heijun-hotel-supplies-general-merchandise.webp"
            alt="Heijun Hotel Supply & General Merchandise"
            fill
            sizes="(max-width: 1024px) 128px, 320px"
            className="object-contain object-left"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[#704D00] transition hover:text-[#A87500]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-[#704D00] transition hover:text-[#A87500]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-[#704D00] transition hover:text-[#A87500]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 backdrop-blur-md md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-white/80 p-6 backdrop-blur-md md:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-medium text-[#704D00]"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="font-medium text-[#704D00]"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="font-medium text-[#704D00]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}