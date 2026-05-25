"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import CountUp from "@/components/CountUp";

export default function Problem() {
  const { theme } = useTheme();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="problem" className="relative overflow-hidden py-20">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-500">
          Why websites matter
        </p>

        <h2 className={`text-4xl font-light leading-[1.4] md:text-5xl ${
          theme === "light" ? "text-[#102033]" : "text-white"
        }`}>
          Most small business websites
          <span className="block italic text-[var(--accent)]">
            look good — but don't bring clients
          </span>
        </h2>

        <p className={`mt-10 text-lg leading-relaxed ${
          theme === "light" ? "text-[#6d7b88]" : "text-muted"
        }`}>
          We focus on clarity, structure and performance —
          so your website actually turns visitors into enquiries,
          not just impressions.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">

          {[
              { label: "Load Time", value: "< 2s" },
              { label: "SEO Optimization", value: "90+" },
              { label: "Mobile Experience", value: "95+" },
          ].map((item) => (

            <div
              key={item.label}
              className={`rounded-2xl border p-6 transition-all duration-500 ${
                theme === "light"
                  ? "border-black/5 bg-black/[0.02]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >

              <p className="text-2xl font-light text-[var(--accent)]">
                <CountUp value={item.value} start={isInView} />
              </p>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </motion.div>
    </section>
  );
}