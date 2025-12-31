"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 flex justify-center pt-10">
      <nav className="flex items-center justify-between py-2 px-4 md:p-5 md:pl-6 w-full max-w-[1200px] md:h-[81px] bg-white rounded-[200px] shadow-header relative">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4.5">
          <Link
            href="#how-it-works"
            className="font-medium text-base text-nav-text leading-none cursor-pointer px-3 py-2"
          >
            How it Works
          </Link>
          <Link
            href="#pricing"
            className="font-medium text-base text-nav-text leading-none cursor-pointer px-3 py-2"
          >
            Pricing
          </Link>
          <Link
            href="#use-case"
            className="font-medium text-base text-nav-text leading-none cursor-pointer px-3 py-2"
          >
            Use Case
          </Link>
          <Link
            href="#faq"
            className="font-medium text-base text-nav-text leading-none cursor-pointer px-3 py-2"
          >
            FAQ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-900"
          >
            {isMobileMenuOpen ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        {/* Contact Sales Button */}
        <div className="hidden md:block transition-opacity duration-1000 delay-300">
          <button className="bg-primary-color hover:opacity-90 text-white rounded-[43.62px] font-medium text-sm cursor-pointer flex items-center justify-center w-[138px] h-[41px] pt-[11px] pr-[18px] pb-[11px] pl-[18px] gap-[6.98px] transition-opacity">
            Contact Sales
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg pt-4 pb-3 px-4 animate-slide-in-top z-50">
          <div className="flex flex-col gap-3">
            <Link
              href="#how-it-works"
              className="font-medium text-base leading-none cursor-pointer font-sans text-nav-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="font-medium text-base leading-none cursor-pointer font-sans text-nav-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#use-case"
              className="font-medium text-base leading-none cursor-pointer font-sans text-nav-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Case
            </Link>
            <Link
              href="#faq"
              className="font-medium text-base leading-none cursor-pointer font-sans text-nav-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <button className="bg-primary-color hover:opacity-90 text-white rounded-[43.62px] font-medium text-sm cursor-pointer flex items-center justify-center w-[138px] h-[41px] pt-[11px] pr-[18px] pb-[11px] pl-[18px] gap-[6.98px] transition-opacity">
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
