"use client";

import { motion } from "framer-motion";

export default function ParallaxBackground() {
  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute top-[20%] left-[50%] h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[140px]" />

      <div className="absolute bottom-[10%] right-[10%] h-[300px] w-[300px] rounded-full bg-white/5 blur-[100px]" />
    </motion.div>
  );
}