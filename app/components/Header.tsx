"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 flex justify-center pt-10">
      <nav className="flex items-center justify-between p-5 pb-6 w-full max-w-[1200px] h-[81px] bg-white rounded-[200px] shadow-header">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#how-it-works"
            className="font-medium text-base text-nav-text leading-none cursor-pointer"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="font-medium text-base text-nav-text leading-none cursor-pointer"
          >
            Pricing
          </a>
          <a
            href="#use-case"
            className="font-medium text-base text-nav-text leading-none cursor-pointer"
          >
            Use Case
          </a>
          <a
            href="#faq"
            className="font-medium text-base text-nav-text leading-none cursor-pointer"
          >
            FAQ
          </a>
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
        <div className="md:hidden mt-3 pt-4 pb-3 border-t border-gray-200">
          <div className="flex flex-col gap-3">
            <a
              href="#how-it-works"
              className="font-medium text-base leading-none cursor-pointer font-sans text-nav-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="font-medium text-base leading-none cursor-pointer font-sans text-nav-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#use-case"
              className="font-medium text-base leading-none cursor-pointer font-sans text-nav-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Case
            </a>
            <a
              href="#faq"
              className="font-medium text-base leading-none cursor-pointer font-sans text-nav-text"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-[43.62px] font-medium text-sm cursor-pointer flex items-center justify-center w-[138px] h-[41px] pt-[11px] pr-[18px] pb-[11px] pl-[18px] gap-[6.98px]">
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
