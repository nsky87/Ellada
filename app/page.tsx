"use client";

import { useTheme } from "@/context/ThemeContext";

import Grain from "@/components/Grain";
import CursorGlow from "@/components/effects/CursorGlow";
import ParallaxBackground from "@/components/effects/ParallaxBackground";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import RunningLine from "@/components/RunningLine";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  const { theme } = useTheme();

  return (
    <main
      className={`relative min-h-screen overflow-hidden px-6 md:px-16 transition-colors duration-500 ${
        theme === "light"
          ? "text-[#102033]"
          : "bg-[#0b0d10] text-white"
      }`}
    >

      <CursorGlow />
      <ParallaxBackground />
      <Grain />
      <Header />  
      <Hero />
      <About />
      <Problem />
      <Services />
      <Work />
      <Philosophy />
      <RunningLine />    
      <Experience />        
      <Contact />
      <Footer />

    </main>
  );
}