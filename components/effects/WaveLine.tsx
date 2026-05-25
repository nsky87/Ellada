"use client";

import { motion } from "framer-motion";

export default function WaveLine() {
  return (
    <motion.svg
      className="fixed inset-0 z-0 pointer-events-none opacity-20"
      viewBox="0 0 1440 1200"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,400 C250,300 500,500 750,400 C1000,300 1200,500 1440,420"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}