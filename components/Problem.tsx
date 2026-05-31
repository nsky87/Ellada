"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "@/components/CountUp";

const stats = [
  {
    value: "< 2s",
    label: "Page Load Time",
    sub: "Faster sites rank higher and convert better",
  },
  {
    value: "90+",
    label: "Lighthouse SEO Score",
    sub: "Every site we build is optimised from day one",
  },
  {
    value: "100%",
    label: "Mobile Optimised",
    sub: "Designed for the screen your clients actually use",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="problem" className="problem-section relative overflow-hidden py-20">

      <div className="pointer-events-none absolute inset-0">
        <div className="problem-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <p className="section-label mb-6 text-sm uppercase tracking-[0.4em]">
          Why websites matter
        </p>

        <h2 className="problem-title">
          Most small business websites look good.
          <span className="block italic text-accent mt-2">
            Few of them actually get found - or convert.
          </span>
        </h2>

        <p className="problem-description mt-10">
          We build websites that work as hard as you do -
          fast, findable, and designed to turn visitors into clients.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="problem-stat-card">

              <p className="problem-stat-value text-accent">
                <CountUp value={item.value} start={isInView} />
              </p>

              <p className="problem-stat-label mt-2">
                {item.label}
              </p>

              <p className="problem-stat-sub mt-2">
                {item.sub}
              </p>

            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}