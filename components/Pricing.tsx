"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "from €500",
    description: "Perfect for small businesses and personal brands that need a clean, professional online presence.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "WordPress CMS",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
      "2 rounds of revisions",
      "14 days post-launch support",
    ],
    cta: "Start a Project",
    highlight: false,
  },
  {
    name: "Studio",
    price: "from €1,000",
    description: "For growing businesses that want a distinctive, high-performance website built to convert.",
    features: [
      "Up to 12 pages",
      "Custom UI & brand identity",
      "Next.js or WordPress",
      "Advanced animations",
      "Full SEO optimisation",
      "Performance optimisation",
      "Blog or portfolio section",
      "3 rounds of revisions",
      "30 days post-launch support",
    ],
    cta: "Start a Project",
    highlight: true,
  },
  {
    name: "Custom",
    price: "on request",
    description: "For complex projects, web apps and brands that need a fully bespoke digital experience.",
    features: [
      "Unlimited pages",
      "Full custom development",
      "Next.js / React",
      "Custom integrations & API",
      "E-commerce or booking",
      "Multilingual support",
      "Priority turnaround",
      "Long-term support plan",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="section-header mb-6 flex items-center justify-between border-b pb-6"
      >
        <h2 className="text-3xl font-light md:text-5xl">Pricing</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">
          Packages
        </span>
      </motion.div>

      {/* SUBHEADING */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="pricing-subhead mb-16"
      >
        Transparent pricing, no surprises. Every project starts with a free consultation.
      </motion.p>

      {/* CARDS */}
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

            {/* POPULAR BADGE */}
            {plan.highlight && (
              <div className="pricing-badge">Most Popular</div>
            )}

            {/* NAME */}
            <p className="pricing-name">{plan.name}</p>

            {/* PRICE */}
            <p className="pricing-price">{plan.price}</p>

            {/* DIVIDER */}
            <div className="pricing-line my-6" />

            {/* DESCRIPTION */}
            <p className="pricing-description mb-8">{plan.description}</p>

            {/* FEATURES */}
            <ul className="pricing-features mb-10 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="pricing-feature-item">
                  <Check size={13} className="pricing-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className={plan.highlight ? "primary-button block text-center mt-8" : "pricing-cta-outline block text-center"}
            >
              {plan.cta}
            </a>

          </motion.div>
        ))}
      </div>

      {/* FOOTNOTE */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="pricing-footnote mt-12"
      >
        All prices are estimates. Final quote provided after consultation. VAT may apply.
      </motion.p>

    </section>
  );
}