"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

export default function Hero() {
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="hero-section relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden transition-colors duration-1000"
    >
      <Image
        src="/images/left-greece-dark.png"
        alt=""
        width={600}
        height={800}
        priority
        className="sr-only"
        aria-hidden="true"
      />

      {/* ATMOSPHERIC RING */}
      <motion.div
        animate={{ rotate: [0, 4, 0], scale: [1, 1.015, 1] }}
        transition={{ duration: 18, repeat:2, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-[56%] z-[1] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="hero-ring absolute inset-0 rounded-full" />
        <div className="hero-glow absolute inset-[12%] rounded-full blur-3xl" />
      </motion.div>

      {/* SAND DUST */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <div className="hero-dust hero-dust--left" />
        <div className="hero-dust hero-dust--right" />
        <div className="hero-dust hero-dust--bottom" />
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{
        duration: 0.8,
        ease: "easeOut"
        }}
        >
        <h1 className="hero-title">
          Digital
          <span className="hero-subtitle">
            web design & development studio
          </span>
          <span className="hero-tagline">
            with atmosphere
          </span>
        </h1>

        <p className="hero-description">
          We build websites for small businesses and personal brands that look
          premium, load fast, and actually bring in clients — not just compliments.
        </p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="hero-divider mx-auto my-10"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={() => scrollToSection("contact")} className="hero-button-primary">
            Start a Project
          </button>
          <button onClick={() => scrollToSection("work")} className="hero-button-secondary">
            View Work
          </button>
        </div>

      </motion.div>
    </section>
  );
}