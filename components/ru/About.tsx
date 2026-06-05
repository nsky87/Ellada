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
            Мы создаём веб-сайты,
            <span className="text-accent block italic">
              которые действительно работают на ваш бизнес.
            </span>
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-primary text-base leading-relaxed">
            Ellada Studio разрабатывает и создаёт веб-сайты для малых предприятий и личных брендов — чистые, быстрые и созданные для привлечения клиентов, а не просто для комплиментов.
          </p>
          <p className="text-muted mt-6 text-base leading-relaxed">
            Мы работаем с WordPress, Next.js и обычным HTML — с тем, что лучше всего подходит для вашего проекта. От первого макета до дня запуска мы всё делаем собственными силами.
          </p>
        </div>

      </div>
    </section>
  );
}