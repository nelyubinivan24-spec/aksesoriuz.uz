import type { CatalogGroup, Localized, VisualAsset } from "./catalog";
import { catalogGroups } from "./catalog";
import type { Locale } from "./site";

export type ProductStatus = "draft-from-current-site" | "client-approved";

export type Product = {
  id: string;
  slug: Localized;
  sku: string;
  title: Localized;
  description: Localized;
  categoryIds: CatalogGroup["id"][];
  family: string;
  industries: Localized[];
  materials: Localized[];
  brandingMethods: Localized[];
  image: VisualAsset;
  legacyUrl: string;
  status: ProductStatus;
};

const site = "https://aksesoriuz.uz";

export const products: Product[] = [
  product("menu-folder-mmcbm-0001", "MMCBM-0001", "Папка для меню MMCBM-0001", "Menu folder MMCBM-0001", "restaurant-accessories", "menu-folders", "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0001/", "/data/uploads/module/blog/posts/2/500x500/624a84da4aeea.jpg"),
  product("menu-folder-mmcbm-0008", "MMCBM-0008", "Папка для меню MMCBM-0008", "Menu folder MMCBM-0008", "restaurant-accessories", "menu-folders", "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0008/", "/data/uploads/module/blog/posts/9/500x500/624a86471a568.jpg"),
  product("menu-folder-mmcbm-0065", "MMCBM-0065", "Папка для меню MMCBM-0065", "Menu folder MMCBM-0065", "restaurant-accessories", "menu-folders", "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0065/", "/data/uploads/module/blog/posts/249/500x500/6717a5d93eef0.jpg"),
  product("check-holder-chk-0002", "CHK-0002", "Чекхолдер CHK-0002", "Check holder CHK-0002", "restaurant-accessories", "checkholders", "https://aksesoriuz.uz/ru/chekholder-chk-0002/", "/data/uploads/module/blog/posts/63/500x500/624acba2e4933.jpg"),
  product("check-holder-chk-00014", "CHK-00014", "Чекхолдер CHK-00014", "Check holder CHK-00014", "restaurant-accessories", "checkholders", "https://aksesoriuz.uz/ru/chekholder-chk-00014/", "/data/uploads/module/blog/posts/75/500x500/624ace39a2439.jpg"),
  product("check-box-chk-00020", "CHK-00020", "Чекбокс CHK-00020", "Check box CHK-00020", "restaurant-accessories", "checkboxes", "https://aksesoriuz.uz/ru/chekboks-chk-00020/", "/data/uploads/module/blog/posts/81/500x500/624acf581853a.jpg"),
  product("reserved-sign-rzrv-0001", "RZRV-0001", "Резерв RZRV-0001", "Reserved sign RZRV-0001", "restaurant-accessories", "reserved-signs", "https://aksesoriuz.uz/ru/rezerv-rzrv-0001/", "/data/uploads/module/blog/posts/198/500x500/6226161a458bf.jpg"),
  product("reserved-sign-rzrv-00013", "RZRV-00013", "Резерв RZRV-00013", "Reserved sign RZRV-00013", "restaurant-accessories", "reserved-signs", "https://aksesoriuz.uz/ru/rezerv-rzrv-00013/", "/data/uploads/module/blog/posts/246/500x500/6717a315258c1.jpg"),
  product("serving-tray-mnj-0001", "MNJ-0001", "Менажница MNJ-0001", "Serving tray MNJ-0001", "restaurant-accessories", "serving-trays", "https://aksesoriuz.uz/ru/menazhnica-mnj-0001/", "/data/uploads/module/blog/posts/174/500x500/62260a226695c.jpg"),
  product("napkin-holder-slv-0002", "SLV-0002", "Салфетница SLV-0002", "Napkin holder SLV-0002", "restaurant-accessories", "napkin-holders", "https://aksesoriuz.uz/ru/salfetnica-slv-0002/", "/data/uploads/module/blog/posts/212/500x500/62261a5ab9df4.jpg"),
  product("table-tent-tbltnt-0001", "TBLTNT-0001", "Тейбл тенд TBLTNT-0001", "Table tent TBLTNT-0001", "restaurant-accessories", "table-tents", "https://aksesoriuz.uz/ru/tejbl-tend-tbltnt-0001/", "/data/uploads/module/blog/posts/221/500x500/622628a4bc3cf.jpg"),
  product("clipboard-plnt-0001", "PLNT-0001", "Планшет PLNT-0001", "Clipboard PLNT-0001", "restaurant-accessories", "clipboards", "https://aksesoriuz.uz/ru/planshet-plnt-0001/", "/data/uploads/module/blog/posts/193/500x500/6226142222c5e.jpg"),
  product("wooden-tableware-drp-0001", "DRP-0001", "Древесная посуда DRP-0001", "Wooden tableware DRP-0001", "restaurant-accessories", "wooden-tableware", "https://aksesoriuz.uz/ru/drevestnaya-posuda-drp-0001/", "/data/uploads/module/blog/posts/247/500x500/6717a43153ab9.jpg"),

  product("proposal-book-sugb-0001", "SUGB-0001", "Каталог продукции SUGB-0001", "Proposal book SUGB-0001", "business-products", "proposal-books", "https://aksesoriuz.uz/ru/katalog-produkcii-sugb-0001/", "/data/uploads/module/blog/posts/107/500x500/6225c8cd28a52.jpg"),
  product("diary-blknt-0001", "BLKNT-0001", "Ежедневник BLKNT-0001", "Diary BLKNT-0001", "business-products", "diaries", "https://aksesoriuz.uz/ru/bloknot-blknt-0001/", "/data/uploads/module/blog/posts/108/500x500/6225cd38d65fd.jpg"),
  product("diary-blknt-00012", "BLKNT-00012", "Ежедневник BLKNT-00012", "Diary BLKNT-00012", "business-products", "diaries", "https://aksesoriuz.uz/ru/ezhednevnik-blknt-00012/", "/data/uploads/module/blog/posts/118/500x500/6225d4a91d515.jpg"),
  product("document-folder-ppk-0002", "PPK-0002", "Папка для бумаг PPK-0002", "Document folder PPK-0002", "business-products", "document-folders", "https://aksesoriuz.uz/ru/papka-dlja-bumag-ppk-0002/", "/data/uploads/module/blog/posts/119/500x500/6225d5adeba2b.jpg"),
  product("planner-pln-0001", "PLN-0001", "Планнер PLN-0001", "Planner PLN-0001", "business-products", "planners", "https://aksesoriuz.uz/ru/planner-pln-0001/", "/data/uploads/module/blog/posts/127/500x500/6225df15c1714.jpg"),
  product("business-set-bznsnbr-0001", "BZNSNBR-0001", "Бизнес-набор BZNSNBR-0001", "Business set BZNSNBR-0001", "business-products", "business-sets", "https://aksesoriuz.uz/ru/biznes-nabor-bznsnbr-0001/", "/data/uploads/module/blog/posts/154/500x500/624ad50ad42ce.jpg"),
  product("cardholder-cdh-0001", "CDH-0001", "Картхолдер CDH-0001", "Cardholder CDH-0001", "business-products", "cardholders", "https://aksesoriuz.uz/ru/kartholder-cdh-0001/", "/data/uploads/module/blog/posts/157/500x500/6225fd4dbcbe1.jpg"),
  product("wallet-kshlk-0001", "KSHLK-0001", "Кошелек KSHLK-0001", "Wallet KSHLK-0001", "business-products", "wallets-portmone-clutches", "https://aksesoriuz.uz/ru/koshelek-kshlk-0001/", "/data/uploads/module/blog/posts/163/500x500/6226005667009.jpg"),
  product("mouse-pad-kvrkmk-0001", "KVRKMK-0001", "Коврик для мышки KVRKMK-0001", "Mouse pad KVRKMK-0001", "business-products", "mouse-pads", "https://aksesoriuz.uz/ru/kovrik-dlja-myshki-kvrkmk-0001/", "/data/uploads/module/blog/posts/166/500x500/62260616eb5b6.jpg"),
  product("keychain-brlk-0001", "BRLK-0001", "Брелок BRLK-0001", "Keychain BRLK-0001", "business-products", "keychains", "https://aksesoriuz.uz/ru/brelok-brlk-0001/", "/data/uploads/module/blog/posts/128/500x500/6225e0161605f.jpg"),
  product("id-cover-uebj-0001", "UEBJ-0001", "Удостоверение UEBJ-0001", "ID cover UEBJ-0001", "business-products", "id-covers-badges", "https://aksesoriuz.uz/ru/udostoverenie-uebj-0001/", "/data/uploads/module/blog/posts/223/500x500/6226214fbd4ed.jpg"),
  product("badge-uebj-0005", "UEBJ-0005", "Бейджик UEBJ-0005", "Badge UEBJ-0005", "business-products", "id-covers-badges", "https://aksesoriuz.uz/ru/bejdzhik-uebj-0005/", "/data/uploads/module/blog/posts/229/500x500/6226242a9ce64.jpg"),
  product("business-card-holder-vztn-0001", "VZTN-0001", "Визитница VZTN-0001", "Business card holder VZTN-0001", "business-products", "business-card-holders", "https://aksesoriuz.uz/ru/vizitnica-vztn-0001/", "/data/uploads/module/blog/posts/234/500x500/622626020a298.jpg"),

  product("gift-box-bx-0001", "BX-0001", "Футляр BX-0001", "Gift box BX-0001", "packaging-souvenirs", "boxes", "https://aksesoriuz.uz/ru/futljar-bx-0001/", "/data/uploads/module/blog/posts/129/500x500/6225e073c09f1.jpg"),
  product("gift-box-bx-0024", "BX-0024", "Футляр BX-0024", "Gift box BX-0024", "packaging-souvenirs", "boxes", "https://aksesoriuz.uz/ru/futljar-bx-0024/", "/data/uploads/module/blog/posts/244/500x500/6717a0a668902.jpg"),
  product("branded-bag-ktlg-0001", "KTLG-0001", "Сумка KTLG-0001", "Branded bag KTLG-0001", "packaging-souvenirs", "packaging", "https://aksesoriuz.uz/ru/sumka-ktlg-0001/", "/data/uploads/module/blog/posts/164/500x500/622600b919a78.jpg"),

  product("apron-fart-0001", "FART-0001", "Фартук FART-0001", "Apron FART-0001", "uniforms-textile", "aprons", "https://aksesoriuz.uz/ru/fartuk-fart-0001/", "/data/uploads/module/blog/posts/254/500x500/6717acd467544.jpg"),
  product("uniform-unfm-0001", "UNFM-0001", "Униформа UNFM-0001", "Uniform UNFM-0001", "uniforms-textile", "uniforms", "https://aksesoriuz.uz/ru/uniforma-unfm-0001/", "/data/uploads/module/blog/posts/256/500x500/67190b797b0c9.jpg"),
  product("uniform-unfm-0003", "UNFM-0003", "Униформа UNFM-0003", "Uniform UNFM-0003", "uniforms-textile", "uniforms", "https://aksesoriuz.uz/ru/uniforma-unfm-0003/", "/data/uploads/module/blog/posts/258/500x500/67190da074c4b.jpg")
];

