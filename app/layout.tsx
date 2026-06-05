import "./globals.css";

import { Inter, Cormorant_Garamond } from "next/font/google";

import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

export const metadata = {
  title: "Ellada Studio | Web Design & Development Studio",
  description:
    "Ellada Studio designs and builds beautiful, fast websites for small businesses and personal brands — WordPress, Next.js, and custom solutions with long-term support.",
  keywords: [
    "web design studio",
    "small business website design",
    "Next.js web development",
    "WordPress website design",
    "custom website development",
    "web design and development",
    "personal brand website",
  ],
  verification: {
    google: "AMjazb6I7pWgeyAsa6EDGZbdTBPPZ8bhhovJUOkFpyc",
  },
  openGraph: {
    title: "Ellada Studio | Web Design & Development Studio",
    description:
      "We build websites for small businesses and personal brands that look premium, load fast, and actually bring in clients.",
    url: "https://ellada.studio",
    siteName: "Ellada Studio",
    images: [
      {
        url: "https://ellada.studio/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ellada Studio — Web Design with Atmosphere",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellada Studio | Web Design & Development Studio",
    description:
      "Beautiful, fast websites for small businesses and personal brands.",
    images: ["https://ellada.studio/og-image.jpg"],
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.body.classList.add(theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Ellada Studio",
              "url": "https://ellada.studio",
              "description": "Web design and development studio",
              "serviceType": "Web Design",
              "areaServed": "Worldwide",
            }),
          }}
        />
      </head>
      <body
        className={`
          ${inter.variable}
          ${cormorant.variable}
        `}
      >

        {/* THEME PROVIDER WRAP */}
        <ThemeProvider>
          <div className="site-atmosphere" />
          <Header />      
          {children}

        </ThemeProvider>

        <GoogleAnalytics gaId="G-JMVP3H49C2" />

      </body>
    </html>
  );
}