import type { Locale } from "./site";

export type Localized = Record<Locale, string>;

export type LegacyLink = {
  label: Localized;
  originalSlug: string;
  originalUrl: string;
};

export type CatalogGroup = {
  id: string;
  slug: Localized;
  title: Localized;
  description: Localized;
  priority: "high" | "medium" | "low";
  tags: Localized[];
  originalUrl?: string;
  subcategories: LegacyLink[];
};

export type Capability = {
  id: string;
  slug: Localized;
  title: Localized;
  description: Localized;
  originalUrl: string;
};

const ruBase = "https://aksesoriuz.uz/ru";

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
  capability("uv-printing", "УФ-печать", "UV printing", "Нанесение изображений на кожу, пластик, дерево, металл, бумагу и другие материалы.", "Image application on leather, plastic, wood, metal, paper, and other materials.", "ultrafioletovaya-pechat"),
  capability("printing", "Полиграфия", "Printing", "Печатная продукция от макета до постпечатной обработки.", "Printed products from layout to post-printing finishing.", "poligrafiya"),
  capability("foiling", "Фольгирование", "Foiling", "Декоративное фольгирование для премиального вида продукции.", "Decorative foiling for a premium product finish.", "folgirovanie-1"),
  capability("laser-cutting-engraving", "Лазерная резка и гравировка", "Laser cutting and engraving", "Точная резка и гравировка по дереву, коже, акрилу и другим материалам.", "Precise cutting and engraving on wood, leather, acrylic, and other materials.", "lazernaya-rezka"),
  capability("embossing", "Тиснение", "Embossing", "Рельефное нанесение логотипов и узоров на кожу, бумагу, дерево и другие материалы.", "Relief logo and pattern application on leather, paper, wood, and other materials.", "tisnenie"),
  capability("marking", "Маркировка", "Marking", "Маркировка продукции и брендированных деталей.", "Product and branded detail marking.", "markirovka-1"),
  capability("food-photography", "Food съемка", "Food photography", "Фотосъемка еды и продукции для меню, каталогов и рекламы.", "Food and product photography for menus, catalogs, and advertising.", "food-semka"),
  capability("souvenir-production", "Сувенирная продукция", "Souvenir production", "Изготовление брендированной сувенирной продукции.", "Production of branded souvenir products.", "upakovochnaya-suvenirnaya-produkciya"),
  capability("uniforms-textile", "Униформа и текстильная продукция", "Uniforms and textile products", "Производство униформы и текстильных изделий под бренд.", "Production of uniforms and branded textile products.", "uniforma-i-tekstilnaya-produkciya"),
  capability("carpentry-production", "Столярное производство", "Carpentry production", "Изделия из дерева и столярные решения для бизнеса.", "Wooden products and carpentry solutions for business.", "stolyarnoe-proizvodstvo")
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

function capability(id: string, ruTitle: string, enTitle: string, ruDescription: string, enDescription: string, originalSlug: string): Capability {
  return {
    id,
    slug: { ru: id, en: id },
    title: { ru: ruTitle, en: enTitle },
    description: { ru: ruDescription, en: enDescription },
    originalUrl: `${ruBase}/${originalSlug}/`
  };
}
