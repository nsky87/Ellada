"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Every project is different, but most websites start from $1,500. The final price depends on the scope, features and timeline. We'll give you a clear quote after a free consultation — no hidden fees.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "A typical website takes 2–4 weeks from design to launch. Larger projects with custom features may take 6–8 weeks. We'll agree on a realistic timeline before we start and keep you updated throughout.",
  },
  {
    question: "Do you work with clients outside your country?",
    answer: "Absolutely. We work with clients across Europe, the US and beyond. Everything is handled remotely — calls, feedback and handover — so location is never an issue.",
  },
  {
    question: "What happens after the website launches?",
    answer: "We offer ongoing support and maintenance plans so your site stays fast, secure and up to date. We're also available for content updates, new features or a full redesign whenever you need it.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes — and it's one of the things we do best. Whether you need a visual refresh or a full rebuild on a modern stack, we'll assess what you have and recommend the best path forward.",
  },
  {
    question: "Do I need to know anything technical?",
    answer: "Not at all. We handle everything — design, development, hosting setup and launch. We explain things in plain language and make sure you feel confident managing your site after handover.",
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
        <h2 className="text-2xl font-light md:text-5xl">Questions & Answers</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">FAQ</span>
      </motion.div>

      <div className="grid gap-0 md:grid-cols-[1fr_1.6fr] md:gap-20">

        {/* LEFT — декоративный текст */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col justify-start pt-2"
        >
          <p className="faq-side-label">Got questions?</p>
          <p className="faq-side-text">
            Everything you need to know before starting your project.
            Can't find an answer?
          </p>
          <a href="#contact" className="faq-side-link mt-6">
            Ask us directly →
          </a>
        </motion.div>

        {/* RIGHT — аккордеон */}
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