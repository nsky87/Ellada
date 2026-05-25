"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

        {/* LEFT */}
        <div>

          <p className="section-label mb-5 border-b pb-6 text-sm uppercase tracking-[0.35em]">
            About
          </p>

          <h2 className="text-primary max-w-3xl text-4xl font-light leading-tight md:text-6xl">
            Calm digital experiences

            <span className="text-accent block italic">
              built with clarity
            </span>
          </h2>

        </div>

        {/* RIGHT */}
        <div className="max-w-xl">

          <p className="text-primary text-base leading-relaxed">
            Ellada Studio creates modern websites for small businesses,
            personal brands and creative projects — combining visual
            atmosphere, clean development and easy-to-manage systems.
          </p>

          <p className="text-muted mt-6 text-base leading-relaxed">
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
            className="glass-card rounded-[2rem] p-8"
          >

            <h3 className="text-primary mb-4 text-xl font-bold">
              {item.title}
            </h3>

            <p className="text-muted text-sm leading-relaxed">
              {item.text}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}