import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutStrip from "@/components/AboutStrip";
import OurClasses from "@/components/OurClasses";
import MoodBanner from "@/components/MoodBanner";
import Coaches from "@/components/Coaches";
import Blogs from "@/components/Blogs";
import Schedule from "@/components/Schedule";
import Locations from "@/components/Locations";
import DanceRoyalty from "@/components/DanceRoyalty";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About Strip */}
        <AboutStrip />

        {/* 4. Our Classes */}
        <OurClasses />

        {/* 5. Mood Banner */}
        <MoodBanner />

        {/* 6. Coaches Grid */}
        <Coaches />

        {/* Blogs Section (Reference style & Navbar Link) */}
        <Blogs />

        {/* Weekly Schedule Section (Navbar Link) */}
        <Schedule />

        {/* 7. Locations Section (Asok & Samyan) */}
        <Locations />

        {/* 8. Dance Royalty Loyalty Points Program */}
        <DanceRoyalty />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
