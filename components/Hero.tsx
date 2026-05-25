"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Feather,
  Code2,
  Orbit,
  Layers3,
} from "lucide-react";

import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className={`hero-section relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden text-center transition-colors duration-1000
      ${
        theme === "light"
          ? "theme-light"
          : "theme-dark"
      }`}
    >


    {/* ATMOSPHERIC RING */}

    <motion.div
      animate={{
        rotate: [0, 4, 0],
        scale: [1, 1.015, 1],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute left-1/2 top-[56%] z-[1] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full"
    >

      {/* OUTER RING */}

      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid rgba(214,185,140,0.06)",
          boxShadow: "0 0 80px rgba(214,185,140,0.04)",
        }}
      />

      {/* INNER GLOW */}

      <div
        className="absolute inset-[12%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(214,185,140,0.12) 0%, rgba(214,185,140,0.03) 45%, transparent 72%)",
        }}
      />

    </motion.div>

    {/* SAND DUST */}

    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">

      <div
        className="absolute left-[22%] top-[34%] h-[180px] w-[180px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(214,185,140,0.10) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute right-[18%] top-[38%] h-[220px] w-[220px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(214,185,140,0.08) 0%, transparent 72%)",
        }}
      />

      <div
        className="absolute bottom-[18%] left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(214,185,140,0.06) 0%, transparent 75%)",
        }}
      />

    </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <p className="mb-8 text-sm uppercase tracking-[0.4em] text-[var(--accent)]">
          Ellada Studio
        </p>

        <h1
          className={`text-5xl font-light leading-[0.95] tracking-tight md:text-8xl ${
            theme === "light"
              ? "text-[#102033]"
              : "text-white"
          }`}
        >
          Digital

          <span
            className={`mt-4 block text-xl font-light tracking-normal md:text-2xl ${
              theme === "light"
                ? "text-[#5f6b63]"
                : "text-neutral-300"
            }`}
          >
            web design & development
          </span>

          <span className="mt-6 block italic text-[var(--accent)]">
            with atmosphere
          </span>
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
          Ellada Studio builds and supports modern WordPress & Elementor websites for small businesses — fast, clean and easy to manage.
        </p>
        <motion.div

          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{
            duration: 1.4,
            delay: 0.5,
          }}

          className="mx-auto my-10 h-[1px] bg-[color:var(--accent)]"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          {/* MAIN BUTTON */}

          <button
            onClick={() => scrollToSection("contact")}
            className={`rounded-full px-8 py-4 text-sm uppercase tracking-[0.3em] transition-all duration-500 hover:scale-105 ${
              theme === "light"
                ? "border border-[#5792c5]/30 bg-[#5792c5]/10 text-[#102033] hover:bg-[#89a6bf]/20"
                : "border border-[#d6b98c]/20 bg-[rgba(214,185,140,0.14)] text-white hover:bg-[var(--accent)]/20"
            }`}
          >
            Start a Project
          </button>

          {/* SECONDARY BUTTON */}

          <button
            onClick={() => scrollToSection("work")}
            className={`rounded-full border px-8 py-4 text-sm uppercase tracking-[0.3em] transition-all duration-500 ${
              theme === "light"
                ? "border-[#5792c5]/30 text-[#355070] hover:bg-[#102033]/5"
                : "border-white/10 text-neutral-300 hover:bg-white/5"
            }`}
          >
            View Work
          </button>

        </div>

      </motion.div>         

    </section>
  );
}