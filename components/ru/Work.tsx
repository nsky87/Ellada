"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Taurus Strategy",
    category: "Бизнес-консалтинг / Международные услуги",
    result: "Редизайн корпоративного сайта",
    tags: ["Дизайн", "Разработка"],
    description: "Сайт для международной консалтинговой компании. Чёткая структура, уверенный тон, заточен под конверсию.",
    image: "/images/portfolio/taurusstrategy-uk.jpg",
  },
  {
    title: "AREUS",
    category: "Промышленность / Производство",
    result: "Мультиязычный магазин",
    tags: ["Дизайн", "Разработка", "Мультиязычный"],
    url: "https://areus.hurteks.pl",
    description: "Корпоративный сайт для производственной компании — чёткий, структурированный, на нескольких языках.",
    image: "/images/portfolio/areus.jpg",
  },
  {
    title: "HD Design",
    category: "Интерьерный дизайн / Портфолио",
    result: "Сайт-портфолио",
    tags: ["Дизайн", "WordPress"],
    description: "Портфолио для студии интерьерного дизайна. Визуал на первом месте — работы говорят сами за себя.",
    image: "/images/portfolio/hd-design.jpg",
  },
  {
    title: "SEO Hub",
    category: "SEO / Цифровой маркетинг",
    result: "Сайт маркетингового агентства",
    tags: ["Дизайн", "SEO", "Разработка"],
    description: "Быстрый, чёткий сайт для digital-агентства. Сделан для видимости — снаружи и внутри.",
    image: "/images/portfolio/seo-hub.png",
  },
  {
    title: "IsraStar",
    category: "Туристические услуги / Мультиязычный",
    result: "Тревел-платформа · 3 языка",
    tags: ["Разработка", "Мультиязычный"],
    url: "https://israstar.com",
    description: "Мультиязычный сайт для туристического бизнеса. Работает на трёх языках без потери качества.",
    image: "/images/portfolio/israstar.jpg",
  },
  {
    title: "ResumePerk",
    category: "Карьерные услуги / Образование",
    result: "Платформа с фокусом на конверсию",
    tags: ["Дизайн", "Разработка", "SEO"],
    description: "Платформа карьерных услуг. Каждая секция — шаг к целевому действию.",
    image: "/images/portfolio/resumeperk.png",
  },
  {
    title: "Taurus LG",
    category: "Юридические услуги / Корпоративная платформа",
    result: "Крупная юридическая платформа",
    tags: ["Разработка", "Мультиязычный", "Кастом"],
    description: "Большая юридическая платформа — регистрация компаний и банковские решения по всей Европе.",
    image: "/images/portfolio/tauruslg-com.png",
  },
  {
    title: "ZemicRussia",
    category: "Промышленные решения / Корпоративный сайт",
    result: "Корпоративный промышленный сайт",
    tags: ["Дизайн", "WordPress"],
    url: "https://zem.hurteks.pl",
    description: "Промышленный сайт без лишнего. Технические услуги — просто и профессионально.",
    image: "/images/portfolio/zemic.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="section-header mb-16 flex items-center justify-between border-b pb-6">
        <h2 className="text-3xl font-light md:text-5xl">Наши работы</h2>
        <span className="section-label text-sm uppercase tracking-[0.3em]">
          Портфолио
        </span>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div key={project.title} className="flex flex-col">
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="work-card group relative overflow-hidden rounded-[1.2rem] cursor-pointer"
            >
              <div className="relative h-[360px] overflow-hidden">
                <motion.div
                  className="work-card-image absolute inset-0 h-[340%] group-hover:-translate-y-[800px] transition-transform duration-[12000ms] ease-out"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="work-card-overlay absolute inset-0" />

                <div className="work-card-category absolute bottom-5 left-5 z-20 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                    {project.category}
                  </p>
                </div>

                <div className="work-card-hover absolute inset-0 z-30 flex flex-col justify-end p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                  <p className="text-sm leading-relaxed text-white/90 mb-3">
                    {project.description}
                  </p>
                  <span className="work-card-link-hint">
                    Открыть сайт →
                  </span>
                </div>
              </div>
            </motion.a>

            <div className="px-2 pt-4">
              <p className="work-card-result">{project.result}</p>
              <h3 className="work-card-title text-lg font-light mt-1">
                {project.title}
              </h3>
              <div className="work-card-tags-row mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="work-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}