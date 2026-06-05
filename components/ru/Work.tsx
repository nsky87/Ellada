"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Taurus Strategy",
    category: "Business Consulting / International Services",
    description: "Premium consulting site for a global strategy firm. Clean structure, confident tone, built to convert.",
    image: "/images/portfolio/taurusstrategy-uk.jpg",
  },
  {
    title: "AREUS",
    category: "Industrial / Manufacturing Website",
    description: "Corporate site for a manufacturing company — clear, structured, multilingual. Serious business, serious design.",
    image: "/images/portfolio/areus.jpg",
  },
  {
    title: "HD Design",
    category: "Interior Design / Portfolio Website",
    description: "Portfolio site for an interior studio. Visual-first layout that lets the work speak for itself.",
    image: "/images/portfolio/hd-design.jpg",
  },
  {
    title: "SEO Hub",
    category: "SEO / Digital Marketing Website",
    description: "Fast, focused site for a digital marketing agency. Built for visibility — inside and out.",
    image: "/images/portfolio/seo-hub.png",
  },
  {
    title: "IsraStar",
    category: "Travel Services / Multilingual Website",
    description: "Multilingual travel site with a clear service flow. Works beautifully in three languages.",
    image: "/images/portfolio/israstar.jpg",
  },
  {
    title: "ResumePerk",
    category: "Career Services / Educational Platform",
    description: "Conversion-focused platform for career services. Every section designed to move visitors toward action.",
    image: "/images/portfolio/resumeperk.png",
  },
  {
    title: "Taurus LG",
    category: "Legal Services / Corporate Platform",
    description: "Large-scale legal platform covering company formation and banking across European jurisdictions. Complex made clear.",
    image: "/images/portfolio/tauruslg-com.png",
  },
  {
    title: "ZemicRussia",
    category: "Industrial Solutions / Corporate Website",
    description: "Industrial site with clean structure and no fluff. Technical services presented simply and professionally.",
    image: "/images/portfolio/zemic.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24">

      <div className="section-header mb-16 flex items-center justify-between border-b pb-6">
        <h2 className="text-3xl font-light md:text-5xl">Selected Work</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">
          Case Studies
        </span>
      </div>

      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div key={project.title} className="flex flex-col">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="work-card group relative overflow-hidden rounded-[1.2rem] cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative h-[360px] overflow-hidden">

                <motion.div
                  className="work-card-image absolute inset-0 h-[340%] 
                    group-hover:-translate-y-[800px]
                    transition-transform duration-[12000ms] ease-out"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* GRADIENT OVERLAY */}
                <div className="work-card-overlay absolute inset-0" />

                {/* CATEGORY — скрывается при hover */}
                <div className="work-card-category absolute bottom-5 left-5 z-20 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                    {project.category}
                  </p>
                </div>

                {/* HOVER DESCRIPTION */}
                <div className="work-card-hover absolute inset-0 z-30 flex flex-col justify-end p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                  <p className="text-sm leading-relaxed text-white/90">
                    {project.description}
                  </p>
                </div>

              </div>
            </motion.div>

            {/* TITLE */}
            <div className="px-2 pt-4">
              <h3 className="work-card-title text-lg font-light">
                {project.title}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                {project.category.split(" / ")[0]}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}