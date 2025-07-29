"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 py-4 relative">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="AI Logo"
            width={89}
            height={89}
            className="mr-2 w-16 h-16 sm:w-20 sm:h-20 md:w-[89px] md:h-[89px]"
          />
        </div>
        
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-medium">
          <a href="#about" className="text-white hover:text-cyan transition-colors text-sm xl:text-base">
            About us
          </a>
          <a href="#categories" className="text-white hover:text-cyan transition-colors text-sm xl:text-base">
            Competition Categories
          </a>
          <a href="#judges" className="text-white hover:text-cyan transition-colors text-sm xl:text-base">
            Judging Panel
          </a>
          <a href="#explore" className="text-white hover:text-cyan transition-colors text-sm xl:text-base">
            Explore
          </a>
        </div>

        <div className="lg:hidden">
          <button 
            className="text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 z-50">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#about" 
              className="block text-white hover:text-cyan transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <a 
              href="#categories" 
              className="block text-white hover:text-cyan transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Competition Categories
            </a>
            <a 
              href="#judges" 
              className="block text-white hover:text-cyan transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Judging Panel
            </a>
            <a 
              href="#explore" 
              className="block text-white hover:text-cyan transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </a>
          </div>
        </div>
      )}
    </header>
  );
}