export default function Footer() {
  return (
    <footer className="footer-border mt-20 border-t py-16">
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <p className="footer-brand">Ellada Studio</p>
          <p className="text-muted mt-6 max-w-sm text-sm leading-relaxed">
            Современные веб-сайты и цифровые решения для малого бизнеса,
            креативные бренды и долгосрочные проекты.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="footer-heading mb-5">Меню</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href="#hero" className="footer-link">Главная</a>
            <a href="#services" className="footer-link">Услуги</a>
            <a href="#work" className="footer-link">Работы</a>
            <a href="#contact" className="footer-link">Контакты</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="footer-heading mb-5">Контакты</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:hello@ellada.studio" className="footer-link">
              hello@ellada.studio
            </a>
            <a href="tel:+380999391627" className="footer-link">
              +38 099 939 16 27
            </a>
            <p className="text-muted">Switzerland</p>
          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="footer-heading mb-5">Социальные сети</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a href="https://t.me/+380999391627" target="_blank" rel="noopener noreferrer" className="footer-link">Telegram</a>
            <a href="https://wa.me/380999391627" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-border text-muted mt-16 flex flex-col gap-4 border-t pt-8 text-sm md:flex-row md:items-center md:justify-between">
        <p>© 2026 Ellada Studio. Все права защищены.</p>
        <p>Разработано и создано с атмосферой.</p>
      </div>
    </footer>
  );
}