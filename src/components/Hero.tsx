import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-[#0A0A0F] overflow-hidden">
      {/* Background Image with heavy dark overlay for high contrast */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cover1920.jpg')" }}
      >
        {/* Heavy dark gradient overlay to make text highly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-black/70 md:hidden block" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
        <div className="max-w-2xl text-left">
          <span className="inline-block text-brandYellow font-bold text-xs tracking-widest uppercase mb-4 bg-brandYellow/10 px-4 py-1.5 rounded-full border border-brandYellow/20">
            Welcome to rumPUREE Dance Studio
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Join The Incredible <br />
            <span className="text-brandYellow">
              World of Dance!
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
            Discover your passion, stay fit, and express yourself at Bangkok&apos;s first world-class dance studio. Open to all levels from absolute beginners to professional dancers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#classes"
              className="inline-flex justify-center items-center bg-brandYellow hover:bg-[#e0b310] text-black font-bold py-4 px-8 rounded-full text-base transition-all duration-200 shadow-lg shadow-yellow-500/10 hover:scale-[1.02]"
            >
              Explore Classes
            </a>
            <a 
              href="#schedule"
              className="inline-flex justify-center items-center bg-transparent hover:bg-white/5 text-white border-2 border-white/20 hover:border-white font-bold py-4 px-8 rounded-full text-base transition-all duration-200 hover:scale-[1.02]"
            >
              View Schedule
            </a>
          </div>
        </div>
      </div>

      {/* Micro-animation dots for design depth */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        <span className="w-2.5 h-2.5 rounded-full bg-brandYellow"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
      </div>
    </section>
  );
}
