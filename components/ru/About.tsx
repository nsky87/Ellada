"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

        <div>
          <p className="section-label mb-5 border-b pb-6 text-sm uppercase tracking-[0.35em]">
            О нас
          </p>
          <h2 className="text-primary max-w-3xl text-3xl font-light leading-tight md:text-5xl">
            Создаём веб-сайты,
            <span className="text-accent block italic">
              которые действительно работают на ваш бизнес.
            </span>
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-primary text-base leading-relaxed">
            Разрабатываем и создаем сайты для малого бизнеса и личных брендов — лаконичные, быстрые, способные произвести сильное впечатление и превратить посетителей в реальных клиентов.
          </p>
          <p className="text-muted mt-6 text-base leading-relaxed">
            Мы работаем с WordPress, Next.js и чистым HTML — выбирая то, что лучше всего подходит для вашего проекта. Мы берем на себя весь цикл работ: от создания первых макетов до запуска сайта.
          </p>
        </div>

      </div>
    </section>
  );
}