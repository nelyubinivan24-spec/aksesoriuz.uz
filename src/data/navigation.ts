import type { Locale } from "./site";

type NavItem = {
  label: Record<Locale, string>;
  href: Record<Locale, string>;
};

export const mainNav: NavItem[] = [
  {
    label: { ru: "Продукция", en: "Products" },
    href: { ru: "/ru/catalog/", en: "/en/catalog/" }
  },
  {
    label: { ru: "Отрасли", en: "Industries" },
    href: { ru: "/ru/industries/", en: "/en/industries/" }
  },
  {
    label: { ru: "Услуги", en: "Services" },
    href: { ru: "/ru/services/", en: "/en/services/" }
  },
  {
    label: { ru: "Работы", en: "Work" },
    href: { ru: "/ru/work/", en: "/en/work/" }
  },
  {
    label: { ru: "О компании", en: "About" },
    href: { ru: "/ru/about/", en: "/en/about/" }
  },
  {
    label: { ru: "Контакты", en: "Contact" },
    href: { ru: "/ru/contact/", en: "/en/contact/" }
  }
];

export const footerGroups = [
  {
    title: { ru: "Продукция", en: "Products" },
    items: [
      { label: { ru: "Для ресторанов", en: "Restaurant accessories" }, href: { ru: "/ru/catalog/restaurant-accessories/", en: "/en/catalog/restaurant-accessories/" } },
      { label: { ru: "Для отелей", en: "Hotel accessories" }, href: { ru: "/ru/catalog/hotel-accessories/", en: "/en/catalog/hotel-accessories/" } },
      { label: { ru: "Бизнес-продукция", en: "Business products" }, href: { ru: "/ru/catalog/business-products/", en: "/en/catalog/business-products/" } },
      { label: { ru: "Упаковка", en: "Packaging" }, href: { ru: "/ru/catalog/packaging-souvenirs/", en: "/en/catalog/packaging-souvenirs/" } }
    ]
  },
  {
    title: { ru: "Услуги", en: "Services" },
    items: [
      { label: { ru: "УФ-печать", en: "UV printing" }, href: { ru: "/ru/services/uv-printing/", en: "/en/services/uv-printing/" } },
      { label: { ru: "Лазерная резка", en: "Laser cutting" }, href: { ru: "/ru/services/laser-cutting-engraving/", en: "/en/services/laser-cutting-engraving/" } },
      { label: { ru: "Тиснение", en: "Embossing" }, href: { ru: "/ru/services/embossing/", en: "/en/services/embossing/" } }
    ]
  }
];
