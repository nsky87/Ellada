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

      </body>
    </html>
  );
}