import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="rumPUREE Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="ml-3 font-heading font-extrabold text-lg tracking-tight text-gray-900">
                rum<span className="text-brandPink">PUREE</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bangkok's premier dance studio offering world-class dance training since 2006. Learn from international coaches in state-of-the-art facilities.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-gray-900 text-sm tracking-wider uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-brandPink flex-shrink-0 mt-0.5" />
                <span>Jasmine City, Sukhumvit Soi 23, Bangkok</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-brandPink flex-shrink-0" />
                <a href="tel:+6622620010" className="hover:text-brandPink transition-colors duration-200">
                  02-262-0010
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-brandPink flex-shrink-0" />
                <a href="mailto:contact@rumpuree.com" className="hover:text-brandPink transition-colors duration-200">
                  contact@rumpuree.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-gray-900 text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-brandPink transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-brandPink transition-colors duration-200">
                  Our Classes
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-brandPink transition-colors duration-200">
                  Our Coaches
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-brandPink transition-colors duration-200">
                  Contact & Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-gray-900 text-sm tracking-wider uppercase">
              Follow Us
            </h4>
            <p className="text-sm text-gray-500">
              Stay updated with workshops, schedules, and dance tips.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rumpuree"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-brandPink hover:border-brandPink transition-all duration-200 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/rumpuree"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-200 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <polygon points="10 15 15 12 10 9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200/60 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} rumPUREE Dance Studio. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brandPink transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-brandPink transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
