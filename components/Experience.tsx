"use client";

import { motion } from "framer-motion";
import { Feather, Code2, Orbit, Layers3 } from "lucide-react";

const items = [
  {
    icon: Feather,
    title: "Fast & Responsive",
    text: "Your site loads in under 2 seconds and looks sharp on every screen — phone, tablet, desktop.",
  },
  {
    icon: Code2,
    title: "Easy to Manage",
    text: "No technical knowledge needed. Update content, add pages and manage your site without touching code.",
  },
  {
    icon: Orbit,
    title: "Long-Term Support",
    text: "We don't disappear after launch. Ongoing updates, fixes and improvements whenever you need them.",
  },
  {
    icon: Layers3,
    title: "Premium Visual Style",
    text: "Every site we build has a distinct atmosphere — clean, considered and designed to make your brand memorable.",
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">

      <div className="section-header mb-24 flex items-center justify-between border-b pb-6">
        <h2 className="text-2xl font-light md:text-4xl">What You Get</h2>
        <span className="section-label text-sm uppercase">
          Philosophy & Process
        </span>
      </div>

      <div className="relative">

        {/* TIMELINE LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="timeline-line absolute left-0 top-1/2 hidden h-px w-full origin-left md:block"
        />

        <div className="grid gap-10 md:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`relative z-10 ${
                  index % 2 === 0
                    ? "md:-translate-y-10"
                    : "md:translate-y-10"
                }`}
              >
                <div className="glass-card group rounded-[2rem] p-8">

                  <div className="icon-surface mb-8 flex h-14 w-14 items-center justify-center rounded-full">
                    <Icon size={24} className="text-accent transition-all duration-500" />
                  </div>

                  <p className="card-number mb-4 text-sm uppercase tracking-[0.3em]">
                    0{index + 1}
                  </p>

                  <h3 className="card-title mb-5">{item.title}</h3>

                  <p className="text-muted leading-relaxed">{item.text}</p>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}