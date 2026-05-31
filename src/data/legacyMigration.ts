import type { CatalogGroup } from "./catalog";

export type LegacyMigrationDecision = "modeled-reference-page" | "family-reference-backlog";

export type LegacyProductFamilyId = typeof legacyProductFamilies[number]["id"];

export type LegacyProductFamily = {
  id: string;
  skuCodes: readonly string[];
  categoryId: CatalogGroup["id"];
  title: string;
  defaultDestination: {
    ru: string;
    en: string;
  };
};

export type LegacyProductMigrationRecord = {
  id: string;
  sku: string;
  skuCode: string;
  familyId: LegacyProductFamilyId;
  categoryId: CatalogGroup["id"];
  ruSlug: string;
  ruUrl: string;
  enUrls: readonly string[];
  migrationDecision: LegacyMigrationDecision;
  destination: {
    ru: string;
    en: string;
  };
  notes: string;
};

export const legacyMigrationSummary = {
  checkedDate: "2026-05-31",
  sourceSitemaps: [
    "https://aksesoriuz.uz/sitemap/lang/ru",
    "https://aksesoriuz.uz/sitemap/lang/en"
  ],
  totalRuUrls: 305,
  totalEnUrls: 304,
  totalRuProductUrls: 255,
  totalEnProductUrls: 255,
  modeledReferencePages: 32,
  backlogReferenceRecords: 223,
  recordsWithoutEnMatch: 3
} as const;

export const legacyProductFamilies = [
  {
    id: "menu-folders",
    skuCodes: [
      "MMCBM"
    ],
    categoryId: "restaurant-accessories",
    title: "Menu folders and menu covers",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "checkholders",
    skuCodes: [
      "CHK"
    ],
    categoryId: "restaurant-accessories",
    title: "Checkholders",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "checkboxes",
    skuCodes: [
      "CHK"
    ],
    categoryId: "restaurant-accessories",
    title: "Check boxes",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "boxes",
    skuCodes: [
      "BX"
    ],
    categoryId: "packaging-souvenirs",
    title: "Gift boxes, cases, and packaging",
    defaultDestination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    }
  },
  {
    id: "reserved-signs",
    skuCodes: [
      "RZRV"
    ],
    categoryId: "restaurant-accessories",
    title: "Reserved signs",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "diaries",
    skuCodes: [
      "BLKNT"
    ],
    categoryId: "business-products",
    title: "Diaries and notebooks",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "serving-trays",
    skuCodes: [
      "MNJ"
    ],
    categoryId: "restaurant-accessories",
    title: "Serving trays and menazhnitsy",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "mouse-pads",
    skuCodes: [
      "KVRKMK"
    ],
    categoryId: "business-products",
    title: "Mouse pads and mats",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "id-covers-badges",
    skuCodes: [
      "UEBJ",
      "EBJ"
    ],
    categoryId: "business-products",
    title: "ID covers, certificates, and badges",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "document-folders",
    skuCodes: [
      "UEBJ",
      "PPK"
    ],
    categoryId: "business-products",
    title: "Paper, document, and signature folders",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "napkin-holders",
    skuCodes: [
      "SLV"
    ],
    categoryId: "restaurant-accessories",
    title: "Napkin holders",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "clipboards",
    skuCodes: [
      "PLNT"
    ],
    categoryId: "restaurant-accessories",
    title: "Clipboards and tablets",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "cardholders",
    skuCodes: [
      "CDH"
    ],
    categoryId: "business-products",
    title: "Cardholders",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "cup-holders",
    skuCodes: [
      "PDSTKN"
    ],
    categoryId: "business-products",
    title: "Cup holders",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "business-card-flyer-holders",
    skuCodes: [
      "VZTFL"
    ],
    categoryId: "restaurant-accessories",
    title: "Stands, flyer holders, and related holders",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "business-card-holders",
    skuCodes: [
      "VZTN"
    ],
    categoryId: "business-products",
    title: "Business card holders",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "uniforms",
    skuCodes: [
      "UNFM"
    ],
    categoryId: "uniforms-textile",
    title: "Uniforms",
    defaultDestination: {
      ru: "/ru/catalog/uniforms-textile/",
      en: "/en/catalog/uniforms-textile/"
    }
  },
  {
    id: "business-sets",
    skuCodes: [
      "BZNSNBR"
    ],
    categoryId: "business-products",
    title: "Business sets",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "aprons",
    skuCodes: [
      "FART"
    ],
    categoryId: "uniforms-textile",
    title: "Aprons",
    defaultDestination: {
      ru: "/ru/catalog/uniforms-textile/",
      en: "/en/catalog/uniforms-textile/"
    }
  },
  {
    id: "table-tents",
    skuCodes: [
      "TBLTNT"
    ],
    categoryId: "restaurant-accessories",
    title: "Table tents",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "packaging",
    skuCodes: [
      "KTLG"
    ],
    categoryId: "packaging-souvenirs",
    title: "Bags and catalog-related packaging",
    defaultDestination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    }
  },
  {
    id: "keychains",
    skuCodes: [
      "KYCHN",
      "BRLK"
    ],
    categoryId: "business-products",
    title: "Keychains",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "wooden-tableware",
    skuCodes: [
      "DRP"
    ],
    categoryId: "restaurant-accessories",
    title: "Wooden tableware",
    defaultDestination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    }
  },
  {
    id: "proposal-books",
    skuCodes: [
      "SUGB"
    ],
    categoryId: "business-products",
    title: "Catalogues and proposal books",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "wallets-portmone-clutches",
    skuCodes: [
      "KSHLK"
    ],
    categoryId: "business-products",
    title: "Wallets, portmone, and clutches",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  },
  {
    id: "planners",
    skuCodes: [
      "PLN"
    ],
    categoryId: "business-products",
    title: "Planners",
    defaultDestination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    }
  }
] as const satisfies readonly LegacyProductFamily[];

