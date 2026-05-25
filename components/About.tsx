"use client";

import { useTheme } from "@/context/ThemeContext";

export default function About() {

  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

        {/* LEFT */}
        <div>

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500 border-b border-white/10 pb-6">
            About
          </p>
          

          <h2
            className={`max-w-3xl text-4xl font-light leading-tight md:text-6xl ${
              theme === "light"
                ? "text-[#102033]"
                : "text-white"
            }`}
          >
            Calm digital experiences
            <span className="block italic text-[var(--accent)]">
              built with clarity
            </span>
          </h2>

        </div>

        {/* RIGHT */}
        <div className="max-w-xl">

          <p
            className={`text-lg leading-relaxed ${
              theme === "light"
                ? "text-[#5f6b63]"
                : "text-neutral-300"
            }`}
          >
            Ellada Studio creates modern websites for small businesses,
            personal brands and creative projects — combining visual
            atmosphere, clean development and easy-to-manage systems.
          </p>

          <p
            className={`mt-6 text-base leading-relaxed ${
              theme === "light"
                ? "text-[#6d7b88]"
                : "text-neutral-400"
            }`}
          >
            We work with WordPress, Elementor and modern frontend
            technologies to build fast, responsive websites focused
            on clarity, trust and long-term support.
          </p>

        </div>

      </div>

      {/* FEATURES */}
      <div className="mt-24 grid gap-6 md:grid-cols-3">

        {[
          {
            title: "Modern Development",
            text: "Responsive websites with clean structure, smooth interactions and scalable architecture.",
          },
          {
            title: "Easy Management",
            text: "Flexible content systems designed to be simple to edit, update and support long-term.",
          },
          {
            title: "Atmosphere & Clarity",
            text: "Minimal visual direction inspired by calmness, architecture and modern editorial design.",
          },
        ].map((item) => (

          <div
            key={item.title}
            className={`group rounded-[2rem] border p-8 backdrop-blur-xl transition-all duration-500
            ${
              theme === "light"
                ? "border-white/40 bg-white/40 hover:bg-white/60"
                : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
            }`}
          >

            <h3
              className={`mb-4 text-xl font-bold ${
                theme === "light"
                  ? "text-[#102033]"
                  : "text-white"
              }`}
            >
              {item.title}
            </h3>

            <p
              className={`text-sm leading-relaxed ${
                theme === "light"
                  ? "text-[#6d7b88]"
                  : "text-neutral-400"
              }`}
            >
              {item.text}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}