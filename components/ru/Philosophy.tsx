"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="section-label mb-6 text-sm uppercase tracking-[0.4em]">
          Философия
        </p>
        <h2 className="philosophy-title">
          Спокойно. Красиво. С результатом.
        </h2>
      </motion.div>
    </section>
  );
}