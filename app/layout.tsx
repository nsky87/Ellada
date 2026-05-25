import "./globals.css";

import { Inter, Cormorant_Garamond } from "next/font/google";

import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "Ellada Studio | WordPress Website Design & Support",
  description:
    "Ellada Studio builds WordPress & Elementor websites for small businesses. Clean design, fast performance and long-term support.",
  keywords: [
    "WordPress website design",
    "Elementor developer",
    "website maintenance services",
    "web design studio",
    "small business website",
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
      <body
        className={`
          ${inter.variable}
          ${cormorant.variable}
        `}
      >

        {/* THEME PROVIDER WRAP */}
        <ThemeProvider>
          <div className="site-atmosphere" />

          {/*<div className="absolute inset-0 bg-black/35 z-[1]" />*/}

          {children}

        </ThemeProvider>

      </body>
    </html>
  );
}