export const featuredProducts = products.slice(0, 8);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug.ru === slug || product.slug.en === slug);
}

export function getProductsByCatalogGroupId(groupId: string) {
  if (groupId === "production-services") {
    return products.slice(0, 12);
  }

  return products.filter((product) => product.categoryIds.includes(groupId));
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products.filter((item) => item.id !== product.id && item.categoryIds.some((id) => product.categoryIds.includes(id))).slice(0, limit);
}

export function getProductCategoryLinks(product: Product, locale: Locale) {
  return product.categoryIds
    .map((id) => catalogGroups.find((group) => group.id === id))
    .filter(Boolean)
    .map((group) => ({
      title: group!.title[locale],
      href: `/${locale}/catalog/${group!.slug[locale]}/`
    }));
}

function product(id: string, sku: string, ruTitle: string, enTitle: string, categoryId: CatalogGroup["id"], family: string, legacyUrl: string, imagePath: string): Product {
  return {
    id,
    slug: { ru: id, en: id },
    sku,
    title: { ru: ruTitle, en: enTitle },
    description: {
      ru: "Референс для обсуждения проекта: материалы, размеры, тираж и комплектация уточняются с менеджером.",
      en: "Project discussion reference: materials, dimensions, quantity, and configuration are clarified with a manager."
    },
    categoryIds: categoryId === "restaurant-accessories" ? [categoryId, "hotel-accessories"] : [categoryId],
    family,
    industries: industryLabels(categoryId),
    materials: materialLabels(family),
    brandingMethods: brandingLabels(family),
    image: {
      src: `${site}${imagePath}`,
      alt: { ru: ruTitle, en: enTitle }
    },
    legacyUrl,
    status: "draft-from-current-site"
  };
}

