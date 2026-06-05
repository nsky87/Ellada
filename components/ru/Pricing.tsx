"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Старт",
    price: "от $500",
    description: "Для малого бизнеса и личных брендов которым нужен чистый и профессиональный сайт.",
    features: [
      "До 5 страниц",
      "Мобильная адаптация",
      "WordPress CMS",
      "Форма обратной связи",
      "Базовая SEO настройка",
      "Google Analytics",
      "2 раунда правок",
      "14 дней поддержки после запуска",
    ],
      cta: "Начать проект",
      highlight: false,
    },
  {
    name: "Студия",
    price: "от $1 000",
    description: "Для тех кто хочет сайт с характером — выразительный, быстрый и заточенный под результат.",
    features: [
      "До 12 страниц",
      "Кастомный UI и дизайн бренда",
      "Next.js или WordPress",
      "Анимации и взаимодействия",
      "Полная SEO оптимизация",
      "Блог или портфолио",
      "3 раунда правок",
      "30 дней поддержки после запуска",
    ],
    cta: "Начать проект",
    highlight: true,
  },
  {
    name: "Кастом",
    price: "по запросу",
    description: "Сложные проекты и амбициозные бренды которым нужно что-то по-настоящему уникальное.",
    features: [
      "Любое количество страниц",
      "Полностью кастомная разработка",
      "Next.js / React",
      "Интеграции и API",
      "Многоязычность",
      "Интернет-магазин или бронирование",
      "Приоритетные сроки",
      "Долгосрочная поддержка",
    ],
    cta: "Обсудить проект",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="section-header mb-6 flex items-center justify-between border-b pb-6"
      >
        <h2 className="text-3xl font-light md:text-5xl">Стоимость</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">Пакеты</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="pricing-subhead mb-16"
      >
        Прозрачные цены без сюрпризов. Каждый проект начинается с бесплатной консультации.
      </motion.p>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`}
          >
            {plan.highlight && (
              <div className="pricing-badge">Популярный выбор</div>
            )}
            <p className="pricing-name">{plan.name}</p>
            <p className="pricing-price">{plan.price}</p>
            <div className="pricing-line my-6" />
            <p className="pricing-description mb-8">{plan.description}</p>
            <ul className="pricing-features mb-10 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="pricing-feature-item">
                  <Check size={13} className="pricing-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={plan.highlight ? "primary-button block text-center mt-8" : "pricing-cta-outline block text-center mt-8"}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="pricing-footnote mt-12"
      >
        Все цены являются ориентировочными. Точное предложение после консультации. НДС может применяться.
      </motion.p>
    </section>
  );
}