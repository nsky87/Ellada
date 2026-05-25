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

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section className={`relative overflow-hidden py-40
      ${
        theme === "light"
          ? "theme-light"
          : "theme-dark"
      }`}>

      <div className="mb-24 flex items-center justify-between border-b border-white/10 pb-6">

        <h2 className="text-3xl font-light md:text-5xl">
          What You Get
        </h2>

        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
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

          className={`absolute left-0 top-1/2 hidden h-[1px] w-full origin-left md:block
          ${
            theme === "light"
              ? "bg-gradient-to-r from-[#89a6bf]/10 via-[#89a6bf] to-[#89a6bf]/10"
              : "bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          }`}
        />

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
                  y: -10,
                }}

                className={`relative z-10
                ${
                  index % 2 === 0
                    ? "md:translate-y-[-40px]"
                    : "md:translate-y-[40px]"
                }`}
              >

                <div
                  className={`group rounded-[2rem] border p-8 backdrop-blur-xl transition-all duration-500
                  ${
                    theme === "light"
                      ? "border-white/40 bg-white/40 hover:bg-white/60"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                  }`}
                >

                  {/* ICON */}

                  <div
                    className={`mb-8 flex h-14 w-14 items-center justify-center rounded-full border
                    ${
                      theme === "light"
                        ? "border-[#89a6bf]/30 bg-[#89a6bf]/10"
                        : "border-[var(--accent)]/20 bg-[var(--accent)]/10"
                    }`}
                  >

                    <Icon
                      size={24}
                      className={`transition-all duration-500
                      ${
                        theme === "light"
                          ? "text-[#6f8ba3]"
                          : "text-[var(--accent)]"
                      }`}
                    />

                  </div>

                  {/* NUMBER */}

                  <p
                    className={`mb-4 text-sm uppercase tracking-[0.3em]
                    ${
                      theme === "light"
                        ? "text-[#7c8c9c]"
                        : "text-neutral-500"
                    }`}
                  >
                    0{index + 1}
                  </p>

                  {/* TITLE */}

                  <h3 className="mb-5 text-3xl font-light">
                    {item.title}
                  </h3>

                  {/* TEXT */}

                  <p
                    className={`leading-relaxed
                    ${
                      theme === "light"
                        ? "text-[#506070]"
                        : "text-neutral-400"
                    }`}
                  >
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