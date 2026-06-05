"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "@/components/CountUp";

const stats = [
  {
    value: "< 2s",
    label: "Скорость загрузки",
    sub: "Быстрые сайты лучше ранжируются и конвертируют",
  },
  {
    value: "90+",
    label: "SEO оценка Lighthouse",
    sub: "Оптимизируем под поисковики с первого дня",
  },
  {
    value: "100%",
    label: "Мобильная адаптация",
    sub: "Отлично выглядит на любом устройстве",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="problem" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="problem-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <p className="section-label mb-6 text-sm uppercase tracking-[0.4em]">
          Почему это важно
        </p>

        <h2 className="problem-title">
          У большинства сайтов малого бизнеса есть одна проблема.
          <span className="block italic text-accent mt-2">
            Их никто не находит — и они не продают.
          </span>
        </h2>

        <p className="problem-description mt-10">
          Мы делаем сайты, которые работают за вас — быстрые, заметные в поиске и заточенные под то,
          чтобы посетитель стал клиентом.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="problem-stat-card">
              <p className="problem-stat-value text-accent">
                <CountUp value={item.value} start={isInView} />
              </p>
              <p className="problem-stat-label mt-2">{item.label}</p>
              <p className="problem-stat-sub mt-2">{item.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}