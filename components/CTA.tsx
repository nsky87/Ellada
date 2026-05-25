"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 text-center">

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[var(--accent)]">
          Ellada Studio
        </p>

        <h2 className="mx-auto max-w-5xl text-5xl font-light leading-tight md:text-7xl">
          Let's create something timeless.
        </h2>

        <p className="text-neutral-400 mt-6 max-w-xl mx-auto">
          Tell us about your project. We'll suggest the best solution and help you build or improve your website.
        </p>

        <button className="mt-10 rounded-full bg-[color:var(--accent)]/10 border border-[#d6b98c]/30 px-10 py-5 uppercase tracking-[0.3em]">
          Start Project
        </button>

        <button className="mt-14 rounded-full border border-[#d6b98c]/20 bg-[color:var(--accent)]/10 px-10 py-5 text-sm uppercase tracking-[0.3em] backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[color:var(--accent)]/20">
          hello@ellada.studio
        </button>

      </motion.div>
    </section>
  );
}