"use client";

import { useTheme } from "@/context/ThemeContext";

import Grain from "@/components/Grain";
import CursorGlow from "@/components/effects/CursorGlow";
import ParallaxBackground from "@/components/effects/ParallaxBackground";


import Hero from "@/components/ru/Hero";
import About from "@/components/ru/About";
import Services from "@/components/ru/Services";
import Process from "@/components/ru/Process";
import Work from "@/components/ru/Work";
import Testimonials from "@/components/ru/Testimonials";
import Philosophy from "@/components/ru/Philosophy";
import Experience from "@/components/ru/Experience";
import RunningLine from "@/components/ru/RunningLine";
import FAQ from "@/components/ru/FAQ";
import Pricing from "@/components/ru/Pricing";
import Contact from "@/components/ru/Contact";
import Footer from "@/components/ru/Footer";

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