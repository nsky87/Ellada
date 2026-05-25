"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const projects = [
  {
    title: "Taurus Strategy",
    category: "Business Consulting / International Services",
    description:
      "Premium consulting website created for an international business strategy company offering corporate formation, global expansion and compliance services with modern UI and structured user flow.",
    image: "/images/portfolio/taurusstrategy-uk.jpg",
  },
  {
    title: "AREUS",
    category: "Industrial / Manufacturing Website",
    description:
      "Corporate website developed for an industrial manufacturing company with structured service presentation, multilingual support and responsive layouts focused on clarity and business communication.",
    image: "/images/portfolio/areus.jpg",
  },
  {
    title: "HD Design",
    category: "Interior Design / Portfolio Website",
    description:
      "Elegant portfolio website for an interior design studio featuring visual storytelling, refined layouts and responsive presentation tailored for premium branding.",
    image: "/images/portfolio/hd-design.jpg",
  },
  {
    title: "SEO Hub",
    category: "SEO / Digital Marketing Website",
    description:
      "SEO-oriented business website built with clear service architecture, performance optimization and modern responsive layouts focused on online visibility.",
    image: "/images/portfolio/seo-hub.png",
  },
  {
    title: "IsraStar",
    category: "Travel Services / Multilingual Website",
    description:
      "Modern multilingual website developed for an international travel-oriented business with accessible structure, responsive layouts and service-focused user experience.",
    image: "/images/portfolio/israstar.jpg",
  },
  {
    title: "ResumePerk",
    category: "Career Services / Educational Platform",
    description:
      "Conversion-focused service platform developed for professional resume and career services with structured navigation, optimized content hierarchy and responsive UX.",
    image: "/images/portfolio/resumeperk.png",
  },
  {
    title: "Taurus LG",
    category: "Legal Services / Corporate Platform",
    description:
      "Large-scale multilingual corporate platform for an international legal services company focused on company formation, banking solutions and business consulting across European jurisdictions.",
    image: "/images/portfolio/tauruslg-com.png",
  },
  {
    title: "ZemicRussia",
    category: "Industrial Solutions / Corporate Website",
    description:
      "Modern industrial website designed to present technical services and manufacturing solutions through clean structure, responsive design and optimized user experience.",
    image: "/images/portfolio/zemic.jpg",
  },
];

export default function Work() {
  const { theme } = useTheme();

  return (
    <section id="work" className="py-24">
      {/* HEADER */}
      <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-6">
        <h2 className="text-3xl font-light md:text-5xl">
          Selected Work
        </h2>

        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Case Studies
        </span>
      </div>

      {/* GRID */}
      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div className="flex flex-col">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-[1.2rem] border border-white/10 cursor-pointer
                ${
                  theme === "light"
                    ? "bg-[#f8f9fb] backdrop-blur-xl"
                    : "bg-[#11151c]"
                }`}
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-[360px] overflow-hidden">

                {/* SCROLL IMAGE */}
                <motion.div
                  className="
                    absolute inset-0 h-[340%]
                    bg-cover bg-top
                    transition-transform duration-[6000ms]
                    ease-out
                    group-hover:-translate-y-[800px]
                  "
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "100% auto",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                  }}
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute bottom-5 left-5 z-20 transition-opacity duration-300 group-hover:opacity-0 group-hover:translate-y-2 transition-all">

                  <p className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white/80
                    backdrop-blur-sm
                  ">
                    {project.category}
                  </p>

                </div>

                {/* HOVER CONTENT */}
                <div
                  className="
                    absolute inset-0 z-30
                    flex flex-col justify-end
                    p-6
                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-700 ease-out
                    bg-black/2
                    backdrop-blur-[0.5px]
                  "
                >
                  <p className={`text-sm leading-relaxed text-white/80 bg-black/40 p-2 rounded-md text-center
                  ${
                    theme === "light"
                      ? "bg-[#ffffff]"
                      : "bg-[#11151c]"
                  }`}>
                    {project.description}
                  </p>

                </div>

              </div>            
            </motion.div>

            {/* TITLE */}
            <div className="px-2 pt-4">

              <h3
                className={`text-lg font-light transition-colors duration-300
                  ${
                    theme === "light"
                      ? "text-[#102033]"
                      : "text-white"
                  }
                `}
              >
                {project.title}
              </h3>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}