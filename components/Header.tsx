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

export default function Header() {
  const { theme, toggleTheme } = useTheme();


  return (
    <>
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="fixed left-1/2 top-6 z-50 w-[92%] max-w-6xl -translate-x-1/2"
    >

      <div className={`flex items-center justify-between rounded-full border border-white/10 px-6 py-4 backdrop-blur-xl
      ${
        theme === "light"
          ? "bg-white/50"
          : "bg-white/[0.03]"
      }`}>

        {/* LOGO */}
        <a
          href="#hero"
          className="text-sm uppercase tracking-[0.4em] text-[var(--accent)]"
        >
          Ellada
        </a>

        {/* MENU */}
        <nav className="hidden gap-8 md:flex">
          {[
              { label: "Services", href: "#services" },
              { label: "Work", href: "#work" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (

            <a
              key={item.label}
              href={item.href}
              className={`text-sm transition-all duration-300 ${
                theme === "light"
                  ? "text-[#355070] hover:text-[#102033]"
                  : "text-muted hover:text-white"
              }`}
            >
              {item.label}
            </a>

          ))}

        </nav>

        {/* BUTTON */}
        <div className="flex items-center gap-3">

          <button

            onClick={toggleTheme}

            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.08]"
          >

            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}

          </button>

          <button className="rounded-full border border-[#d6b98c]/20 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[color:var(--accent)]/10">
            Let's Talk
          </button>

        </div>

      </div>

    </motion.header>

    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 12, repeat: Infinity }}
    >
      <div className="w-[440px] h-[440px] bg-[var(--accent)] blur-[200px] rounded-full absolute top-1/3 left-1/2" />
    </motion.div>
    </>
  );
}