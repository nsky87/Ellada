"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Предотвращаем hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed left-1/2 top-6 z-100 w-[92%] max-w-6xl -translate-x-1/2"
      >
        <div 
          className="site-header flex items-center justify-between rounded-full px-6 py-4"
          style={{
            background: theme === "dark" 
              ? "rgba(11, 13, 16, 0.98)" 
              : "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(32px)",
            border: "1px solid rgba(214, 185, 140, 0.2)",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
          }}
        >

          <a href="#hero" className="header-logo">Ellada</a>

          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="header-icon-button flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {mounted && (
                theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="header-icon-button flex items-center justify-center md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <button className="hero-button-primary text-xs">Let's Talk</button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu */}
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