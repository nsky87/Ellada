"use client";

import { motion } from "framer-motion";

const items = [
  "Web Development", "Brand Identity", "Web Design", "Logo Creation",
  "WordPress", "React", "Next.js", "UI / UX", "Website Support",
  "SEO", "Performance", "Custom Development"
];

export default function RunningLine() {
  return (
    <section className="running-line-section relative overflow-hidden py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-16"
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className="running-line-item">
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}