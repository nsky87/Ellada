"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20"
    >
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

        {/* LEFT */}
        <div>

          <p className="section-label mb-5 border-b pb-6 text-sm uppercase tracking-[0.35em]">
            About
          </p>

          <h2 className="text-primary max-w-3xl text-3xl font-light leading-tight md:text-5xl">
            We build websites

            <span className="text-accent block italic">
              that actually work for your business.
            </span>
          </h2>

        </div>

        {/* RIGHT */}
        <div className="max-w-xl">

          <p className="text-primary text-base leading-relaxed">
            Ellada Studio designs and builds digital products for small businesses and personal brands - clean, fast, and made to create a real impression and turn visitors into enquiries.
          </p>

          <p className="text-muted mt-6 text-base leading-relaxed">
            We work with WordPress, Next.js, React and React Native — whatever fits your project best, whether that's a website or a mobile app. From first mockup to launch day (App Store and Google Play included), we handle it all in-house.
          </p>

        </div>

      </div>
    </section>
  );
}