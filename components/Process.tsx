"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We start by understanding your business, goals and audience. A free consultation to find the right solution — no jargon, no pressure.",
    duration: "1–2 days",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a visual concept tailored to your brand — atmosphere, typography, layout. You see everything before a single line of code is written.",
    duration: "3–5 days",
  },
  {
    number: "03",
    title: "Build",
    text: "Your site is developed with clean code, fast performance and mobile-first approach. Every detail is tested across devices and browsers.",
    duration: "1–3 weeks",
  },
  {
    number: "04",
    title: "Launch",
    text: "We handle the go-live, set up analytics, SEO basics and make sure everything runs smoothly. Then we stay — for updates, fixes and growth.",
    duration: "1–2 days",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="section-header mb-16 flex items-center justify-between border-b pb-6"
      >
        <h2 className="text-3xl font-light md:text-5xl">How It Works</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">
          Our Process
        </span>
      </motion.div>

      {/* STEPS */}
      <div className="relative">

        {/* CONNECTING LINE — desktop only */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="process-line"
        />

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="process-step group"
            >

              {/* DOT на линии */}
              <div className="process-dot hidden md:block" />

              {/* NUMBER */}
              <p className="process-number">{step.number}</p>

              {/* TITLE */}
              <h3 className="process-title">{step.title}</h3>

              {/* LINE */}
              <div className="process-card-line mb-5 transition-all duration-700 group-hover:w-12" />

              {/* TEXT */}
              <p className="process-text">{step.text}</p>

              {/* DURATION */}
              <p className="process-duration mt-6">{step.duration}</p>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}