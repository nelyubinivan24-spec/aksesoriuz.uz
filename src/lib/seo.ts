import { site, type Locale } from "@data/site";

export type SeoProps = {
  title: string;
  description: string;
  locale: Locale;
  path: string;
  image?: string;
  noindex?: boolean;
};

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function localeAlternates(pathWithoutLocale: string) {
  const cleanPath = pathWithoutLocale.replace(/^\/+/, "");

  return {
    ru: absoluteUrl(`/ru/${cleanPath}`),
    en: absoluteUrl(`/en/${cleanPath}`),
    xDefault: absoluteUrl(`/ru/${cleanPath}`)
  };
}