export const legacyProductMigration = [
  {
    id: "fartuk-fart-0001",
    sku: "FART-0001",
    skuCode: "FART",
    familyId: "aprons",
    categoryId: "uniforms-textile",
    ruSlug: "fartuk-fart-0001",
    ruUrl: "https://aksesoriuz.uz/ru/fartuk-fart-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/apron-fart-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/apron-fart-0001/",
      en: "/en/products/apron-fart-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "fartuk-fart-0002",
    sku: "FART-0002",
    skuCode: "FART",
    familyId: "aprons",
    categoryId: "uniforms-textile",
    ruSlug: "fartuk-fart-0002",
    ruUrl: "https://aksesoriuz.uz/ru/fartuk-fart-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/apron-fart-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/uniforms-textile/",
      en: "/en/catalog/uniforms-textile/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0001",
    sku: "BX-0001",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0001",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/gift-box-bx-0001/",
      en: "/en/products/gift-box-bx-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "futljar-bx-00010",
    sku: "BX-00010",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00010",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00010/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00010/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00011",
    sku: "BX-00011",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00011",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00011/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00011/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00012",
    sku: "BX-00012",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00012",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00012/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00012/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00013",
    sku: "BX-00013",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00013",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00013/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00013/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00014",
    sku: "BX-00014",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00014",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00014/",
    enUrls: [
      "https://aksesoriuz.uz/en/box-bx-00014/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00015",
    sku: "BX-00015",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00015",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00015/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00015/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00016",
    sku: "BX-00016",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00016",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00016/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00016/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00016-1",
    sku: "BX-00016-1",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00016-1",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00016-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/business-set-bx-00016-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00017",
    sku: "BX-00017",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00017",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00017/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00017/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00017-1",
    sku: "BX-00017-1",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00017-1",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00017-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00017-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00018",
    sku: "BX-00018",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00018",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00018/",
    enUrls: [
      "https://aksesoriuz.uz/en/box-bx-00018/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-00019",
    sku: "BX-00019",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-00019",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-00019/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-00019/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0002",
    sku: "BX-0002",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0002",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0003",
    sku: "BX-0003",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0003",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0004",
    sku: "BX-0004",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0004",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0005",
    sku: "BX-0005",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0005",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0006",
    sku: "BX-0006",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0006",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0007",
    sku: "BX-0007",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0007",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/box-bx-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0008",
    sku: "BX-0008",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0008",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0009",
    sku: "BX-0009",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0009",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0020",
    sku: "BX-0020",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0020",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0020/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0020/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0021",
    sku: "BX-0021",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0021",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0021/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0021/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0022",
    sku: "BX-0022",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0022",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0022/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0022/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0023",
    sku: "BX-0023",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0023",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0023/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0023/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "futljar-bx-0024",
    sku: "BX-0024",
    skuCode: "BX",
    familyId: "boxes",
    categoryId: "packaging-souvenirs",
    ruSlug: "futljar-bx-0024",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bx-0024/",
    enUrls: [
      "https://aksesoriuz.uz/en/case-bx-0024/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/gift-box-bx-0024/",
      en: "/en/products/gift-box-bx-0024/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "podstavka-vztfl-0001",
    sku: "VZTFL-0001",
    skuCode: "VZTFL",
    familyId: "business-card-flyer-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "podstavka-vztfl-0001",
    ruUrl: "https://aksesoriuz.uz/ru/podstavka-vztfl-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/stand-vztfl-0001/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "podstakannik-vztfl-0002",
    sku: "VZTFL-0002",
    skuCode: "VZTFL",
    familyId: "business-card-flyer-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "podstakannik-vztfl-0002",
    ruUrl: "https://aksesoriuz.uz/ru/podstakannik-vztfl-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/cup-holder-vztfl-0002/",
      "https://aksesoriuz.uz/en/stand-vztfl-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "podstavka-vztfl-0002",
    sku: "VZTFL-0002",
    skuCode: "VZTFL",
    familyId: "business-card-flyer-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "podstavka-vztfl-0002",
    ruUrl: "https://aksesoriuz.uz/ru/podstavka-vztfl-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/cup-holder-vztfl-0002/",
      "https://aksesoriuz.uz/en/stand-vztfl-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "vizitnica-vztn-0001",
    sku: "VZTN-0001",
    skuCode: "VZTN",
    familyId: "business-card-holders",
    categoryId: "business-products",
    ruSlug: "vizitnica-vztn-0001",
    ruUrl: "https://aksesoriuz.uz/ru/vizitnica-vztn-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/card-holder-vztn-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/business-card-holder-vztn-0001/",
      en: "/en/products/business-card-holder-vztn-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "vizitnica-vztn-0002",
    sku: "VZTN-0002",
    skuCode: "VZTN",
    familyId: "business-card-holders",
    categoryId: "business-products",
    ruSlug: "vizitnica-vztn-0002",
    ruUrl: "https://aksesoriuz.uz/ru/vizitnica-vztn-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/card-holder-vztn-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "vizitnica-vztn-0003",
    sku: "VZTN-0003",
    skuCode: "VZTN",
    familyId: "business-card-holders",
    categoryId: "business-products",
    ruSlug: "vizitnica-vztn-0003",
    ruUrl: "https://aksesoriuz.uz/ru/vizitnica-vztn-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/card-holder-vztn-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "biznes-nabor-bznsnbr-0001",
    sku: "BZNSNBR-0001",
    skuCode: "BZNSNBR",
    familyId: "business-sets",
    categoryId: "business-products",
    ruSlug: "biznes-nabor-bznsnbr-0001",
    ruUrl: "https://aksesoriuz.uz/ru/biznes-nabor-bznsnbr-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/business-set-bznsnbr-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/business-set-bznsnbr-0001/",
      en: "/en/products/business-set-bznsnbr-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "futljar-bznsnbr-0002",
    sku: "BZNSNBR-0002",
    skuCode: "BZNSNBR",
    familyId: "business-sets",
    categoryId: "business-products",
    ruSlug: "futljar-bznsnbr-0002",
    ruUrl: "https://aksesoriuz.uz/ru/futljar-bznsnbr-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/business-set-bznsnbr-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "biznes-nabor-bznsnbr-0003",
    sku: "BZNSNBR-0003",
    skuCode: "BZNSNBR",
    familyId: "business-sets",
    categoryId: "business-products",
    ruSlug: "biznes-nabor-bznsnbr-0003",
    ruUrl: "https://aksesoriuz.uz/ru/biznes-nabor-bznsnbr-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/business-set-bznsnbr-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kartholder-cdh-0001",
    sku: "CDH-0001",
    skuCode: "CDH",
    familyId: "cardholders",
    categoryId: "business-products",
    ruSlug: "kartholder-cdh-0001",
    ruUrl: "https://aksesoriuz.uz/ru/kartholder-cdh-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/cardholder-cdh-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/cardholder-cdh-0001/",
      en: "/en/products/cardholder-cdh-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "kartholder-cdh-0003",
    sku: "CDH-0003",
    skuCode: "CDH",
    familyId: "cardholders",
    categoryId: "business-products",
    ruSlug: "kartholder-cdh-0003",
    ruUrl: "https://aksesoriuz.uz/ru/kartholder-cdh-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/cardholder-cdh-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kartholder-cdh-0006",
    sku: "CDH-0006",
    skuCode: "CDH",
    familyId: "cardholders",
    categoryId: "business-products",
    ruSlug: "kartholder-cdh-0006",
    ruUrl: "https://aksesoriuz.uz/ru/kartholder-cdh-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/cardholder-cdh-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kartholder-cdh-0008",
    sku: "CDH-0008",
    skuCode: "CDH",
    familyId: "cardholders",
    categoryId: "business-products",
    ruSlug: "kartholder-cdh-0008",
    ruUrl: "https://aksesoriuz.uz/ru/kartholder-cdh-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/cardholder-cdh-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kartholder-cdh-0009",
    sku: "CDH-0009",
    skuCode: "CDH",
    familyId: "cardholders",
    categoryId: "business-products",
    ruSlug: "kartholder-cdh-0009",
    ruUrl: "https://aksesoriuz.uz/ru/kartholder-cdh-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/cardholder-cdh-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00020",
    sku: "CHK-00020",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00020",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00020/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00020/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/check-box-chk-00020/",
      en: "/en/products/check-box-chk-00020/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "chekboks-chk-00021",
    sku: "CHK-00021",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00021",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00021/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00021/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00022",
    sku: "CHK-00022",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00022",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00022/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00022/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00023",
    sku: "CHK-00023",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00023",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00023/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00023/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00024",
    sku: "CHK-00024",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00024",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00024/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00024/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00025",
    sku: "CHK-00025",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00025",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00025/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00025/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00029-1",
    sku: "CHK-00029-1",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00029-1",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00029-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00029-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00030",
    sku: "CHK-00030",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00030",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00030/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00030/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00034",
    sku: "CHK-00034",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00034",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00034/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00034/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekboks-chk-00035",
    sku: "CHK-00035",
    skuCode: "CHK",
    familyId: "checkboxes",
    categoryId: "restaurant-accessories",
    ruSlug: "chekboks-chk-00035",
    ruUrl: "https://aksesoriuz.uz/ru/chekboks-chk-00035/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00035/",
      "https://aksesoriuz.uz/en/checkholder-chk-00035/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00010",
    sku: "CHK-00010",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00010",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00010/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00010/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00011",
    sku: "CHK-00011",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00011",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00011/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00011/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00012",
    sku: "CHK-00012",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00012",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00012/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00012/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00013",
    sku: "CHK-00013",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00013",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00013/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00013/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00014",
    sku: "CHK-00014",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00014",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00014/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00014/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/check-holder-chk-00014/",
      en: "/en/products/check-holder-chk-00014/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "chekholder-chk-00015",
    sku: "CHK-00015",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00015",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00015/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00015/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00016",
    sku: "CHK-00016",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00016",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00016/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00016/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-chk-00017",
    sku: "CHK-00017",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-chk-00017",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-chk-00017/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-chk-00017/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00018",
    sku: "CHK-00018",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00018",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00018/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00018/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00019",
    sku: "CHK-00019",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00019",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00019/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00019/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-0002",
    sku: "CHK-0002",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-0002",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-0002/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/check-holder-chk-0002/",
      en: "/en/products/check-holder-chk-0002/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "chekholder-chk-00026",
    sku: "CHK-00026",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00026",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00026/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00026/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00027",
    sku: "CHK-00027",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00027",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00027/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00027/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00028",
    sku: "CHK-00028",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00028",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00028/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00028/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00029",
    sku: "CHK-00029",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00029",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00029/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00029/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-0003",
    sku: "CHK-0003",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-0003",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00031",
    sku: "CHK-00031",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00031",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00031/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00031/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00032",
    sku: "CHK-00032",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00032",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00032/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00032/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00033",
    sku: "CHK-00033",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00033",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00033/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00033/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00035",
    sku: "CHK-00035",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00035",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00035/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkbox-chk-00035/",
      "https://aksesoriuz.uz/en/checkholder-chk-00035/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00037",
    sku: "CHK-00037",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00037",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00037/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00037/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00039",
    sku: "CHK-00039",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00039",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00039/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00039/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-0004",
    sku: "CHK-0004",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-0004",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00040",
    sku: "CHK-00040",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00040",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00040/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00040/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00041",
    sku: "CHK-00041",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00041",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00041/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00041/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00042",
    sku: "CHK-00042",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00042",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00042/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00042/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00043",
    sku: "CHK-00043",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00043",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00043/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00043/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00044",
    sku: "CHK-00044",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00044",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00044/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00044/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00045",
    sku: "CHK-00045",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00045",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00045/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-00045/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-00046",
    sku: "CHK-00046",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-00046",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-00046/",
    enUrls: [
      "https://aksesoriuz.uz/en/check-holder-chk-00046/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-0005",
    sku: "CHK-0005",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-0005",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-0006",
    sku: "CHK-0006",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-0006",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-0007",
    sku: "CHK-0007",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-0007",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-0008",
    sku: "CHK-0008",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-0008",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "chekholder-chk-0009",
    sku: "CHK-0009",
    skuCode: "CHK",
    familyId: "checkholders",
    categoryId: "restaurant-accessories",
    ruSlug: "chekholder-chk-0009",
    ruUrl: "https://aksesoriuz.uz/ru/chekholder-chk-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/checkholder-chk-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "planshet-plnt-0001",
    sku: "PLNT-0001",
    skuCode: "PLNT",
    familyId: "clipboards",
    categoryId: "restaurant-accessories",
    ruSlug: "planshet-plnt-0001",
    ruUrl: "https://aksesoriuz.uz/ru/planshet-plnt-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/tablet-plnt-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/clipboard-plnt-0001/",
      en: "/en/products/clipboard-plnt-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "planshet-plnt-0002",
    sku: "PLNT-0002",
    skuCode: "PLNT",
    familyId: "clipboards",
    categoryId: "restaurant-accessories",
    ruSlug: "planshet-plnt-0002",
    ruUrl: "https://aksesoriuz.uz/ru/planshet-plnt-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/tablet-plnt-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "planshet-plnt-0003",
    sku: "PLNT-0003",
    skuCode: "PLNT",
    familyId: "clipboards",
    categoryId: "restaurant-accessories",
    ruSlug: "planshet-plnt-0003",
    ruUrl: "https://aksesoriuz.uz/ru/planshet-plnt-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/tablet-plnt-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "planshet-plnt-0004",
    sku: "PLNT-0004",
    skuCode: "PLNT",
    familyId: "clipboards",
    categoryId: "restaurant-accessories",
    ruSlug: "planshet-plnt-0004",
    ruUrl: "https://aksesoriuz.uz/ru/planshet-plnt-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/tablet-plnt-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "planshet-plnt-0005",
    sku: "PLNT-0005",
    skuCode: "PLNT",
    familyId: "clipboards",
    categoryId: "restaurant-accessories",
    ruSlug: "planshet-plnt-0005",
    ruUrl: "https://aksesoriuz.uz/ru/planshet-plnt-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/tablet-plnt-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "podstakannik-pdstkn-0001",
    sku: "PDSTKN-0001",
    skuCode: "PDSTKN",
    familyId: "cup-holders",
    categoryId: "business-products",
    ruSlug: "podstakannik-pdstkn-0001",
    ruUrl: "https://aksesoriuz.uz/ru/podstakannik-pdstkn-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/cup-holder-pdstkn-0001/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "podstakannik-pdstkn-0003",
    sku: "PDSTKN-0003",
    skuCode: "PDSTKN",
    familyId: "cup-holders",
    categoryId: "business-products",
    ruSlug: "podstakannik-pdstkn-0003",
    ruUrl: "https://aksesoriuz.uz/ru/podstakannik-pdstkn-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/cup-holder-pdstkn-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "podstakannik-pdstkn-0004",
    sku: "PDSTKN-0004",
    skuCode: "PDSTKN",
    familyId: "cup-holders",
    categoryId: "business-products",
    ruSlug: "podstakannik-pdstkn-0004",
    ruUrl: "https://aksesoriuz.uz/ru/podstakannik-pdstkn-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/cup-holder-pdstkn-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "podstakannik-pdstkn-0005",
    sku: "PDSTKN-0005",
    skuCode: "PDSTKN",
    familyId: "cup-holders",
    categoryId: "business-products",
    ruSlug: "podstakannik-pdstkn-0005",
    ruUrl: "https://aksesoriuz.uz/ru/podstakannik-pdstkn-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/cup-holder-pdstkn-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0001",
    sku: "BLKNT-0001",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0001",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/diary-blknt-0001/",
      en: "/en/products/diary-blknt-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "bloknot-blknt-00010",
    sku: "BLKNT-00010",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-00010",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-00010/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-00010/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "ezhednevnik-blknt-00011",
    sku: "BLKNT-00011",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "ezhednevnik-blknt-00011",
    ruUrl: "https://aksesoriuz.uz/ru/ezhednevnik-blknt-00011/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-00011/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "ezhednevnik-blknt-00012",
    sku: "BLKNT-00012",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "ezhednevnik-blknt-00012",
    ruUrl: "https://aksesoriuz.uz/ru/ezhednevnik-blknt-00012/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-00012/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/diary-blknt-00012/",
      en: "/en/products/diary-blknt-00012/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "ezhednevnik-blknt-00013",
    sku: "BLKNT-00013",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "ezhednevnik-blknt-00013",
    ruUrl: "https://aksesoriuz.uz/ru/ezhednevnik-blknt-00013/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-00013/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0002",
    sku: "BLKNT-0002",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0002",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0003",
    sku: "BLKNT-0003",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0003",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0004",
    sku: "BLKNT-0004",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0004",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0005",
    sku: "BLKNT-0005",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0005",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0006",
    sku: "BLKNT-0006",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0006",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0007",
    sku: "BLKNT-0007",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0007",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0008",
    sku: "BLKNT-0008",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0008",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bloknot-blknt-0009",
    sku: "BLKNT-0009",
    skuCode: "BLKNT",
    familyId: "diaries",
    categoryId: "business-products",
    ruSlug: "bloknot-blknt-0009",
    ruUrl: "https://aksesoriuz.uz/ru/bloknot-blknt-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/diary-blknt-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-bumag-ppk-0002",
    sku: "PPK-0002",
    skuCode: "PPK",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "papka-dlja-bumag-ppk-0002",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-bumag-ppk-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-ppk-0002/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/document-folder-ppk-0002/",
      en: "/en/products/document-folder-ppk-0002/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "papka-dlja-bumag-ppk-0003",
    sku: "PPK-0003",
    skuCode: "PPK",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "papka-dlja-bumag-ppk-0003",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-bumag-ppk-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-ppk-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "derzhatel-dlja-dokumentov-ppk-0005",
    sku: "PPK-0005",
    skuCode: "PPK",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "derzhatel-dlja-dokumentov-ppk-0005",
    ruUrl: "https://aksesoriuz.uz/ru/derzhatel-dlja-dokumentov-ppk-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/document-folder-ppk-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-bumag-ppk-0006",
    sku: "PPK-0006",
    skuCode: "PPK",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "papka-dlja-bumag-ppk-0006",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-bumag-ppk-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-ppk-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-bumag-ppk-0007",
    sku: "PPK-0007",
    skuCode: "PPK",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "papka-dlja-bumag-ppk-0007",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-bumag-ppk-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-ppk-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-bumag-ppk-0008",
    sku: "PPK-0008",
    skuCode: "PPK",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "papka-dlja-bumag-ppk-0008",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-bumag-ppk-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-ppk-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "derzhatel-dlja-bumag-ppk-0009",
    sku: "PPK-0009",
    skuCode: "PPK",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "derzhatel-dlja-bumag-ppk-0009",
    ruUrl: "https://aksesoriuz.uz/ru/derzhatel-dlja-bumag-ppk-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-ppk-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-bumag-uebj-0006",
    sku: "UEBJ-0006",
    skuCode: "UEBJ",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "papka-dlja-bumag-uebj-0006",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-bumag-uebj-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-uebj-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-bumag-uebj-0007",
    sku: "UEBJ-0007",
    skuCode: "UEBJ",
    familyId: "document-folders",
    categoryId: "business-products",
    ruSlug: "papka-dlja-bumag-uebj-0007",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-bumag-uebj-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-uebj-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "udostoverenie-uebj-0001",
    sku: "UEBJ-0001",
    skuCode: "UEBJ",
    familyId: "id-covers-badges",
    categoryId: "business-products",
    ruSlug: "udostoverenie-uebj-0001",
    ruUrl: "https://aksesoriuz.uz/ru/udostoverenie-uebj-0001/",
    enUrls: [],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/id-cover-uebj-0001/",
      en: "/en/products/id-cover-uebj-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "udostoverenie-uebj-0002",
    sku: "UEBJ-0002",
    skuCode: "UEBJ",
    familyId: "id-covers-badges",
    categoryId: "business-products",
    ruSlug: "udostoverenie-uebj-0002",
    ruUrl: "https://aksesoriuz.uz/ru/udostoverenie-uebj-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/id-card-uebj-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "udostoverenie-uebj-0003",
    sku: "UEBJ-0003",
    skuCode: "UEBJ",
    familyId: "id-covers-badges",
    categoryId: "business-products",
    ruSlug: "udostoverenie-uebj-0003",
    ruUrl: "https://aksesoriuz.uz/ru/udostoverenie-uebj-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/id-card-uebj-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "oblozhka-dlja-bumag-uebj-0003-1",
    sku: "UEBJ-0003-1",
    skuCode: "UEBJ",
    familyId: "id-covers-badges",
    categoryId: "business-products",
    ruSlug: "oblozhka-dlja-bumag-uebj-0003-1",
    ruUrl: "https://aksesoriuz.uz/ru/oblozhka-dlja-bumag-uebj-0003-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/paper-folder-uebj-0003-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "oblozhka-dlja-dokumentov-uebj-0004",
    sku: "UEBJ-0004",
    skuCode: "UEBJ",
    familyId: "id-covers-badges",
    categoryId: "business-products",
    ruSlug: "oblozhka-dlja-dokumentov-uebj-0004",
    ruUrl: "https://aksesoriuz.uz/ru/oblozhka-dlja-dokumentov-uebj-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/document-folder-uebj-0004/",
      "https://aksesoriuz.uz/en/id-card-uebj-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "udostoverenie-uebj-0004",
    sku: "UEBJ-0004",
    skuCode: "UEBJ",
    familyId: "id-covers-badges",
    categoryId: "business-products",
    ruSlug: "udostoverenie-uebj-0004",
    ruUrl: "https://aksesoriuz.uz/ru/udostoverenie-uebj-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/document-folder-uebj-0004/",
      "https://aksesoriuz.uz/en/id-card-uebj-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bejdzhik-uebj-0004-1",
    sku: "UEBJ-0004-1",
    skuCode: "UEBJ",
    familyId: "id-covers-badges",
    categoryId: "business-products",
    ruSlug: "bejdzhik-uebj-0004-1",
    ruUrl: "https://aksesoriuz.uz/ru/bejdzhik-uebj-0004-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/badge-uebj-0004-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "bejdzhik-uebj-0005",
    sku: "UEBJ-0005",
    skuCode: "UEBJ",
    familyId: "id-covers-badges",
    categoryId: "business-products",
    ruSlug: "bejdzhik-uebj-0005",
    ruUrl: "https://aksesoriuz.uz/ru/bejdzhik-uebj-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/badge-uebj-0005/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/badge-uebj-0005/",
      en: "/en/products/badge-uebj-0005/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "brelok-brlk-0001",
    sku: "BRLK-0001",
    skuCode: "BRLK",
    familyId: "keychains",
    categoryId: "business-products",
    ruSlug: "brelok-brlk-0001",
    ruUrl: "https://aksesoriuz.uz/ru/brelok-brlk-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/keychain-brlk-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/keychain-brlk-0001/",
      en: "/en/products/keychain-brlk-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "brelok-kychn-0001",
    sku: "KYCHN-0001",
    skuCode: "KYCHN",
    familyId: "keychains",
    categoryId: "business-products",
    ruSlug: "brelok-kychn-0001",
    ruUrl: "https://aksesoriuz.uz/ru/brelok-kychn-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/keychain-kychn-0001/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0001",
    sku: "MMCBM-0001",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0001",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/menu-folder-mmcbm-0001/",
      en: "/en/products/menu-folder-mmcbm-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "papka-dlja-menju-mmcbm-00012",
    sku: "MMCBM-00012",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00012",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00012/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00012/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00013",
    sku: "MMCBM-00013",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00013",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00013/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00013/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00014",
    sku: "MMCBM-00014",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00014",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00014/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00014/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00015",
    sku: "MMCBM-00015",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00015",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00015/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00015/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00016",
    sku: "MMCBM-00016",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00016",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00016/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00016/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00017",
    sku: "MMCBM-00017",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00017",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00017/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00017/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00018",
    sku: "MMCBM-00018",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00018",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00018/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00018/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00019",
    sku: "MMCBM-00019",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00019",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00019/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00019/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0002",
    sku: "MMCBM-0002",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0002",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00020",
    sku: "MMCBM-00020",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00020",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00020/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00020/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00021",
    sku: "MMCBM-00021",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00021",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00021/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00021/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00022",
    sku: "MMCBM-00022",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00022",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00022/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00022/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00023",
    sku: "MMCBM-00023",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00023",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00023/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00023/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00024",
    sku: "MMCBM-00024",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00024",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00024/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00024/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00025",
    sku: "MMCBM-00025",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00025",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00025/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00025/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00026",
    sku: "MMCBM-00026",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00026",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00026/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00026/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00027",
    sku: "MMCBM-00027",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00027",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00027/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00027/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00028",
    sku: "MMCBM-00028",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00028",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00028/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00028/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00029",
    sku: "MMCBM-00029",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00029",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00029/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00029/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0003",
    sku: "MMCBM-0003",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0003",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00030",
    sku: "MMCBM-00030",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00030",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00030/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00030/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00031",
    sku: "MMCBM-00031",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00031",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00031/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00031/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00032",
    sku: "MMCBM-00032",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00032",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00032/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00032/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00033",
    sku: "MMCBM-00033",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00033",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00033/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00033/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00034",
    sku: "MMCBM-00034",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00034",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00034/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00034/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00035",
    sku: "MMCBM-00035",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00035",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00035/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00035/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00036",
    sku: "MMCBM-00036",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00036",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00036/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00036/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00037",
    sku: "MMCBM-00037",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00037",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00037/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00037/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00038",
    sku: "MMCBM-00038",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00038",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00038/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00038/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00039",
    sku: "MMCBM-00039",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00039",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00039/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00039/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0004",
    sku: "MMCBM-0004",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0004",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00040",
    sku: "MMCBM-00040",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00040",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00040/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00040/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00041",
    sku: "MMCBM-00041",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00041",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00041/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00041/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00042",
    sku: "MMCBM-00042",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00042",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00042/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00042/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00043",
    sku: "MMCBM-00043",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00043",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00043/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00043/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00044",
    sku: "MMCBM-00044",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00044",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00044/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00044/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00045",
    sku: "MMCBM-00045",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00045",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00045/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00045/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00046",
    sku: "MMCBM-00046",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00046",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00046/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00046/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00047",
    sku: "MMCBM-00047",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00047",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00047/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00047/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00048",
    sku: "MMCBM-00048",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00048",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00048/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00048/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00049",
    sku: "MMCBM-00049",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00049",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00049/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00049/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0005",
    sku: "MMCBM-0005",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0005",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00050",
    sku: "MMCBM-00050",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00050",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00050/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00050/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00052",
    sku: "MMCBM-00052",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00052",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00052/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00052/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00053",
    sku: "MMCBM-00053",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00053",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00053/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00053/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00053-1",
    sku: "MMCBM-00053-1",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00053-1",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00053-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00053-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00054",
    sku: "MMCBM-00054",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00054",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00054/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00054/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00055",
    sku: "MMCBM-00055",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00055",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00055/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00055/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-00057",
    sku: "MMCBM-00057",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-00057",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-00057/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-00057/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0006",
    sku: "MMCBM-0006",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0006",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0007",
    sku: "MMCBM-0007",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0007",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0008",
    sku: "MMCBM-0008",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0008",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0008/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/menu-folder-mmcbm-0008/",
      en: "/en/products/menu-folder-mmcbm-0008/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "papka-dlja-menju-mmcbm-0009",
    sku: "MMCBM-0009",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0009",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0062",
    sku: "MMCBM-0062",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0062",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0062/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0062/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0063",
    sku: "MMCBM-0063",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0063",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0063/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0063/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0064",
    sku: "MMCBM-0064",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0064",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0064/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0064/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0065",
    sku: "MMCBM-0065",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0065",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0065/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0065/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/menu-folder-mmcbm-0065/",
      en: "/en/products/menu-folder-mmcbm-0065/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "papka-dlja-menju-mmcbm-0066",
    sku: "MMCBM-0066",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0066",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0066/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-0066/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-0067",
    sku: "MMCBM-0067",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-0067",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-0067/",
    enUrls: [],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-55-1",
    sku: "MMCBM-55-1",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-55-1",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-55-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-55-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-56",
    sku: "MMCBM-56",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-56",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-56/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-56/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-58",
    sku: "MMCBM-58",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-58",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-58/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-58/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-59",
    sku: "MMCBM-59",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-59",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-59/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-59/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-60",
    sku: "MMCBM-60",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-60",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-60/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-60/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "papka-dlja-menju-mmcbm-61",
    sku: "MMCBM-61",
    skuCode: "MMCBM",
    familyId: "menu-folders",
    categoryId: "restaurant-accessories",
    ruSlug: "papka-dlja-menju-mmcbm-61",
    ruUrl: "https://aksesoriuz.uz/ru/papka-dlja-menju-mmcbm-61/",
    enUrls: [
      "https://aksesoriuz.uz/en/menu-folder-mmcbm-61/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-dlja-myshki-kvrkmk-0001",
    sku: "KVRKMK-0001",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-dlja-myshki-kvrkmk-0001",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-dlja-myshki-kvrkmk-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0001/",
      "https://aksesoriuz.uz/en/mouse-pad-kvrkmk-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/mouse-pad-kvrkmk-0001/",
      en: "/en/products/mouse-pad-kvrkmk-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "kovrik-kvrkmk-0001",
    sku: "KVRKMK-0001",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0001",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0001/",
      "https://aksesoriuz.uz/en/mouse-pad-kvrkmk-0001/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-00010",
    sku: "KVRKMK-00010",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-00010",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-00010/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-00010/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-00011",
    sku: "KVRKMK-00011",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-00011",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-00011/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-00011/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-0002",
    sku: "KVRKMK-0002",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0002",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-0003",
    sku: "KVRKMK-0003",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0003",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-0004",
    sku: "KVRKMK-0004",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0004",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-0005",
    sku: "KVRKMK-0005",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0005",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-0006",
    sku: "KVRKMK-0006",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0006",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-0007",
    sku: "KVRKMK-0007",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0007",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-0008",
    sku: "KVRKMK-0008",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0008",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "kovrik-kvrkmk-0009",
    sku: "KVRKMK-0009",
    skuCode: "KVRKMK",
    familyId: "mouse-pads",
    categoryId: "business-products",
    ruSlug: "kovrik-kvrkmk-0009",
    ruUrl: "https://aksesoriuz.uz/ru/kovrik-kvrkmk-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/mat-kvrkmk-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/business-products/",
      en: "/en/catalog/business-products/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "salfetnica-slv-00010",
    sku: "SLV-00010",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-00010",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-00010/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-00010/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "salfetnica-slv-00011",
    sku: "SLV-00011",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-00011",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-00011/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-00011/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "salfetnica-slv-00012",
    sku: "SLV-00012",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-00012",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-00012/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-00012/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "salfetnica-slv-0002",
    sku: "SLV-0002",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-0002",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-0002/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/napkin-holder-slv-0002/",
      en: "/en/products/napkin-holder-slv-0002/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "salfetnica-slv-0003",
    sku: "SLV-0003",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-0003",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "salfetnica-slv-0005",
    sku: "SLV-0005",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-0005",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "salfetnica-slv-0006",
    sku: "SLV-0006",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-0006",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "salfetnica-slv-0007",
    sku: "SLV-0007",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-0007",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "salfetnica-slv-0008",
    sku: "SLV-0008",
    skuCode: "SLV",
    familyId: "napkin-holders",
    categoryId: "restaurant-accessories",
    ruSlug: "salfetnica-slv-0008",
    ruUrl: "https://aksesoriuz.uz/ru/salfetnica-slv-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/napkin-holder-slv-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "sumka-ktlg-0001",
    sku: "KTLG-0001",
    skuCode: "KTLG",
    familyId: "packaging",
    categoryId: "packaging-souvenirs",
    ruSlug: "sumka-ktlg-0001",
    ruUrl: "https://aksesoriuz.uz/ru/sumka-ktlg-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/bag-ktlg-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/branded-bag-ktlg-0001/",
      en: "/en/products/branded-bag-ktlg-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "sumka-ktlg-0002",
    sku: "KTLG-0002",
    skuCode: "KTLG",
    familyId: "packaging",
    categoryId: "packaging-souvenirs",
    ruSlug: "sumka-ktlg-0002",
    ruUrl: "https://aksesoriuz.uz/ru/sumka-ktlg-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/bag-ktlg-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/packaging-souvenirs/",
      en: "/en/catalog/packaging-souvenirs/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "planner-pln-0001",
    sku: "PLN-0001",
    skuCode: "PLN",
    familyId: "planners",
    categoryId: "business-products",
    ruSlug: "planner-pln-0001",
    ruUrl: "https://aksesoriuz.uz/ru/planner-pln-0001/",
    enUrls: [],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/planner-pln-0001/",
      en: "/en/products/planner-pln-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "katalog-produkcii-sugb-0001",
    sku: "SUGB-0001",
    skuCode: "SUGB",
    familyId: "proposal-books",
    categoryId: "business-products",
    ruSlug: "katalog-produkcii-sugb-0001",
    ruUrl: "https://aksesoriuz.uz/ru/katalog-produkcii-sugb-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/product-catalog-sugb-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/proposal-book-sugb-0001/",
      en: "/en/products/proposal-book-sugb-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "rezerv-rzrv-0001",
    sku: "RZRV-0001",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0001",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/reserved-sign-rzrv-0001/",
      en: "/en/products/reserved-sign-rzrv-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "rezerv-rzrv-0001-1",
    sku: "RZRV-0001-1",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0001-1",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0001-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0001-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-00010",
    sku: "RZRV-00010",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-00010",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-00010/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-00010/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-00011",
    sku: "RZRV-00011",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-00011",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-00011/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-00011/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-00012",
    sku: "RZRV-00012",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-00012",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-00012/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-00012/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-00013",
    sku: "RZRV-00013",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-00013",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-00013/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-00013/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/reserved-sign-rzrv-00013/",
      en: "/en/products/reserved-sign-rzrv-00013/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "rezerv-rzrv-00014",
    sku: "RZRV-00014",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-00014",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-00014/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-00014/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0002",
    sku: "RZRV-0002",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0002",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0003",
    sku: "RZRV-0003",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0003",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0003-1",
    sku: "RZRV-0003-1",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0003-1",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0003-1/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0003-1/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0004",
    sku: "RZRV-0004",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0004",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0005",
    sku: "RZRV-0005",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0005",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0006",
    sku: "RZRV-0006",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0006",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0007",
    sku: "RZRV-0007",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0007",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0008",
    sku: "RZRV-0008",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0008",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "rezerv-rzrv-0009",
    sku: "RZRV-0009",
    skuCode: "RZRV",
    familyId: "reserved-signs",
    categoryId: "restaurant-accessories",
    ruSlug: "rezerv-rzrv-0009",
    ruUrl: "https://aksesoriuz.uz/ru/rezerv-rzrv-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/reserve-rzrv-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0001",
    sku: "MNJ-0001",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0001",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/serving-tray-mnj-0001/",
      en: "/en/products/serving-tray-mnj-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "menazhnica-mnj-00010",
    sku: "MNJ-00010",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-00010",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-00010/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-00010/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-00011",
    sku: "MNJ-00011",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-00011",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-00011/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-00011/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-00012",
    sku: "MNJ-00012",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-00012",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-00012/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-00012/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhica-mnj-00013",
    sku: "MNJ-00013",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhica-mnj-00013",
    ruUrl: "https://aksesoriuz.uz/ru/menazhica-mnj-00013/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-00013/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0002",
    sku: "MNJ-0002",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0002",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0003",
    sku: "MNJ-0003",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0003",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0003/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0004",
    sku: "MNJ-0004",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0004",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0004/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0004/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0005",
    sku: "MNJ-0005",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0005",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0005/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0005/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0006",
    sku: "MNJ-0006",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0006",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0006/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0006/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0007",
    sku: "MNJ-0007",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0007",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0007/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0007/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0008",
    sku: "MNJ-0008",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0008",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0008/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0008/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "menazhnica-mnj-0009",
    sku: "MNJ-0009",
    skuCode: "MNJ",
    familyId: "serving-trays",
    categoryId: "restaurant-accessories",
    ruSlug: "menazhnica-mnj-0009",
    ruUrl: "https://aksesoriuz.uz/ru/menazhnica-mnj-0009/",
    enUrls: [
      "https://aksesoriuz.uz/en/meal-tray-mnj-0009/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "tejbl-tend-tbltnt-0001",
    sku: "TBLTNT-0001",
    skuCode: "TBLTNT",
    familyId: "table-tents",
    categoryId: "restaurant-accessories",
    ruSlug: "tejbl-tend-tbltnt-0001",
    ruUrl: "https://aksesoriuz.uz/ru/tejbl-tend-tbltnt-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/table-tent-tbltnt-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/table-tent-tbltnt-0001/",
      en: "/en/products/table-tent-tbltnt-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "tejbl-tend-tbltnt-0002",
    sku: "TBLTNT-0002",
    skuCode: "TBLTNT",
    familyId: "table-tents",
    categoryId: "restaurant-accessories",
    ruSlug: "tejbl-tend-tbltnt-0002",
    ruUrl: "https://aksesoriuz.uz/ru/tejbl-tend-tbltnt-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/table-tent-tbltnt-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/restaurant-accessories/",
      en: "/en/catalog/restaurant-accessories/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "uniforma-unfm-0001",
    sku: "UNFM-0001",
    skuCode: "UNFM",
    familyId: "uniforms",
    categoryId: "uniforms-textile",
    ruSlug: "uniforma-unfm-0001",
    ruUrl: "https://aksesoriuz.uz/ru/uniforma-unfm-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/uniform-unfm-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/uniform-unfm-0001/",
      en: "/en/products/uniform-unfm-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "uniforma-unfm-0002",
    sku: "UNFM-0002",
    skuCode: "UNFM",
    familyId: "uniforms",
    categoryId: "uniforms-textile",
    ruSlug: "uniforma-unfm-0002",
    ruUrl: "https://aksesoriuz.uz/ru/uniforma-unfm-0002/",
    enUrls: [
      "https://aksesoriuz.uz/en/uniform-unfm-0002/"
    ],
    migrationDecision: "family-reference-backlog",
    destination: {
      ru: "/ru/catalog/uniforms-textile/",
      en: "/en/catalog/uniforms-textile/"
    },
    notes: "Needs lightweight reference data or final client-approved product card before launch."
  },
  {
    id: "uniforma-unfm-0003",
    sku: "UNFM-0003",
    skuCode: "UNFM",
    familyId: "uniforms",
    categoryId: "uniforms-textile",
    ruSlug: "uniforma-unfm-0003",
    ruUrl: "https://aksesoriuz.uz/ru/uniforma-unfm-0003/",
    enUrls: [
      "https://aksesoriuz.uz/en/uniform-unfm-0003/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/uniform-unfm-0003/",
      en: "/en/products/uniform-unfm-0003/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "koshelek-kshlk-0001",
    sku: "KSHLK-0001",
    skuCode: "KSHLK",
    familyId: "wallets-portmone-clutches",
    categoryId: "business-products",
    ruSlug: "koshelek-kshlk-0001",
    ruUrl: "https://aksesoriuz.uz/ru/koshelek-kshlk-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/wallet-kshlk-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/wallet-kshlk-0001/",
      en: "/en/products/wallet-kshlk-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  },
  {
    id: "drevestnaya-posuda-drp-0001",
    sku: "DRP-0001",
    skuCode: "DRP",
    familyId: "wooden-tableware",
    categoryId: "restaurant-accessories",
    ruSlug: "drevestnaya-posuda-drp-0001",
    ruUrl: "https://aksesoriuz.uz/ru/drevestnaya-posuda-drp-0001/",
    enUrls: [
      "https://aksesoriuz.uz/en/wooden-tableware-drp-0001/"
    ],
    migrationDecision: "modeled-reference-page",
    destination: {
      ru: "/ru/products/wooden-tableware-drp-0001/",
      en: "/en/products/wooden-tableware-drp-0001/"
    },
    notes: "Already represented as a B2B reference product page in the rebuild."
  }
] as const satisfies readonly LegacyProductMigrationRecord[];

export function getLegacyProductsByFamily(familyId: LegacyProductFamilyId) {
  return legacyProductMigration.filter((record) => record.familyId === familyId);
}

export function getLegacyProductByRuSlug(slug: string) {
  return legacyProductMigration.find((record) => record.ruSlug === slug);
}

export function getLegacyProductBySku(sku: string) {
  return legacyProductMigration.filter((record) => record.sku === sku);
}