function industryLabels(categoryId: CatalogGroup["id"]): Localized[] {
  if (categoryId === "restaurant-accessories") {
    return [{ ru: "Рестораны и кафе", en: "Restaurants and cafes" }, { ru: "Гостиницы", en: "Hotels" }];
  }

  if (categoryId === "business-products") {
    return [{ ru: "Корпоративные клиенты", en: "Corporate clients" }, { ru: "Офисы", en: "Offices" }];
  }

  if (categoryId === "packaging-souvenirs") {
    return [{ ru: "Ритейл и подарки", en: "Retail and gifts" }, { ru: "Презентационные наборы", en: "Presentation sets" }];
  }

  return [{ ru: "Команды и персонал", en: "Teams and staff" }, { ru: "HoReCA", en: "HoReCA" }];
}

function materialLabels(family: string): Localized[] {
  if (family.includes("wood") || family.includes("serving") || family.includes("napkin") || family.includes("table") || family.includes("reserved")) {
    return [{ ru: "дерево", en: "wood" }, { ru: "фанера", en: "plywood" }, { ru: "акрил", en: "acrylic" }];
  }

  if (family.includes("uniform") || family.includes("apron")) {
    return [{ ru: "текстиль", en: "textile" }, { ru: "брендирование", en: "branding" }];
  }

  if (family.includes("box") || family.includes("packaging")) {
    return [{ ru: "картон", en: "cardboard" }, { ru: "бумага", en: "paper" }, { ru: "декор", en: "finishing" }];
  }

  return [{ ru: "экокожа", en: "eco leather" }, { ru: "бумага", en: "paper" }, { ru: "металл", en: "metal" }];
}

function brandingLabels(family: string): Localized[] {
  if (family.includes("uniform") || family.includes("apron")) {
    return [{ ru: "вышивка", en: "embroidery" }, { ru: "печать", en: "printing" }];
  }

  if (family.includes("box") || family.includes("packaging")) {
    return [{ ru: "полиграфия", en: "printing" }, { ru: "фольгирование", en: "foiling" }];
  }

  return [{ ru: "УФ-печать", en: "UV printing" }, { ru: "тиснение", en: "embossing" }, { ru: "лазерная гравировка", en: "laser engraving" }];
}
