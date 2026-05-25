export default function Footer() {

  return (

    <footer className="footer-border mt-20 border-t py-16">
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>

          <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
            Ellada Studio
          </p>

          <p
            className="text-muted mt-6 max-w-sm text-sm leading-relaxed">
            Modern websites and digital experiences for small businesses,
            creative brands and long-term projects.
          </p>

        </div>

        {/* NAVIGATION */}
        <div>

          <h3
            className="footer-heading mb-5">
            Navigation
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <a href="#hero" className="footer-link">
              Home
            </a>

            <a href="#services" className="footer-link">
              Services
            </a>

            <a href="#work" className="footer-link">
              Work
            </a>

            <a href="#contact" className="footer-link">
              Contact
            </a>

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3
            className="footer-heading mb-5">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-sm text-muted">

            <a
              href="mailto:hello@ellada.studio"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              hello@ellada.studio
            </a>

            <a
              href="tel:+41000000000"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              +38 099 939 16 27
            </a>

            <p>
              Switzerland
            </p>

          </div>

        </div>

        {/* SOCIALS */}
        <div>

          <h3
            className="footer-heading mb-5">
            Social
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              className="footer-link"
            >
              Telegram
            </a>

            <a
              href="https://wa.me/41000000000"
              target="_blank"
              className="footer-link"
            >
              WhatsApp
            </a>

            <a
              href="https://github.com/yourgithub"
              target="_blank"
              className="footer-link"
            >
              GitHub
            </a>

            <a
              href="https://www.behance.net/"
              target="_blank"
              className="footer-link"
            >
              Behance
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-border text-muted mt-16 flex flex-col gap-4 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between">

        <p>
          © 2026 Ellada Studio. All rights reserved.
        </p>

        <p>
          Designed & developed with atmosphere.
        </p>

      </div>
    </footer>

  );
}