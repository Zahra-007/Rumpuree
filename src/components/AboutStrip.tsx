import React from "react";
import Image from "next/image";

export default function AboutStrip() {
  return (
    <section id="about" className="py-20 bg-[#111118] border-b border-brandYellow/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-brandYellow font-bold text-xs uppercase tracking-widest mb-3 block">
              DANCE IS THE ANSWER
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
              Whenever the Question <br className="hidden sm:inline" />
              is Your Physical Shape!
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-base">
              <p>
                Founded in Bangkok, rumPUREE is a pioneer in dance education. We believe that dance is for everyone, regardless of age, body type, or background. Our mission is to guide you on a journey to discover the joy, strength, and confidence that dance brings.
              </p>
              <p>
                We offer a wide variety of dance classes taught by international and award-winning instructors. Our state-of-the-art facilities in Asok and Samyan Mitrtown provide a welcoming, high-energy environment where students can master everything from classical ballet to modern hip-hop.
              </p>
            </div>

            {/* Signature Area */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-lg">Zahra & the rumPUREE Team</h4>
                <p className="text-sm text-white/40">Founding Directors</p>
              </div>
              <div className="font-heading italic text-3xl text-brandYellow select-none tracking-wider font-medium">
                rumPUREE Staff
              </div>
            </div>
          </div>

          {/* Right Column: Dancer Image with Next.js Image component */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-brandYellow/10 rounded-2xl transform rotate-2 scale-[1.01] -z-10 opacity-70" />
            <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden rounded-2xl border border-brandYellow/20 shadow-xl">
              <Image
                src="/images/dancestyle/20_strength_flexibility.jpeg"
                alt="Dancer in dynamic stretch pose"
                fill
                className="object-cover hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            
            {/* Float badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#1C1C28] p-5 rounded-xl shadow-lg border border-brandYellow/20 flex items-center gap-4 max-w-[240px] sm:flex hidden">
              <div className="w-12 h-12 rounded-full bg-brandYellow/10 flex items-center justify-center flex-shrink-0 border border-brandYellow/20">
                <span className="text-brandYellow font-black text-lg">20+</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Years of Dance</p>
                <p className="text-xs text-white/40">Pioneering in Bangkok</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
