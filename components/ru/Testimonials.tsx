"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const testimonials = [
  {
    quote: "Ellada полностью изменила наше присутствие в интернете. Сайт ощущается дорого, грузится мгновенно — и запросов стало заметно больше.",
    name: "Сара Митчелл",
    role: "Основатель",
    company: "Mitchell Interiors",
    type: "Брендинг и веб-дизайн",
  },
  {
    quote: "Они сделали не просто сайт — они сделали инструмент продаж. Чистый, быстрый, и именно то, что нужно чтобы привлекать нужных клиентов.",
    name: "Джеймс Окафор",
    role: "CEO",
    company: "Okafor Consulting",
    type: "Кастомная разработка",
  },
  {
    quote: "Такого внимания к деталям я не встречала ни в одной студии. Каждый элемент продуман. Клиенты регулярно спрашивают кто делал сайт.",
    name: "Анна Ковач",
    role: "Креативный директор",
    company: "Studio Kovács",
    type: "Сайт на Next.js",
  },
  {
    quote: "Быстро, чётко и очень талантливо. Результат превзошёл ожидания — а поддержка после запуска означает что я вообще не думаю о сайте.",
    name: "Давид Райнхольт",
    role: "Сооснователь",
    company: "Reinholt Legal",
    type: "WordPress разработка",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);

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
        <h2 className="text-3xl font-light md:text-5xl">Истории клиентов</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">
          Отзывы
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
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (diff > 50) next();
              if (diff < -50) prev();
            }}
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
          <div className="hidden md:flex gap-3">
            <button onClick={prev} className="services-arrow" aria-label="Previous">
              ←
            </button>
            <button onClick={next} className="services-arrow" aria-label="Next">
              →
            </button>
          </div>

          {/* ТОЧКИ */}
          <div className="flex gap-2 mx-auto md:mx-0">
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
          <p className="testimonial-counter hidden md:block">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>

        </div>
      </div>

    </section>
  );
}