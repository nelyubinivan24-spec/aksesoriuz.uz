import { readFile, writeFile } from "node:fs/promises";
import { request } from "node:https";

const checkedDate = "2026-05-31";
const root = new URL("../", import.meta.url);
const outputUrl = new URL("../src/data/legacyMigration.ts", import.meta.url);
const productsUrl = new URL("../src/data/products.ts", import.meta.url);

const skuPattern = /(?:mmcbm|chk|rzrv|mnj|slv|tbltnt|plnt|drp|blknt|ppk|pln|bznsnbr|cdh|kshlk|kvrkmk|brlk|uebj|vztn|bx|ktlg|fart|unfm|vztfl|sugb|kychn|ebj|pdstkn)-[0-9]+(?:-[0-9]+)?/i;
const skuCodePattern = /(mmcbm|chk|rzrv|mnj|slv|tbltnt|plnt|drp|blknt|ppk|pln|bznsnbr|cdh|kshlk|kvrkmk|brlk|uebj|vztn|bx|ktlg|fart|unfm|vztfl|sugb|kychn|ebj|pdstkn)-([0-9]+(?:-[0-9]+)?)/i;

const familyDefinitions = [
  family("menu-folders", ["MMCBM"], "restaurant-accessories", "Menu folders and menu covers", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("checkholders", ["CHK"], "restaurant-accessories", "Checkholders", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("checkboxes", ["CHK"], "restaurant-accessories", "Check boxes", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("boxes", ["BX"], "packaging-souvenirs", "Gift boxes, cases, and packaging", "/ru/catalog/packaging-souvenirs/", "/en/catalog/packaging-souvenirs/"),
  family("reserved-signs", ["RZRV"], "restaurant-accessories", "Reserved signs", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("diaries", ["BLKNT"], "business-products", "Diaries and notebooks", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("serving-trays", ["MNJ"], "restaurant-accessories", "Serving trays and menazhnitsy", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("mouse-pads", ["KVRKMK"], "business-products", "Mouse pads and mats", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("id-covers-badges", ["UEBJ", "EBJ"], "business-products", "ID covers, certificates, and badges", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("document-folders", ["UEBJ", "PPK"], "business-products", "Paper, document, and signature folders", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("napkin-holders", ["SLV"], "restaurant-accessories", "Napkin holders", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("clipboards", ["PLNT"], "restaurant-accessories", "Clipboards and tablets", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("cardholders", ["CDH"], "business-products", "Cardholders", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("cup-holders", ["PDSTKN"], "business-products", "Cup holders", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("business-card-flyer-holders", ["VZTFL"], "restaurant-accessories", "Stands, flyer holders, and related holders", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("business-card-holders", ["VZTN"], "business-products", "Business card holders", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("uniforms", ["UNFM"], "uniforms-textile", "Uniforms", "/ru/catalog/uniforms-textile/", "/en/catalog/uniforms-textile/"),
  family("business-sets", ["BZNSNBR"], "business-products", "Business sets", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("aprons", ["FART"], "uniforms-textile", "Aprons", "/ru/catalog/uniforms-textile/", "/en/catalog/uniforms-textile/"),
  family("table-tents", ["TBLTNT"], "restaurant-accessories", "Table tents", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("packaging", ["KTLG"], "packaging-souvenirs", "Bags and catalog-related packaging", "/ru/catalog/packaging-souvenirs/", "/en/catalog/packaging-souvenirs/"),
  family("keychains", ["KYCHN", "BRLK"], "business-products", "Keychains", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("wooden-tableware", ["DRP"], "restaurant-accessories", "Wooden tableware", "/ru/catalog/restaurant-accessories/", "/en/catalog/restaurant-accessories/"),
  family("proposal-books", ["SUGB"], "business-products", "Catalogues and proposal books", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("wallets-portmone-clutches", ["KSHLK"], "business-products", "Wallets, portmone, and clutches", "/ru/catalog/business-products/", "/en/catalog/business-products/"),
  family("planners", ["PLN"], "business-products", "Planners", "/ru/catalog/business-products/", "/en/catalog/business-products/")
];

const existingProducts = await readExistingProducts();
const ruUrls = extractUrls(await fetchText("https://aksesoriuz.uz/sitemap/lang/ru"));
const enUrls = extractUrls(await fetchText("https://aksesoriuz.uz/sitemap/lang/en"));
const ruProductUrls = ruUrls.filter(isProductUrl);
const enProductUrls = enUrls.filter(isProductUrl);
const enBySku = groupBy(enProductUrls, (url) => extractSku(slugFromUrl(url)));

const records = ruProductUrls.map((url) => {
  const ruSlug = slugFromUrl(url);
  const sku = extractSku(ruSlug);
  const skuCode = sku.split("-")[0];
  const familyId = resolveFamilyId(ruSlug, skuCode);
  const familyRecord = familyDefinitions.find((item) => item.id === familyId);
  const modeledRoute = existingProducts.get(url);
  const decision = modeledRoute ? "modeled-reference-page" : "family-reference-backlog";

  return {
    id: ruSlug,
    sku,
    skuCode,
    familyId,
    categoryId: familyRecord.categoryId,
    ruSlug,
    ruUrl: url,
    enUrls: enBySku.get(sku) ?? [],
    migrationDecision: decision,
    destination: modeledRoute ?? familyRecord.defaultDestination,
    notes: modeledRoute
      ? "Already represented as a B2B reference product page in the rebuild."
      : "Needs lightweight reference data or final client-approved product card before launch."
  };
}).sort((a, b) => a.familyId.localeCompare(b.familyId) || a.sku.localeCompare(b.sku) || a.ruSlug.localeCompare(b.ruSlug));

const summary = {
  checkedDate,
  sourceSitemaps: ["https://aksesoriuz.uz/sitemap/lang/ru", "https://aksesoriuz.uz/sitemap/lang/en"],
  totalRuUrls: ruUrls.length,
  totalEnUrls: enUrls.length,
  totalRuProductUrls: ruProductUrls.length,
  totalEnProductUrls: enProductUrls.length,
  modeledReferencePages: records.filter((record) => record.migrationDecision === "modeled-reference-page").length,
  backlogReferenceRecords: records.filter((record) => record.migrationDecision === "family-reference-backlog").length,
  recordsWithoutEnMatch: records.filter((record) => record.enUrls.length === 0).length
};

const output = renderFile(summary, familyDefinitions, records);

if (process.argv.includes("--check")) {
  const current = await readFile(outputUrl, "utf8").catch(() => "");
  if (current !== output) {
    console.error("legacyMigration.ts is out of date. Run npm run generate:legacy-migration.");
    process.exit(1);
  }
  console.log("legacyMigration.ts is up to date.");
} else {
  await writeFile(outputUrl, output, "utf8");
  console.log(`Generated ${new URL(outputUrl).pathname.replace(new URL(root).pathname, "")}`);
  console.log(`RU product URLs: ${summary.totalRuProductUrls}`);
  console.log(`Modeled reference pages: ${summary.modeledReferencePages}`);
  console.log(`Backlog reference records: ${summary.backlogReferenceRecords}`);
  console.log(`Records without EN match: ${summary.recordsWithoutEnMatch}`);
}

function family(id, skuCodes, categoryId, title, ru, en) {
  return {
    id,
    skuCodes,
    categoryId,
    title,
    defaultDestination: { ru, en }
  };
}

async function fetchText(url) {
  return new Promise((resolve, reject) => {
    request(url, (response) => {
      if (!response.statusCode || response.statusCode >= 400) {
        reject(new Error(`Request failed for ${url}: ${response.statusCode}`));
        response.resume();
        return;
      }
      response.setEncoding("utf8");
      let body = "";
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => resolve(body));
    }).on("error", reject).end();
  });
}

function extractUrls(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

function isProductUrl(url) {
  return skuPattern.test(slugFromUrl(url));
}

function slugFromUrl(url) {
  return new URL(url).pathname.split("/").filter(Boolean).at(-1) ?? "";
}

function extractSku(slug) {
  const match = slug.match(skuCodePattern);
  if (!match) {
    throw new Error(`Cannot extract SKU from ${slug}`);
  }
  return `${match[1].toUpperCase()}-${match[2]}`;
}

function resolveFamilyId(slug, skuCode) {
  if (skuCode === "CHK") {
    return /chekboks|checkbox/i.test(slug) ? "checkboxes" : "checkholders";
  }
  if (skuCode === "UEBJ") {
    return /document|paper|papka-dlja-bumag/i.test(slug) ? "document-folders" : "id-covers-badges";
  }
  const match = familyDefinitions.find((item) => item.skuCodes.includes(skuCode));
  if (!match) {
    throw new Error(`No family mapping for ${skuCode} (${slug})`);
  }
  return match.id;
}

function groupBy(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    const values = map.get(key) ?? [];
    values.push(item);
    map.set(key, values);
  }
  return map;
}

async function readExistingProducts() {
  const source = await readFile(productsUrl, "utf8");
  const map = new Map();
  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/product\("([^"]+)".*"(https:\/\/aksesoriuz\.uz\/ru\/[^"]+\/)"/);
    if (match) {
      map.set(match[2], {
        ru: `/ru/products/${match[1]}/`,
        en: `/en/products/${match[1]}/`
      });
    }
  }
  return map;
}

function renderFile(fileSummary, families, migrationRecords) {
  return `import type { CatalogGroup } from "./catalog";

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

export const legacyMigrationSummary = ${formatObject(fileSummary)} as const;

export const legacyProductFamilies = ${formatObject(families)} as const satisfies readonly LegacyProductFamily[];

export const legacyProductMigration = ${formatObject(migrationRecords)} as const satisfies readonly LegacyProductMigrationRecord[];

export function getLegacyProductsByFamily(familyId: LegacyProductFamilyId) {
  return legacyProductMigration.filter((record) => record.familyId === familyId);
}

export function getLegacyProductByRuSlug(slug: string) {
  return legacyProductMigration.find((record) => record.ruSlug === slug);
}

export function getLegacyProductBySku(sku: string) {
  return legacyProductMigration.filter((record) => record.sku === sku);
}
`;
}

function formatObject(value) {
  return JSON.stringify(value, null, 2).replace(/"([a-zA-Z0-9_]+)":/g, "$1:");
}
