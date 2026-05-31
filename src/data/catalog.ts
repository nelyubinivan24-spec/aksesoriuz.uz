import type { Locale } from "./site";

export type Localized = Record<Locale, string>;

export type LegacyLink = {
  label: Localized;
  originalSlug: string;
  originalUrl: string;
};

export type VisualAsset = {
  src: string;
  alt: Localized;
};

export type CatalogGroup = {
  id: string;
  slug: Localized;
  title: Localized;
  description: Localized;
  priority: "high" | "medium" | "low";
  tags: Localized[];
  image: VisualAsset;
  originalUrl?: string;
  subcategories: LegacyLink[];
};

export type Capability = {
  id: string;
  slug: Localized;
  title: Localized;
  description: Localized;
  image: VisualAsset;
  originalUrl: string;
};

const ruBase = "https://aksesoriuz.uz/ru";
const assetBase = "https://aksesoriuz.uz";

export const catalogGroups: CatalogGroup[] = [
  {
    id: "restaurant-accessories",
    slug: { ru: "restaurant-accessories", en: "restaurant-accessories" },
    title: { ru: "Для ресторанов и кафе", en: "Restaurant and cafe accessories" },
    description: {
      ru: "Меню, чекхолдеры, резервы, тейбл-тенты, плейсметы, салфетницы, деревянная посуда и другие детали сервиса.",
      en: "Menu covers, check holders, reserves, table tents, placemats, napkin holders, wooden tableware, and other service details."
    },
    priority: "high",
    originalUrl: `${ruBase}/dlja-restoranov-i-kafe/`,
    tags: [
      { ru: "HoReCA", en: "HoReCA" },
      { ru: "Меню", en: "Menus" },
      { ru: "Сервис", en: "Service" }
    ],
    image: image("/data/uploads/module/structure/3/3/6771a1cacd536.avif", "Аксессуары для ресторанов", "Restaurant accessories"),
    subcategories: [
      legacy("Меню и обложки для меню, барное меню", "Menu and bar menu covers", "menju-i-oblozhki-dlja-menju-barnoe-menju"),
      legacy("Чекхолдеры", "Check holders", "chekholdery"),
      legacy("Чекбоксы", "Check boxes", "chekboksy"),
      legacy("Резервы", "Reserved signs", "rezervy"),
      legacy("Менажницы", "Serving trays", "menazhnicy-1"),
      legacy("Салфетницы", "Napkin holders", "salfetnicy-1"),
      legacy("Тейбл тенды", "Table tents", "tejbl-tendy"),
      legacy("Визитница и флаерница", "Business card and flyer holders", "vizitnica-i-flaernica"),
      legacy("Планшеты", "Clipboards", "planshety"),
      legacy("Зубочистницы", "Toothpick holders", "zubochistnicy"),
      legacy("Деревянная посуда", "Wooden tableware", "derevyannaya-posuda"),
      legacy("Плейсметы", "Placemats", "plejsmety-1")
    ]
  },
  {
    id: "hotel-accessories",
    slug: { ru: "hotel-accessories", en: "hotel-accessories" },
    title: { ru: "Для гостиниц", en: "Hotel and hospitality accessories" },
    description: {
      ru: "Папки, меню, салфетницы, менажницы и брендированные аксессуары для гостиничного сервиса.",
      en: "Folders, menus, napkin holders, serving trays, and branded accessories for hospitality service."
    },
    priority: "high",
    originalUrl: `${ruBase}/dlja-gostinic/`,
    tags: [
      { ru: "Отели", en: "Hotels" },
      { ru: "Гостевой сервис", en: "Guest service" },
      { ru: "Папки", en: "Folders" }
    ],
    image: image("/data/uploads/module/structure/2/3/6771a0d0c267b.avif", "Аксессуары для гостиниц", "Hotel accessories"),
    subcategories: [
      legacy("Меню и Папки", "Menus and folders", "menju-i-papki"),
      legacy("Салфетницы", "Napkin holders", "salfetnicy"),
      legacy("Менажницы", "Serving trays", "menazhnicy")
    ]
  },
  {
    id: "business-products",
    slug: { ru: "business-products", en: "business-products" },
    title: { ru: "Бизнес продукция", en: "Business products" },
    description: {
      ru: "Бизнес-наборы, ежедневники, папки, картхолдеры, удостоверения, брелоки и корпоративные аксессуары.",
      en: "Business sets, diaries, folders, cardholders, certificates, keychains, and corporate accessories."
    },
    priority: "high",
    originalUrl: `${ruBase}/biznes-produkcija/`,
    tags: [
      { ru: "B2B", en: "B2B" },
      { ru: "Подарки", en: "Gifts" },
      { ru: "Офис", en: "Office" }
    ],
    image: image("/data/uploads/module/structure/1/3/6771a06b5d4fb.avif", "Бизнес продукция", "Business products"),
    subcategories: [
      legacy("Бизнес наборы", "Business sets", "biznes-nabory"),
      legacy("Ежедневники", "Diaries", "ezhednevniki"),
      legacy("Планинги (планнеры)", "Planners", "planingi-plannery"),
      legacy("Плейсметы", "Placemats", "plejsmety"),
      legacy("Папки для бумаг и папки на подпись", "Paper and signature folders", "papki-dlja-bumag-i-papki-na-podpis"),
      legacy("Каталоги и книги предложений", "Catalogues and proposal books", "katalogi-i-knigi-predlozhenij"),
      legacy("Визитницы", "Business card holders", "vizitnicy"),
      legacy("Картхолдеры", "Cardholders", "kartholdery"),
      legacy("Удостоверения и бейджики", "ID covers and badges", "udostoverenija-i-bejdzhiki"),
      legacy("Кошельки, портмоне, клатчи", "Wallets, portmone, clutches", "koshelki-portmone-klatchi"),
      legacy("Подстаканники", "Cup holders", "podstakanniki"),
      legacy("Брелоки", "Keychains", "breloki"),
      legacy("Коврики для мышек", "Mouse pads", "kovriki-dlja-myshek")
    ]
  },
  {
    id: "packaging-souvenirs",
    slug: { ru: "packaging-souvenirs", en: "packaging-souvenirs" },
    title: { ru: "Упаковка и сувенирная продукция", en: "Packaging and souvenirs" },
    description: {
      ru: "Брендированная упаковка, сувенирная продукция, подарочные решения и презентационные наборы.",
      en: "Branded packaging, souvenir products, gift solutions, and presentation sets."
    },
    priority: "high",
    originalUrl: `${ruBase}/upakovka-i-suvenirnaja-produkcija/`,
    tags: [
      { ru: "Упаковка", en: "Packaging" },
      { ru: "Сувениры", en: "Souvenirs" },
      { ru: "Презентация", en: "Presentation" }
    ],
    image: image("/data/uploads/module/structure/4/3/6771a8394cda3.avif", "Брендированная упаковка", "Branded packaging"),
    subcategories: [
      legacy("Упаковка и Сувенирная продукция", "Packaging and souvenir products", "upakovka-i-suvenirnaja-produkcija"),
      legacy("Сувенирная продукция", "Souvenir products", "upakovochnaya-suvenirnaya-produkciya")
    ]
  },
  {
    id: "uniforms-textile",
    slug: { ru: "uniforms-textile", en: "uniforms-textile" },
    title: { ru: "Униформа и текстиль", en: "Uniforms and textile" },
    description: {
      ru: "Униформа, фартуки и текстильная продукция для ресторанов, отелей, ритейла и корпоративных команд.",
      en: "Uniforms, aprons, and textile products for restaurants, hotels, retail, and corporate teams."
    },
    priority: "medium",
    originalUrl: `${ruBase}/uniforma/`,
    tags: [
      { ru: "Униформа", en: "Uniforms" },
      { ru: "Текстиль", en: "Textile" },
      { ru: "Команда", en: "Team" }
    ],
    image: image("/data/uploads/module/structure/22/21/67b2ed9b37388.webp", "Униформа и текстиль", "Uniforms and textile"),
    subcategories: [
      legacy("Униформа", "Uniforms", "uniforma"),
      legacy("Униформа и текстильная продукция", "Uniforms and textile products", "uniforma-i-tekstilnaya-produkciya")
    ]
  },
  {
    id: "production-services",
    slug: { ru: "production-services", en: "production-services" },
    title: { ru: "Производственные услуги", en: "Production services" },
    description: {
      ru: "УФ-печать, лазерная резка и гравировка, тиснение, фольгирование, полиграфия, маркировка и столярное производство.",
      en: "UV printing, laser cutting and engraving, embossing, foiling, printing, marking, and carpentry production."
    },
    priority: "medium",
    originalUrl: `${ruBase}/uslugi/`,
    tags: [
      { ru: "УФ-печать", en: "UV printing" },
      { ru: "Лазер", en: "Laser" },
      { ru: "Тиснение", en: "Embossing" }
    ],
    image: image("/data/uploads/module/structure/27/21/67b2eef3e52aa.webp", "Производственные услуги", "Production services"),
    subcategories: [
      legacy("Ультрафиолетовая печать", "UV printing", "ultrafioletovaya-pechat"),
      legacy("Полиграфия", "Printing", "poligrafiya"),
      legacy("Фольгирование", "Foiling", "folgirovanie-1"),
      legacy("Лазерная резка и гравировка", "Laser cutting and engraving", "lazernaya-rezka"),
      legacy("Тиснение", "Embossing", "tisnenie"),
      legacy("Маркировка", "Marking", "markirovka-1"),
      legacy("Food съемка", "Food photography", "food-semka"),
      legacy("Столярное производство", "Carpentry production", "stolyarnoe-proizvodstvo")
    ]
  }
];

