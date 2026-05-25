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

export default function Services() {
  const { theme } = useTheme();

  return (
    <section id="services" className="py-30">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-6">

          <h2 className="text-3xl font-light md:text-5xl">
            Services
          </h2>

          <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            What we do
          </span>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "Website Development",

              small: "WordPress • Elementor • HTML • CSS • JavaScript • React • Next.js",

              text: "Modern websites built from scratch with clean structure, responsive design and smooth user experience.",
            },

            {
              title: "Support & Maintenance",

              small: "Updates • Bug fixing • Performance • Content edits • Technical support",

              text: "Ongoing website support, improvements and fixes to keep your website fast, stable and up to date.",
            },

            {
              title: "Brand Identity & Design",

              small: "UI Design • Visual Identity • Logos • Typography • Creative Direction",

              text: "Minimal and atmospheric visual systems designed to make brands feel modern, clear and memorable.",
            },

            {
              title: "SEO & Website Optimization",

              small: "SEO structure • Performance • Mobile optimization • Technical improvements",

              text: "Websites optimized for search engines, fast loading and better visibility across devices.",
            },
          ].map((service, index) => (

            <motion.div
              key={service.title}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -8,
              }}

              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 p-8 transition-all duration-500
                ${
                  theme === "light"
                    ? "bg-white/40 backdrop-blur-xl hover:bg-white/60 hover:shadow-md hover:shadow-[#89a6bf]/10"
                    : "bg-[#0f1319]/70 backdrop-blur-xl hover:bg-[#161b22] hover:border-[#d6b98c]/30 hover:shadow-lg hover:shadow-black/20"
                }
              `}
            >

              <div className={`absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                  theme === "light"
                    ? "bg-[radial-gradient(circle_at_top_left,rgba(137,166,191,0.12),transparent_60%)]"
                    : "bg-[radial-gradient(circle_at_top_left,rgba(214,185,140,0.08),transparent_60%)]"
                }`}
              /> 

              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/5 pointer-events-none" />               

              <h3 className="mb-4 text-2xl font-light">
                {service.title}
              </h3>

              <div className="mb-8 h-[1px] w-20 bg-[color:var(--accent)]/40 transition-all duration-900 group-hover:w-40" />

              <p
                className="mb-5 text-[10px] uppercase tracking-[0.18em] leading-relaxed text-[var(--accent)]"
              >
                {service.small}
              </p>

              <p className="leading-relaxed text-neutral-300">
                {service.text}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>


    </section>
  );
}