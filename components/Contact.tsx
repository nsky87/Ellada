"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function Contact() {

  const { theme } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const floatUp = {
    y: [0, -4, 0],
  };

  const floatDown = {
    y: [0, 4, 0],
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {

        setSuccess(true);

        setForm({
          name: "",
          email: "",
          message: "",
          website: "",
        });

      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />

      </div>

      <div className="relative z-10 grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>

          <h2
            className={`text-5xl font-light leading-[1.05] md:text-7xl ${
              theme === "light"
                ? "text-[#102033]"
                : "text-white"
            }`}
          >
            Let's create
            <span className="block italic text-[var(--accent)]">
              something timeless.
            </span>
          </h2>

          <p
            className={`mt-10 max-w-md text-lg leading-relaxed ${
              theme === "light"
                ? "text-[#6d7b88]"
                : "text-neutral-400"
            }`}
          >
            Tell us about your project. We'll suggest the best solution and help you build or improve your website.
          </p>

          {/* CONTACT INFO */}
          <div className="my-10 space-y-5">

            <div className="flex items-center gap-4 mt-5">

            {/* TELEGRAM */}
            <motion.a
              href="https://t.me/+380999391627"
              target="_blank"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.12 }}
              className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[var(--accent)]"
              >
                <path
                  d="M21.5 4.5L2.5 11.5L9.5 13.5L11.5 20.5L21.5 4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>

            {/* WHATSAPP */}
            <motion.a
              href="https://wa.me/+380999391627"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                y: [0, 4, 0],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.12 }}
              className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[var(--accent)]"
              >
                <path
                  d="M20 11.5C20 16.2 16.2 20 11.5 20C10.1 20 8.8 19.6 7.7 18.9L4 20L5.2 16.4C4.4 15.2 4 13.9 4 12.5C4 7.8 7.8 4 12.5 4C17.2 4 20 7.8 20 11.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>

          </div>

          </div>

        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative rounded-[2.5rem] border p-8 md:p-10 ${
            theme === "light"
              ? "border-black/5 bg-black/[0.02]"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >

          <div className="grid gap-6">

            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className={`h-14 rounded-2xl border px-5 outline-none transition-all duration-300 ${
                theme === "light"
                  ? "border-black/10 bg-white/60 focus:border-black/30"
                  : "border-white/10 bg-black/20 focus:border-white/30"
              }`}
            />

            <input
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className={`h-14 rounded-2xl border px-5 outline-none transition-all duration-300 ${
                theme === "light"
                  ? "border-black/10 bg-white/60 focus:border-black/30"
                  : "border-white/10 bg-black/20 focus:border-white/30"
              }`}
            />

            <textarea
              rows={7}
              required
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className={`rounded-2xl border p-5 outline-none resize-none transition-all duration-300 ${
                theme === "light"
                  ? "border-black/10 bg-white/60 focus:border-black/30"
                  : "border-white/10 bg-black/20 focus:border-white/30"
              }`}
            />

            {/* HONEYPOT */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(e) =>
                setForm({
                  ...form,
                  website: e.target.value,
                })
              }
              className="hidden"
            />

            <div className="flex items-center gap-5">

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[var(--accent)] px-8 py-4 text-sm uppercase tracking-[0.25em] text-black transition-all duration-500 hover:scale-[1.03] disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

              {success && (
                <p className="text-sm text-green-500">
                  Message sent successfully.
                </p>
              )}

            </div>

          </div>

        </motion.form>

      </div>
    </section>
  );
}