export const capabilities: Capability[] = [
  capability("uv-printing", "УФ-печать", "UV printing", "Нанесение изображений на кожу, пластик, дерево, металл, бумагу и другие материалы.", "Image application on leather, plastic, wood, metal, paper, and other materials.", "ultrafioletovaya-pechat", "/data/uploads/module/structure/26/21/67b2ee9c6ce05.webp"),
  capability("printing", "Полиграфия", "Printing", "Печатная продукция от макета до постпечатной обработки.", "Printed products from layout to post-printing finishing.", "poligrafiya", "/data/uploads/module/structure/24/21/67b2ee0ec79b6.webp"),
  capability("foiling", "Фольгирование", "Foiling", "Декоративное фольгирование для премиального вида продукции.", "Decorative foiling for a premium product finish.", "folgirovanie-1", "/data/uploads/module/structure/1/3/6771a06b5d4fb.avif"),
  capability("laser-cutting-engraving", "Лазерная резка и гравировка", "Laser cutting and engraving", "Точная резка и гравировка по дереву, коже, акрилу и другим материалам.", "Precise cutting and engraving on wood, leather, acrylic, and other materials.", "lazernaya-rezka", "/data/uploads/module/structure/27/21/67b2eef3e52aa.webp"),
  capability("embossing", "Тиснение", "Embossing", "Рельефное нанесение логотипов и узоров на кожу, бумагу, дерево и другие материалы.", "Relief logo and pattern application on leather, paper, wood, and other materials.", "tisnenie", "/data/uploads/module/structure/3/3/6771a1cacd536.avif"),
  capability("marking", "Маркировка", "Marking", "Маркировка продукции и брендированных деталей.", "Product and branded detail marking.", "markirovka-1", "/data/uploads/module/structure/26/21/67b2ee9c6ce05.webp"),
  capability("food-photography", "Food съемка", "Food photography", "Фотосъемка еды и продукции для меню, каталогов и рекламы.", "Food and product photography for menus, catalogs, and advertising.", "food-semka", "/data/uploads/module/structure/25/21/67b2ee446d2a7.webp"),
  capability("souvenir-production", "Сувенирная продукция", "Souvenir production", "Изготовление брендированной сувенирной продукции.", "Production of branded souvenir products.", "upakovochnaya-suvenirnaya-produkciya", "/data/uploads/module/structure/21/21/67b2ecdc95b1c.webp"),
  capability("uniforms-textile", "Униформа и текстильная продукция", "Uniforms and textile products", "Производство униформы и текстильных изделий под бренд.", "Production of uniforms and branded textile products.", "uniforma-i-tekstilnaya-produkciya", "/data/uploads/module/structure/22/21/67b2ed9b37388.webp"),
  capability("carpentry-production", "Столярное производство", "Carpentry production", "Изделия из дерева и столярные решения для бизнеса.", "Wooden products and carpentry solutions for business.", "stolyarnoe-proizvodstvo", "/data/uploads/module/structure/23/21/67b2edcf6eef6.webp")
];

