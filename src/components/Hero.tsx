import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "95vh",
        background: "#0A0A0F",
      }}
    >
      {/* Pure-CSS hover for the CTA button — no client JS needed */}
      <style>{`
        .hero-cta {
          display: inline-block;
          font-family: var(--font-inter), sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          color: #ffffff;
          border-radius: 0;
          padding: 16px 48px;
          font-size: 11px;
          letter-spacing: 0.2em;
          border: 1px solid rgba(255,255,255,0.35);
          background: transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .hero-cta:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.7);
        }
      `}</style>

      {/* Warm subtle glow behind dancers — right side only */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(245,197,24,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Hero Layout */}
      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[55%_45%]"
        style={{ minHeight: "95vh" }}
      >
        
        {/* Left Column: text — pushed toward center-bottom */}
        <div 
          className="z-10 flex flex-col justify-center"
          style={{ paddingTop: "15vh", paddingBottom: "8vh" }}
        >
          {/* Eyebrow */}
          <span 
            className="font-sans font-bold uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(245,197,24,0.8)" }}
          >
            EST. 2006 &middot; BANGKOK
          </span>
          
          {/* Headline — 3rem gap from eyebrow */}
          <h1 
            className="flex flex-col"
            style={{ marginTop: "3rem", lineHeight: 1.1 }}
          >
            <span 
              className="font-heading italic font-normal text-white"
              style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
            >
              Be in the
            </span>
            <span 
              className="font-heading font-bold text-white"
              style={{ fontSize: "clamp(56px, 6.5vw, 88px)", paddingLeft: "1rem" }}
            >
              Spotlight.
            </span>
          </h1>
          
          {/* Subtext — 2.5rem gap from headline */}
          <p 
            className="font-sans font-semibold uppercase"
            style={{ 
              marginTop: "2.5rem",
              fontSize: "12px", 
              letterSpacing: "0.12em", 
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Learn from the Best &middot; Dance Professionals
          </p>
          
          {/* CTA — 2rem gap */}
          <div style={{ marginTop: "2rem" }}>
            <a href="#classes" className="hero-cta">
              View Classes
            </a>
          </div>
        </div>

        {/* Right Column: Dancer image — bottom-grounded, fades at feet */}
        <div 
          className="relative w-full lg:absolute lg:right-0 lg:bottom-0 lg:w-[45%]"
          style={{ 
            height: "clamp(340px, 75vh, 95vh)",
            alignSelf: "flex-end",
          }}
        >
          <div 
            className="relative w-full h-full"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          >
            <Image
              src="/images/hero.img.png"
              alt="rumPUREE dancers performing"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
