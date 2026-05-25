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

export default function Philosophy() {
  const { theme } = useTheme();

  return (
    <section className="relative py-20">

      <motion.div

        initial={{ opacity: 0, y: 60 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{
          duration: 1,
        }}

        viewport={{ once: true }}

        className="mx-auto max-w-5xl text-center"
      >

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--accent)]">
          Philosophy
        </p>

        <h2 className="text-4xl font-light leading-[1.2] md:text-7xl">

          Calm digital experiences
          for modern brands and small businesses.

        </h2>

      </motion.div>

    </section>
  );
}