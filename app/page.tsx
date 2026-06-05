"use client";

import { useTheme } from "@/context/ThemeContext";

import Grain from "@/components/Grain";
import CursorGlow from "@/components/effects/CursorGlow";
import ParallaxBackground from "@/components/effects/ParallaxBackground";


import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import RunningLine from "@/components/RunningLine";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  const { theme } = useTheme();

  return (
    <main
      className={`relative min-h-screen px-6 md:px-16 transition-colors duration-500 ${
        theme === "light"
          ? "text-[#102033]"
          : "bg-[#0b0d10] text-white"
      }`}
    >
      <div className="container">
        <CursorGlow />
        <ParallaxBackground />
        <Grain />
        <Hero />
        <About />
        <Experience />
        <Philosophy />
        <Services />
        <RunningLine />
        <Process />
        <Work />        
        <Testimonials />
        <Pricing />
        <FAQ />        
        <Contact />
        <Footer />
      </div>
    </main>
  );
}