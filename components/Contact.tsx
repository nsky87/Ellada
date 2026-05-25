"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const floating = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
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
    <section id="contact" className="relative overflow-hidden py-20">

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[color:var(--accent)]/10 blur-2xl" />

      </div>

      <div className="relative z-10 grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-sm mb-5 border-b pb-6 uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>

          <h2
            className="section-title">
            Let's create
            <span className="text-accent block italic">
              something timeless.
            </span>
          </h2>

          <p
            className="mt-10 max-w-md text-lg leading-relaxed text-muted">
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
              className="p-3 rounded-full icon-button transition-all"
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
              className="p-3 rounded-full icon-button transition-all"
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
          className="glass-card relative rounded-[2.5rem] p-8 md:p-10">

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
              className="input-field h-14" />

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
              className="input-field h-14" />

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
              className="input-field p-5 resize-none" />

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
                className="primary-button"
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