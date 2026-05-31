import type { Locale } from "@data/site";

export const labels = {
  ru: {
    requestQuote: "Запросить расчет",
    viewCatalog: "Смотреть каталог",
    contact: "Связаться",
    call: "Позвонить",
    messenger: "Telegram",
    language: "Язык"
  },
  en: {
    requestQuote: "Request calculation",
    viewCatalog: "View catalog",
    contact: "Contact",
    call: "Call",
    messenger: "Telegram",
    language: "Language"
  }
} satisfies Record<Locale, Record<string, string>>;

export function alternateLocale(locale: Locale): Locale {
  return locale === "ru" ? "en" : "ru";
}

export function localizedPath(locale: Locale, path = "") {
  const cleanPath = path.replace(/^\/+/, "");
  return `/${locale}/${cleanPath}`;
}
