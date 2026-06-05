// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ru"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Если уже есть /ru в пути — не трогаем
  if (locales.some(locale => pathname.startsWith(`/${locale}`))) {
    return;
  }

  // Определяем язык из заголовка браузера
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLanguage.startsWith("ru") ? "ru" : "en";

  // Редирект на нужный язык
  if (preferredLocale === "ru") {
    return NextResponse.redirect(
      new URL(`/ru${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!_next|images|favicon).*)"],
};