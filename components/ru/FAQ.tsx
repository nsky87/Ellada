"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Сколько стоит сайт?",
    answer: "Всё зависит от проекта — большинство сайтов начинаются от €800. После короткого разговора дадим чёткую цену без скрытых платежей.",
  },
  {
    question: "Сколько времени займёт разработка?",
    answer: "Обычный сайт — 2–4 недели от дизайна до запуска. Сложные проекты — 6–8 недель. Сроки обсуждаем заранее и держим вас в курсе.",
  },
  {
    question: "Работаете с клиентами из других стран?",
    answer: "Да, и это стандартная практика. Работаем удалённо с клиентами по всей Европе — звонки, правки и сдача проекта онлайн.",
  },
  {
    question: "Что будет после запуска?",
    answer: "Предлагаем планы поддержки — сайт будет быстрым, безопасным и актуальным. Правки контента, новые функции, редизайн — всё это доступно.",
  },
  {
    question: "Можете переделать мой существующий сайт?",
    answer: "Да, это одно из наших любимых направлений. Смотрим что есть, честно говорим что стоит оставить, а что переделать — и предлагаем лучший путь.",
  },
  {
    question: "Нужно ли разбираться в технологиях?",
    answer: "Совсем нет. Берём на себя всё — от дизайна до запуска. Объясняем простым языком и убеждаемся что вы уверенно работаете с сайтом после сдачи.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="section-header mb-16 flex items-center justify-between border-b pb-6"
      >
        <h2 className="text-2xl font-light md:text-5xl">Вопросы и ответы</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">FAQ</span>
      </motion.div>

      <div className="grid gap-0 md:grid-cols-[1fr_1.6fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col justify-start pt-2"
        >
          <p className="faq-side-label">Есть вопросы?</p>
          <p className="faq-side-text">
            Всё что нужно знать перед стартом. Не нашли ответ?  
          </p>
          <a href="#contact" className="faq-side-link mt-6">
            Напишите нам — всегда рады помочь! →
          </a>
        </motion.div>

        <div>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-trigger"
                aria-expanded={openIndex === index}
              >
                <span className="faq-num">0{index + 1}</span>
                <span className="faq-trigger-text">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-trigger-icon"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="faq-answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}