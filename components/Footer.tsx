"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function Footer() {
    const { theme } = useTheme();

  return (

    <footer
      className={`mt-20 border-t py-16 ${
        theme === "light"
          ? "border-black/5"
          : "border-white/10"
      }`}
    >
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>

          <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            Ellada Studio
          </p>

          <p
            className={`mt-6 max-w-sm text-sm leading-relaxed ${
              theme === "light"
                ? "text-[#6d7b88]"
                : "text-neutral-400"
            }`}
          >
            Modern websites and digital experiences for small businesses,
            creative brands and long-term projects.
          </p>

        </div>

        {/* NAVIGATION */}
        <div>

          <h3
            className={`mb-5 text-sm uppercase tracking-[0.25em] ${
              theme === "light"
                ? "text-[#102033]"
                : "text-white"
            }`}
          >
            Navigation
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <a href="#hero" className="hover:text-[var(--accent)] transition-colors duration-300">
              Home
            </a>

            <a href="#services" className="hover:text-[var(--accent)] transition-colors duration-300">
              Services
            </a>

            <a href="#work" className="hover:text-[var(--accent)] transition-colors duration-300">
              Work
            </a>

            <a href="#contact" className="hover:text-[var(--accent)] transition-colors duration-300">
              Contact
            </a>

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3
            className={`mb-5 text-sm uppercase tracking-[0.25em] ${
              theme === "light"
                ? "text-[#102033]"
                : "text-white"
            }`}
          >
            Contact
          </h3>

          <div
            className={`flex flex-col gap-3 text-sm ${
              theme === "light"
                ? "text-[#6d7b88]"
                : "text-neutral-400"
            }`}
          >

            <a
              href="mailto:hello@ellada.studio"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              hello@ellada.studio
            </a>

            <a
              href="tel:+41000000000"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              +38 099 939 16 27
            </a>

            <p>
              Switzerland
            </p>

          </div>

        </div>

        {/* SOCIALS */}
        <div>

          <h3
            className={`mb-5 text-sm uppercase tracking-[0.25em] ${
              theme === "light"
                ? "text-[#102033]"
                : "text-white"
            }`}
          >
            Social
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Telegram
            </a>

            <a
              href="https://wa.me/41000000000"
              target="_blank"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              WhatsApp
            </a>

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <a
              href="https://www.behance.net/"
              target="_blank"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Behance
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div
        className={`mt-16 flex flex-col gap-4 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between ${
          theme === "light"
            ? "border-black/5 text-[#6d7b88]"
            : "border-white/10 text-neutral-500"
        }`}
      >

        <p>
          © 2026 Ellada Studio. All rights reserved.
        </p>

        <p>
          Designed & developed with atmosphere.
        </p>

      </div>
    </footer>

  );
}