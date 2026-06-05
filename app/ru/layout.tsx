import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

export const metadata = {
  title: "Ellada Studio | Веб-дизайн и разработка сайтов",
  description: "Ellada Studio создаёт красивые и быстрые сайты...",
  keywords: [
    "веб-дизайн студия",
    "разработка сайтов",
    "сайт для малого бизнеса",
    "Next.js разработчик",
    "WordPress сайт",
    "создание сайтов",
    "дизайн сайта",
  ],
  openGraph: {
    title: "Ellada Studio | Веб-дизайн и разработка сайтов",
    description: "Создаём сайты для малого бизнеса и личных брендов — красиво, быстро и с реальным результатом.",
    url: "https://ellada.studio/ru",
    siteName: "Ellada Studio",
    images: [
      {
        url: "https://ellada.studio/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ellada Studio — Веб-дизайн с атмосферой",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Просто возвращаем children — html/body уже есть в app/layout.tsx
  return <>{children}</>;
}