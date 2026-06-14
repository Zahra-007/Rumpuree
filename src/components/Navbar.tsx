"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Classes", href: "#classes" },
    { name: "Coaches", href: "#coaches" },
    { name: "Blogs", href: "#blogs" },
    { name: "Schedule", href: "#schedule" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0F] border-b border-brandYellow/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo only - no duplicate text */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-44 h-12">
                <Image
                  src="/images/logo.png"
                  alt="rumPUREE Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-brandYellow font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+6622620010"
              className="flex items-center text-white hover:text-brandYellow text-sm font-medium transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2 text-brandYellow" />
              <span>02-262-0010</span>
            </a>
            <button className="bg-brandYellow hover:bg-[#e0b310] text-black font-bold py-2.5 px-6 rounded-full text-sm transition-all duration-200 shadow-md shadow-yellow-500/10">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brandYellow hover:bg-[#111118] focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0F] border-b border-brandYellow/20 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-white hover:text-brandYellow hover:bg-[#111118] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-brandYellow/10 my-3 pt-3 px-3">
              <a
                href="tel:+6622620010"
                className="flex items-center text-white hover:text-brandYellow text-base font-semibold py-2"
              >
                <Phone className="w-5 h-5 mr-3 text-brandYellow" />
                02-262-0010
              </a>
              <button className="w-full mt-3 bg-brandYellow hover:bg-[#e0b310] text-black font-bold py-3 px-6 rounded-full text-base transition-all duration-200 shadow-md shadow-yellow-500/10">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
