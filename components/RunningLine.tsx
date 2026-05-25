"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const items = [
  "Web Development", "Brand Identity", "Web Design", "Logo Creation",
  "WordPress", "React", "Next.js", "UI / UX", "Website Support",
  "SEO", "Elementor", "Performance", "Custom Development"
];

export default function RunningLine() {
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden py-12 border-white/5">

      {/* Running Line */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-16"
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`
              whitespace-nowrap 
              text-sm 
              uppercase 
              tracking-[0.5em] 
              font-light
              transition-opacity duration-700
              ${theme === "light" 
                ? "text-neutral-600/70 hover:text-neutral-700" 
                : "text-neutral-400/70 hover:text-neutral-300"
              }
            `}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}