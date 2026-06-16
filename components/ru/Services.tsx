"use client";

import { motion } from "framer-motion";
import { Code2, Orbit, Feather, Layers3 } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Code2,
    title: "Разработка сайтов",
    small: "WordPress • Next.js • React • HTML • CSS • JavaScript",
    text: "От простой визитки до сложного веб-приложения — быстро, адаптивно и с умом.",
  },
  {
    icon: Orbit,
    title: "Поддержка и обслуживание",
    small: "Обновления • Исправления • Производительность • Правки контента",
    text: "Не исчезаем после запуска. Обновляем, правим, держим сайт в порядке — вы занимаетесь бизнесом.",
  },
  {
    icon: Feather,
    title: "Брендинг и дизайн",
    small: "UI Дизайн • Визуальная идентичность • Логотипы • Типографика",
    text: "Бренд с характером — минималистичный, запоминающийся, такой который хочется показывать.",
  },
  {
    icon: Layers3,
    title: "SEO и оптимизация",
    small: "SEO структура • Производительность • Core Web Vitals • Мобильная оптимизация",
    text: "Красивый сайт без трафика — деньги на ветер. Делаем так, чтобы вас находили и выбирали.",
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 380 : -380,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <div className="section-header mb-8 md:mb-16 flex items-center justify-between border-b pb-6">
          <h2 className="text-3xl font-light md:text-5xl">Услуги</h2>
          <div className="flex items-center gap-4">
            <span className="section-label text-sm uppercase tracking-[0.3em]">
              Что мы делаем
            </span>
            {/* СТРЕЛКИ */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="services-arrow"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="services-arrow"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* СЛАЙДЕР */}
        <div
          ref={scrollRef}
          className="services-slider"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="service-card services-slide group relative overflow-hidden flex-shrink-0"
              >
                <div className="service-card-glow absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/5 pointer-events-none" />

                <div className="mb-6">
                  <Icon size={22} className="text-accent" />
                </div>

                <h3 className="mb-4 text-2xl font-light">{service.title}</h3>

                <div className="service-card-line mb-8 transition-all duration-700 group-hover:w-40" />

                <p className="service-card-tags mb-5">{service.small}</p>

                <p className="service-card-text leading-relaxed">{service.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ИНДИКАТОРЫ — мобайл */}
        <p className="services-hint mt-6 md:hidden">
          ←   →
        </p>

      </motion.div>
    </section>
  );
}