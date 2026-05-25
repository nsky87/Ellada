"use client";

import { motion } from "framer-motion";

const items = [
  "Web Development",
  "Brand Identity",
  "Web Design",
  "Logo Creation",
  "WordPress",
  "React",
  "Website Support",
  "SEO",
  "Next.js",
  "UI / UX",  
  "Elementor",
  "Optimization",
];

export default function RunningLine() {
  return (
    <section className="relative overflow-hidden py-10">

      {/* FADE EDGES */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[var(--background)] to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[var(--background)] to-transparent" />

      {/* LINE */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-10"
      >

        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="
              whitespace-nowrap
              text-sm
              uppercase
              tracking-[0.35em]
              text-neutral-500
            "
          >
            {item}
          </span>
        ))}

      </motion.div>
    </section>
  );
}