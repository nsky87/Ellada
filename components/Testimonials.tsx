"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Ellada completely transformed our online presence. The site feels premium, loads instantly, and we've seen a real increase in enquiries since launch.",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Mitchell Interiors",
    type: "Brand & Web Design",
  },
  {
    quote: "They didn't just build a website — they built a tool that works for our business. Clean, fast, and exactly what we needed to attract the right clients.",
    name: "James Okafor",
    role: "CEO",
    company: "Okafor Consulting",
    type: "Custom Web Development",
  },
  {
    quote: "The attention to detail is unlike anything I've experienced with other studios. Every pixel feels intentional. Our clients constantly compliment the site.",
    name: "Anna Kovács",
    role: "Creative Director",
    company: "Studio Kovács",
    type: "Next.js Website",
  },
  {
    quote: "Fast, communicative and incredibly talented. The result exceeded our expectations — and the ongoing support means we never have to worry about our site.",
    name: "David Reinholt",
    role: "Co-Founder",
    company: "Reinholt Legal",
    type: "WordPress Development",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => go(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () => go(current === testimonials.length - 1 ? 0 : current + 1);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mb-16 flex items-center justify-between border-b section-header pb-6"
      >
        <h2 className="text-3xl font-light md:text-5xl">Client Stories</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">
          Testimonials
        </span>
      </motion.div>

      {/* ФОНОВАЯ КАВЫЧКА */}
      <div className="testimonial-bg-quote" aria-hidden="true">"</div>

      {/* СЛАЙДЕР */}
      <div className="relative mx-auto max-w-3xl">

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (d) => ({ opacity: 0, x: d * 60 }),
              center: { opacity: 1, x: 0 },
              exit: (d) => ({ opacity: 0, x: d * -60 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="testimonial-card"
          >
            <div className="testimonial-quote-mark">"</div>

            <p className="testimonial-text">{t.quote}</p>

            <div className="testimonial-line mt-8 mb-6" />

            <div className="flex items-center justify-between">
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}, {t.company}</p>
              </div>
              <span className="testimonial-type">{t.type}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* НАВИГАЦИЯ */}
        <div className="mt-10 flex items-center justify-between">

          {/* СТРЕЛКИ */}
          <div className="flex gap-3">
            <button onClick={prev} className="services-arrow" aria-label="Previous">
              ←
            </button>
            <button onClick={next} className="services-arrow" aria-label="Next">
              →
            </button>
          </div>

          {/* ТОЧКИ */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`testimonial-dot ${i === current ? "testimonial-dot--active" : ""}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* СЧЁТЧИК */}
          <p className="testimonial-counter">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>

        </div>
      </div>

    </section>
  );
}