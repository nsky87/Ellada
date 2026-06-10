export default function Footer() {
  return (
    <footer className="footer-border mt-20 border-t py-16">
      <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">

        {/* BRAND */}
        <div>
          <p className="footer-brand mb-6">Ellada Studio</p>
          <p className="text-muted max-w-sm text-sm leading-relaxed">
            Modern websites and digital experiences for small businesses,
            creative brands and long-term projects.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="footer-heading mb-5">Navigation</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href="#services" className="footer-link">Services</a>
            <a href="#work" className="footer-link">Work</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>

        {/* CONTACTS */}
        <div>
          <h3 className="footer-heading mb-5">Контакты</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:hello@ellada.studio" className="footer-link">
              hello@ellada.studio
            </a>
            <a href="https://t.me/+380999391627" target="_blank" rel="noopener noreferrer" className="footer-link">
              Telegram
            </a>
            <a href="https://wa.me/380999391627" target="_blank" rel="noopener noreferrer" className="footer-link">
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-border text-muted mt-16 flex flex-col gap-4 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between">
        <p>© 2026 Ellada Studio. All rights reserved.</p>
        <p>Designed & developed with atmosphere.</p>
      </div>
    </footer>
  );
}