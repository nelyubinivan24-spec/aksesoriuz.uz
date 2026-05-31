export const site = {
  name: "Aksessoriuz",
  url: "https://aksesoriuz.uz",
  defaultLocale: "ru",
  locales: ["ru", "en"] as const,
  contacts: {
    phonePrimary: "+998998281994",
    phonePrimaryLabel: "+998 (99) 828 19 94",
    phoneSecondary: "+998977540788",
    phoneSecondaryLabel: "+998 (97) 754 07 88",
    email: "info@aksesoriuz.uz",
    telegram: "https://t.me/aksesori_iz",
    address: {
      ru: "г. Ташкент, ул. Кушбеги 6",
      en: "6 Kushbegi St, Tashkent, Uzbekistan"
    }
  }
};

export type Locale = (typeof site.locales)[number];
