"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Знакомство",
    text: "Разбираемся в вашем бизнесе, задачах и аудитории. Бесплатная консультация — никакого давления.",
    duration: "1–2 дня",
  },
  {
    number: "02",
    title: "Дизайн",
    text: "Сделаем концепцию под ваш бренд — атмосфера, шрифты, структура. Всё согласовываем до старта разработки.",
    duration: "3–5 дней",
  },
  {
    number: "03",
    title: "Разработка",
    text: "Пишем чистый код, тестируем на всех устройствах, следим за скоростью. Без компромиссов по качеству.",
    duration: "1–3 недели",
  },
  {
    number: "04",
    title: "Запуск",
    text: "Выкатываем сайт, настраиваем аналитику и базовое SEO. И остаёмся на связи — это не конец, а начало.",
    duration: "1–2 дня",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="section-header mb-16 flex items-center justify-between border-b pb-6"
      >
        <h2 className="text-3xl font-light md:text-5xl">Как мы работаем</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">
          Процесс
        </span>
      </motion.div>

      <div className="relative">
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
              <div className="process-dot" />
              <p className="process-number">{step.number}</p>
              <h3 className="process-title">{step.title}</h3>
              <div className="process-card-line mb-5 transition-all duration-700 group-hover:w-12" />
              <p className="process-text">{step.text}</p>
              <p className="process-duration mt-6">{step.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}