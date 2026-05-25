"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Design & Structure",
    desc: "We design how your website looks and how users interact with it.",
  },
  {
    title: "Development",
    desc: "Next.js or WordPress depending on your goals and flexibility needs.",
  },
  {
    title: "Responsive",
    desc: "Perfect experience across mobile, tablet and desktop.",
  },
  {
    title: "SEO & Speed",
    desc: "Basic optimization for performance and search visibility.",
  },
  {
    title: "Multilingual",
    desc: "We implement multiple languages for global reach.",
  },
  {
    title: "Content Help",
    desc: "We help structure and refine your messaging.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="process" className="py-24">
      {/* HEADER */}
      <div className="mb-14">
        <h2 className="text-3xl md:text-5xl font-light">
          What’s Included
        </h2>
        <p className="mt-3 text-neutral-500 text-sm">
          Everything needed to build a complete digital presence
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="
              group relative p-6 border border-white/10
              rounded-xl bg-white/[0.02]
              hover:bg-white/[0.04]
              transition-all duration-500
            "
          >
            {/* glow line */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                border border-[var(--accent)]/30 rounded-xl
              "
            />

            <h3 className="text-lg font-light mb-3 group-hover:translate-x-1 transition">
              {item.title}
            </h3>

            <p className="text-sm text-muted leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}