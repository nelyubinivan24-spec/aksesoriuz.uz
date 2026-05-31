import type { Localized } from "./catalog";

export type ProductFamilyProfile = {
  id: string;
  title: Localized;
  summary: Localized;
  bestFor: Localized[];
  skuSeries: string[];
};

export const productFamilyProfiles = [
  family(
    "menu-folders",
    "Папки и обложки для меню",
    "Menu folders and covers",
    "Индивидуальные папки для меню, барных карт и сервисных предложений с брендированием под интерьер заведения.",
    "Custom menu folders, covers, and bar-menu holders branded for the venue interior.",
    ["Рестораны", "Кафе", "Отели"],
    ["Restaurants", "Cafes", "Hotels"],
    ["MMCBM"]
  ),
  family(
    "checkholders",
    "Чекхолдеры",
    "Check holders",
    "Папки для счета и финального контакта с гостем: кожа, эко-кожа, дерево, печать, тиснение или гравировка.",
    "Bill folders for the final guest touchpoint: leather, eco-leather, wood, printing, embossing, or engraving.",
    ["Рестораны", "Кафе", "Гостиницы"],
    ["Restaurants", "Cafes", "Hotels"],
    ["CHK"]
  ),
  family(
    "checkboxes",
    "Чекбоксы",
    "Check boxes",
    "Коробки для счета и презентации оплаты, выполненные под стиль бренда и формат сервиса.",
    "Bill boxes and payment-presentation pieces produced for a brand's service style.",
    ["Рестораны", "Кафе", "Премиальный сервис"],
    ["Restaurants", "Cafes", "Premium service"],
    ["CHK"]
  ),
  family(
    "reserved-signs",
    "Таблички резерв",
    "Reserved signs",
    "Настольные таблички для бронирования столов из дерева, акрила, металла и комбинированных материалов.",
    "Table reservation signs in wood, acrylic, metal, and mixed materials.",
    ["Рестораны", "Кафе", "Отели"],
    ["Restaurants", "Cafes", "Hotels"],
    ["RZRV"]
  ),
  family(
    "serving-trays",
    "Менажницы и подносы",
    "Serving trays",
    "Сервировочные изделия для подачи, комплиментов, welcome-наборов и брендированного гостевого сервиса.",
    "Serving pieces for presentation, guest amenities, welcome sets, and branded hospitality service.",
    ["Отели", "Рестораны", "Кейтеринг"],
    ["Hotels", "Restaurants", "Catering"],
    ["MNJ"]
  ),
  family(
    "napkin-holders",
    "Салфетницы",
    "Napkin holders",
    "Салфетницы и настольные держатели, которые поддерживают единый визуальный стиль сервиса.",
    "Napkin holders and table organizers that keep service presentation visually consistent.",
    ["Рестораны", "Кафе", "Отели"],
    ["Restaurants", "Cafes", "Hotels"],
    ["SLV"]
  ),
  family(
    "table-tents",
    "Тейбл-тенты",
    "Table tents",
    "Настольные POS-материалы для меню, спецпредложений, QR, рекламы и навигации.",
    "Tabletop POS materials for menus, offers, QR codes, promotions, and navigation.",
    ["Рестораны", "Кафе", "Ритейл"],
    ["Restaurants", "Cafes", "Retail"],
    ["TBLTNT"]
  ),
  family(
    "business-card-flyer-holders",
    "Визитницы и флаерницы",
    "Business card and flyer holders",
    "Держатели для визиток, флаеров, меню и рекламных материалов в зоне контакта с клиентом.",
    "Holders for cards, flyers, menus, and promotional materials at customer touchpoints.",
    ["Рестораны", "Отели", "Офисы"],
    ["Restaurants", "Hotels", "Offices"],
    ["VZTFL"]
  ),
  family(
    "clipboards",
    "Планшеты",
    "Clipboards",
    "Планшеты и держатели для заказов, листов, меню, договоров и гостевых документов.",
    "Clipboards and holders for orders, sheets, menus, contracts, and guest documents.",
    ["Рестораны", "Отели", "Офисы"],
    ["Restaurants", "Hotels", "Offices"],
    ["PLNT"]
  ),
  family(
    "toothpick-holders",
    "Зубочистницы",
    "Toothpick holders",
    "Компактные настольные аксессуары, которые можно выполнить в общей стилистике зала.",
    "Compact table accessories produced in the same visual language as the venue.",
    ["Рестораны", "Кафе", "Отели"],
    ["Restaurants", "Cafes", "Hotels"],
    []
  ),
  family(
    "wooden-tableware",
    "Деревянная посуда",
    "Wooden tableware",
    "Деревянные изделия для подачи, дегустаций, презентаций и фирменного сервиса.",
    "Wooden pieces for serving, tastings, presentations, and branded service.",
    ["Рестораны", "Отели", "Подарочные наборы"],
    ["Restaurants", "Hotels", "Gift sets"],
    ["DRP"]
  ),
  family(
    "diaries",
    "Ежедневники и блокноты",
    "Diaries and notebooks",
    "Корпоративные ежедневники, блокноты и деловые аксессуары с логотипом, тиснением или печатью.",
    "Corporate diaries, notebooks, and business accessories with logo, embossing, or printing.",
    ["Корпоративные клиенты", "Ивенты", "Подарки"],
    ["Corporate clients", "Events", "Gifts"],
    ["BLKNT"]
  ),
  family(
    "planners",
    "Планинги и планнеры",
    "Planners",
    "Планнеры для офисов, команд, мероприятий и корпоративных подарков.",
    "Planners for offices, teams, events, and corporate gifting.",
    ["Офисы", "Команды", "Подарки"],
    ["Offices", "Teams", "Gifts"],
    ["PLN"]
  ),
  family(
    "document-folders",
    "Папки для документов",
    "Document folders",
    "Адресные, документные и подписные папки для деловых встреч, тендеров и презентаций.",
    "Document, signature, and presentation folders for meetings, tenders, and proposals.",
    ["Корпоративные клиенты", "Госучреждения", "Офисы"],
    ["Corporate clients", "Institutions", "Offices"],
    ["PPK", "UEBJ"]
  ),
  family(
    "proposal-books",
    "Каталоги и книги предложений",
    "Catalogues and proposal books",
    "Папки и книги для презентации коммерческих предложений, меню, коллекций и материалов бренда.",
    "Presentation books for proposals, menus, collections, and brand materials.",
    ["B2B-продажи", "Отели", "Ритейл"],
    ["B2B sales", "Hotels", "Retail"],
    ["SUGB"]
  ),
  family(
    "business-sets",
    "Бизнес-наборы",
    "Business sets",
    "Комплекты корпоративных подарков и деловых аксессуаров в единой брендированной подаче.",
    "Corporate gift and business accessory sets with unified branded presentation.",
    ["Подарки", "VIP-клиенты", "Ивенты"],
    ["Gifts", "VIP clients", "Events"],
    ["BZNSNBR"]
  ),
  family(
    "business-card-holders",
    "Визитницы",
    "Business card holders",
    "Визитницы и настольные аксессуары для деловых контактов и reception-зон.",
    "Business card holders and desk accessories for sales and reception areas.",
    ["Офисы", "Reception", "Подарки"],
    ["Offices", "Reception", "Gifts"],
    ["VZTN"]
  ),
  family(
    "cardholders",
    "Картхолдеры",
    "Cardholders",
    "Компактные аксессуары для карт, пропусков и корпоративных подарков.",
    "Compact accessories for cards, passes, and corporate gifts.",
    ["Корпоративные клиенты", "Офисы", "Подарки"],
    ["Corporate clients", "Offices", "Gifts"],
    ["CDH"]
  ),
  family(
    "id-covers-badges",
    "Удостоверения и бейджи",
    "ID covers and badges",
    "Бейджи, обложки и идентификационные аксессуары для персонала, мероприятий и компаний.",
    "Badges, covers, and ID accessories for staff, events, and companies.",
    ["Персонал", "Ивенты", "Компании"],
    ["Staff", "Events", "Companies"],
    ["UEBJ", "EBJ"]
  ),
  family(
    "wallets-portmone-clutches",
    "Кошельки, портмоне, клатчи",
    "Wallets, portmone, and clutches",
    "Премиальные аксессуары из кожи и эко-кожи для корпоративных подарков.",
    "Premium leather and eco-leather accessories for corporate gifting.",
    ["Подарки", "VIP-клиенты", "Ритейл"],
    ["Gifts", "VIP clients", "Retail"],
    ["KSHLK"]
  ),
  family(
    "cup-holders",
    "Подстаканники",
    "Cup holders",
    "Настольные и сервисные аксессуары для офисов, переговорных, HoReCA и подарочных наборов.",
    "Desk and service accessories for offices, meeting rooms, HoReCA, and gift sets.",
    ["Офисы", "HoReCA", "Подарки"],
    ["Offices", "HoReCA", "Gifts"],
    ["PDSTKN"]
  ),
  family(
    "keychains",
    "Брелоки",
    "Keychains",
    "Брелоки и малые брендированные аксессуары для подарков, отелей и промо-наборов.",
    "Keychains and small branded accessories for gifts, hotels, and promo sets.",
    ["Отели", "Промо", "Подарки"],
    ["Hotels", "Promo", "Gifts"],
    ["BRLK", "KYCHN"]
  ),
  family(
    "placemats",
    "Плейсметы",
    "Placemats",
    "Плейсметы для сервировки, презентации бренда и защиты поверхности стола.",
    "Placemats for table service, brand presentation, and surface protection.",
    ["Рестораны", "Кафе", "Бизнес-подарки"],
    ["Restaurants", "Cafes", "Business gifts"],
    []
  ),
  family(
    "mouse-pads",
    "Коврики для мыши",
    "Mouse pads",
    "Брендированные коврики для рабочих мест, офисов, подарков и промо-наборов.",
    "Branded mouse pads for workplaces, offices, gifts, and promo sets.",
    ["Офисы", "Команды", "Подарки"],
    ["Offices", "Teams", "Gifts"],
    ["KVRKMK"]
  ),
  family(
    "packaging",
    "Брендированная упаковка",
    "Branded packaging",
    "Пакеты, вставки, презентационные элементы и упаковочные решения под продукт или подарок.",
    "Bags, inserts, presentation elements, and packaging solutions for products or gifts.",
    ["Ритейл", "Подарки", "Запуски продуктов"],
    ["Retail", "Gifts", "Product launches"],
    ["KTLG"]
  ),
  family(
    "souvenir-products",
    "Сувенирная продукция",
    "Souvenir products",
    "Сувениры и промо-изделия с индивидуальным брендированием и упаковкой.",
    "Souvenirs and promo items with custom branding and packaging.",
    ["Промо", "Ивенты", "Корпоративные клиенты"],
    ["Promo", "Events", "Corporate clients"],
    []
  ),
  family(
    "uniforms",
    "Униформа",
    "Uniforms",
    "Форма для команд, ресторанов, отелей, ритейла и мероприятий с нанесением бренда.",
    "Uniforms for teams, restaurants, hotels, retail, and events with brand application.",
    ["Персонал", "HoReCA", "Ритейл"],
    ["Staff", "HoReCA", "Retail"],
    ["UNFM"]
  ),
  family(
    "textile-products",
    "Текстильная продукция",
    "Textile products",
    "Текстильные изделия и аксессуары для команд, сервиса, подарков и фирменной среды.",
    "Textile items and accessories for teams, service, gifting, and branded environments.",
    ["Команды", "Сервис", "Подарки"],
    ["Teams", "Service", "Gifts"],
    []
  ),
  family(
    "aprons",
    "Фартуки",
    "Aprons",
    "Фартуки для ресторанов, кофеен, производств и промо-команд с брендированием.",
    "Aprons for restaurants, coffee shops, production teams, and promo staff with branding.",
    ["Кафе", "Рестораны", "Команды"],
    ["Cafes", "Restaurants", "Teams"],
    ["FART"]
  ),
  family(
    "boxes",
    "Футляры и коробки",
    "Boxes and cases",
    "Премиальные футляры, коробки и упаковочные конструкции для подарков и презентаций.",
    "Premium cases, boxes, and packaging structures for gifts and presentations.",
    ["Подарки", "Ритейл", "VIP-презентации"],
    ["Gifts", "Retail", "VIP presentations"],
    ["BX"]
  )
] as const satisfies readonly ProductFamilyProfile[];

export type ProductFamilyId = (typeof productFamilyProfiles)[number]["id"];

export function getProductFamilyProfile(id: string) {
  return productFamilyProfiles.find((familyProfile) => familyProfile.id === id);
}

export function getProductFamilyProfiles(ids: readonly string[]) {
  return productFamilyProfiles.filter((familyProfile) => ids.includes(familyProfile.id));
}

function family(
  id: string,
  ruTitle: string,
  enTitle: string,
  ruSummary: string,
  enSummary: string,
  ruBestFor: string[],
  enBestFor: string[],
  skuSeries: string[]
): ProductFamilyProfile {
  return {
    id,
    title: { ru: ruTitle, en: enTitle },
    summary: { ru: ruSummary, en: enSummary },
    bestFor: ruBestFor.map((item, index) => ({ ru: item, en: enBestFor[index] ?? item })),
    skuSeries
  };
}