export const productFamilies = [
  "menu-folders",
  "checkholders",
  "checkboxes",
  "reserved-signs",
  "serving-trays",
  "napkin-holders",
  "table-tents",
  "business-card-flyer-holders",
  "clipboards",
  "toothpick-holders",
  "wooden-tableware",
  "diaries",
  "planners",
  "document-folders",
  "proposal-books",
  "business-sets",
  "business-card-holders",
  "cardholders",
  "id-covers-badges",
  "wallets-portmone-clutches",
  "cup-holders",
  "keychains",
  "placemats",
  "mouse-pads",
  "packaging",
  "souvenir-products",
  "uniforms",
  "textile-products",
  "aprons",
  "boxes"
] as const;

export function getCatalogGroupBySlug(slug: string) {
  return catalogGroups.find((group) => group.slug.ru === slug || group.slug.en === slug);
}

export function getCapabilityBySlug(slug: string) {
  return capabilities.find((capability) => capability.slug.ru === slug || capability.slug.en === slug);
}

function legacy(ru: string, en: string, originalSlug: string): LegacyLink {
  return {
    label: { ru, en },
    originalSlug,
    originalUrl: `${ruBase}/${originalSlug}/`
  };
}

function image(src: string, ruAlt: string, enAlt: string): VisualAsset {
  return {
    src: `${assetBase}${src}`,
    alt: { ru: ruAlt, en: enAlt }
  };
}

function capability(id: string, ruTitle: string, enTitle: string, ruDescription: string, enDescription: string, originalSlug: string, imagePath: string): Capability {
  return {
    id,
    slug: { ru: id, en: id },
    title: { ru: ruTitle, en: enTitle },
    description: { ru: ruDescription, en: enDescription },
    image: image(imagePath, ruTitle, enTitle),
    originalUrl: `${ruBase}/${originalSlug}/`
  };
}
