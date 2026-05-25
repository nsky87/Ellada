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

export default function Experience() {

  return (
    <section className="relative overflow-hidden py-40">

      <div className="section-header mb-24 flex items-center justify-between border-b pb-6">

        <h2 className="text-3xl font-light md:text-5xl">
          What You Get
        </h2>

        <span className="text-muted text-sm uppercase tracking-[0.3em]">
          Philosophy & Process
        </span>

      </div>

      <div className="relative">

        {/* LINE */}

        <motion.div

          initial={{ scaleX: 0 }}

          whileInView={{ scaleX: 1 }}

          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}

          viewport={{ once: true }}

          className="timeline-line absolute left-0 top-1/2 hidden h-px w-full origin-left md:block"/>

        <div className="grid gap-10 md:grid-cols-4">

          {[
            {
              icon: Feather,
              title: "Fast & Responsive",
              text: "Fast-loading responsive websites designed for smooth experience across all devices.",
            },

            {
              icon: Code2,
              title: "Easy to Manage",
              text: "Responsive development with refined interactions and smooth performance.",
            },

            {
              icon: Orbit,
              title: "Long-Term Support",
              text: "Ongoing support, improvements and technical care after launch.",
            },

            {
              icon: Layers3,
              title: "Premium Visual Style",
              text: "Minimal visual systems inspired by architecture, calmness and modern editorial design.",
            },

          ].map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity: 0,
                  y: 80,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}

                viewport={{ once: true }}

                whileHover={{
                  y: -6,
                }}

                className={`relative z-10
                ${
                  index % 2 === 0
                    ? "md:translate-y-[-40px]"
                    : "md:translate-y-[40px]"
                }`}
              >

                <div
                  className="glass-card group rounded-[2rem] p-8">

                  {/* ICON */}

                  <div className="icon-surface mb-8 flex h-14 w-14 items-center justify-center rounded-full">

                    <Icon
                      size={24}
                      className="text-accent transition-all duration-500"
                    />

                  </div>

                  {/* NUMBER */}

                  <p className="card-number mb-4 text-sm uppercase tracking-[0.3em]">
                    0{index + 1}
                  </p>

                  {/* TITLE */}

                  <h3 className="card-title mb-5">
                    {item.title}
                  </h3>

                  {/* TEXT */}

                  <p
                    className="leading-relaxed text-muted">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}