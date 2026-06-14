import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-gray-50 overflow-hidden">
      {/* Background Image with soft gradient overlay for readability */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cover1920.jpg')" }}
      >
        {/* Soft, energetic light radial and linear overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-white/90 md:hidden block" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
        <div className="max-w-2xl text-left">
          <span className="inline-block text-brandPink font-semibold text-sm tracking-widest uppercase mb-3 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100/50">
            Welcome to rumPUREE Dance Studio
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.1] mb-6">
            Join The Incredible <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPink via-pink-500 to-purple-600">
              World of Dance!
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed font-normal">
            Discover your passion, stay fit, and express yourself at Bangkok's first world-class dance studio. Open to all levels from absolute beginners to professional dancers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#classes"
              className="inline-flex justify-center items-center bg-brandPink hover:bg-opacity-95 text-white font-bold py-4 px-8 rounded-full text-base transition-all duration-200 shadow-lg shadow-pink-500/30 hover:scale-[1.02]"
            >
              Explore Classes
            </a>
            <a 
              href="#schedule"
              className="inline-flex justify-center items-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold py-4 px-8 rounded-full text-base transition-all duration-200 hover:scale-[1.02]"
            >
              View Schedule
            </a>
          </div>
        </div>
      </div>

      {/* Micro-animation dots for design depth */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        <span className="w-2.5 h-2.5 rounded-full bg-brandPink"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
}
