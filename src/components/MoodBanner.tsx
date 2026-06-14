import React from "react";

export default function MoodBanner() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#111118] via-[#0A0A0F] to-[#1C1C28] text-white overflow-hidden border-b border-brandYellow/10">
      {/* Decorative colored glow spheres to elevate the aesthetic */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brandYellow/5 blur-[80px]" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-yellow-600/5 blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-brandYellow font-bold text-xs uppercase tracking-widest bg-brandYellow/10 border border-brandYellow/20 px-4 py-1.5 rounded-full mb-6 inline-block">
          Find Your Vibe
        </span>
        
        {/* Quote */}
        <h2 className="font-heading italic font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 tracking-tight max-w-4xl mx-auto">
          &quot;Whatever your mood is... <br className="sm:block hidden" />
          We&apos;ve got a <span className="text-brandYellow not-italic font-black relative inline-block">
            Dance Class
            <span className="absolute left-0 bottom-1 w-full h-[6px] bg-brandYellow/40 rounded-full"></span>
          </span> for it!&quot;
        </h2>
        
        <p className="text-white/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Happy, energetic, romantic, expressive, or powerful — let it out on the dance floor. We have over 20 styles to choose from.
        </p>

        {/* CTA */}
        <button className="bg-brandYellow hover:bg-[#e0b310] text-black font-bold py-4 px-10 rounded-full text-base transition-all duration-200 shadow-lg shadow-yellow-500/10 hover:scale-[1.02]">
          Find Your Dance Style
        </button>
      </div>
    </section>
  );
}
