import type { CatalogGroup, Localized } from "./catalog";

export type CoveragePriority = "high" | "medium";

export type LegacySubcategoryCoverage = {
  id: string;
  slug: Localized;
  legacySlug: string;
  groupId: CatalogGroup["id"];
  title: string;
  currentUrl: string;
  currentDestination: {
    ru: string;
    en: string;
  };
  pageStrategy: "subcategory-landing-page";
  productFamilyIds: readonly string[];
  priority: CoveragePriority;
};

const ruBase = "https://aksesoriuz.uz/ru";

export const legacySubcategoryCoverage = [
  coverage("business-sets", "biznes-nabory", "business-products", "Business sets", ["business-sets"], "high"),
  coverage("diaries", "ezhednevniki", "business-products", "Diaries", ["diaries"], "high"),
  coverage("planners", "planingi-plannery", "business-products", "Planners", ["planners"], "medium"),
  coverage("business-placemats", "plejsmety", "business-products", "Business placemats", ["placemats"], "medium"),
  coverage("paper-signature-folders", "papki-dlja-bumag-i-papki-na-podpis", "business-products", "Paper and signature folders", ["document-folders"], "high"),
  coverage("catalogues-proposal-books", "katalogi-i-knigi-predlozhenij", "business-products", "Catalogues and proposal books", ["proposal-books"], "high"),
  coverage("business-card-holders", "vizitnicy", "business-products", "Business card holders", ["business-card-holders"], "medium"),
  coverage("cardholders", "kartholdery", "business-products", "Cardholders", ["cardholders"], "medium"),
  coverage("id-covers-badges", "udostoverenija-i-bejdzhiki", "business-products", "ID covers and badges", ["id-covers-badges"], "high"),
  coverage("wallets-portmone-clutches", "koshelki-portmone-klatchi", "business-products", "Wallets, portmone, and clutches", ["wallets-portmone-clutches"], "medium"),
  coverage("cup-holders", "podstakanniki", "business-products", "Cup holders", ["cup-holders"], "medium"),
  coverage("keychains", "breloki", "business-products", "Keychains", ["keychains"], "medium"),
  coverage("mouse-pads", "kovriki-dlja-myshek", "business-products", "Mouse pads", ["mouse-pads"], "medium"),

  coverage("hotel-menu-folders", "menju-i-papki", "hotel-accessories", "Hotel menus and folders", ["menu-folders"], "high"),
  coverage("hotel-serving-trays", "menazhnicy", "hotel-accessories", "Hotel serving trays", ["serving-trays"], "medium"),
  coverage("hotel-napkin-holders", "salfetnicy", "hotel-accessories", "Hotel napkin holders", ["napkin-holders"], "medium"),

  coverage("restaurant-menu-covers", "menju-i-oblozhki-dlja-menju-barnoe-menju", "restaurant-accessories", "Menu covers and bar menu", ["menu-folders"], "high"),
  coverage("restaurant-checkholders", "chekholdery", "restaurant-accessories", "Checkholders", ["checkholders"], "high"),
  coverage("restaurant-checkboxes", "chekboksy", "restaurant-accessories", "Check boxes", ["checkboxes"], "high"),
  coverage("restaurant-reserved-signs", "rezervy", "restaurant-accessories", "Reserved signs", ["reserved-signs"], "medium"),
  coverage("restaurant-serving-trays", "menazhnicy-1", "restaurant-accessories", "Serving trays", ["serving-trays"], "medium"),
  coverage("restaurant-napkin-holders", "salfetnicy-1", "restaurant-accessories", "Napkin holders", ["napkin-holders"], "medium"),
  coverage("restaurant-table-tents", "tejbl-tendy", "restaurant-accessories", "Table tents", ["table-tents"], "medium"),
  coverage("restaurant-card-flyer-holders", "vizitnica-i-flaernica", "restaurant-accessories", "Business card and flyer holders", ["business-card-flyer-holders"], "medium"),
  coverage("restaurant-clipboards", "planshety", "restaurant-accessories", "Clipboards and tablets", ["clipboards"], "medium"),
  coverage("restaurant-toothpick-holders", "zubochistnicy", "restaurant-accessories", "Toothpick holders", ["toothpick-holders"], "medium"),
  coverage("restaurant-wooden-tableware", "derevyannaya-posuda", "restaurant-accessories", "Wooden tableware", ["wooden-tableware"], "medium"),
  coverage("restaurant-placemats", "plejsmety-1", "restaurant-accessories", "Restaurant placemats", ["placemats"], "medium"),

  coverage("packaging-souvenirs", "upakovka-i-suvenirnaja-produkcija", "packaging-souvenirs", "Packaging and souvenir products", ["boxes", "packaging", "souvenir-products"], "high"),
  coverage("uniforms", "uniforma", "uniforms-textile", "Uniforms", ["uniforms", "aprons", "textile-products"], "high")
] as const satisfies readonly LegacySubcategoryCoverage[];

export function getLegacySubcategoriesByGroup(groupId: CatalogGroup["id"]) {
  return legacySubcategoryCoverage.filter((item) => item.groupId === groupId);
}

export function getLegacySubcategoryBySlug(slug: string) {
  return legacySubcategoryCoverage.find((item) => item.slug.ru === slug || item.slug.en === slug || item.legacySlug === slug);
}

function coverage(
  id: string,
  legacySlug: string,
  groupId: CatalogGroup["id"],
  title: string,
  productFamilyIds: readonly string[],
  priority: CoveragePriority
): LegacySubcategoryCoverage {
  const groupSlug = groupId;

  return {
    id,
    slug: {
      ru: id,
      en: id
    },
    legacySlug,
    groupId,
    title,
    currentUrl: `${ruBase}/${legacySlug}/`,
    currentDestination: {
      ru: `/ru/catalog/${groupSlug}/`,
      en: `/en/catalog/${groupSlug}/`
    },
    pageStrategy: "subcategory-landing-page",
    productFamilyIds,
    priority
  };
}
