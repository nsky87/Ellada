"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const lang = pathname.startsWith("/ru") ? "ru" : "en";

  const navItems = lang === "ru"
    ? [
        { label: "Услуги", href: "#services" },
        { label: "Работы", href: "#work" },
        { label: "Контакты", href: "#contact" },
      ]
    : [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
      ];

  const ctaLabel = lang === "ru" ? "Написать нам" : "Let's Talk";
  const switchHref = lang === "ru" ? "/" : "/ru";
  const switchLabel = lang === "ru" ? "EN" : "RU";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed left-1/2 top-6 z-50 w-[92%] max-w-6xl -translate-x-1/2"
      >
        <div className="site-header flex items-center justify-between rounded-full px-6 py-4">

          <a href="#hero" className="header-logo">Ellada</a>

          {/* <a href={lang === "ru" ? "/ru" : "/"} className="flex items-center">
            <img
              src="/images/logo-dark.png"
              alt="Ellada Studio"
              className="dark-logo h-12 w-auto pl-1"
            />
            <img
              src="/images/logo-light.png"
              alt="Ellada Studio"
              className="light-logo h-12 w-auto pl-1"
            />
          </a>*/}

          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">

            <a href={switchHref} className="header-lang-switch">
              {switchLabel}
            </a>

            <button
              onClick={toggleTheme}
              className="header-icon-button flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="header-icon-button flex items-center justify-center md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <a href="#contact" className="primary-button text-xs hidden md:inline-block">
              {ctaLabel}
            </a>

          </div>
        </div>
      </motion.header>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="mobile-menu fixed left-1/2 top-28 z-40 w-[90%] max-w-sm -translate-x-1/2 rounded-[2rem] p-6 md:hidden"
        >
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="nav-link text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}