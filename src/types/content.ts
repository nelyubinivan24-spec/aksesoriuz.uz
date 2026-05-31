import type { Locale } from "@data/site";

export type LocalizedString = Record<Locale, string>;

export type LocalizedRichText = Record<Locale, string>;

export type SeoMeta = {
  title: LocalizedString;
  description: LocalizedString;
  keywords?: Partial<Record<Locale, string[]>>;
  ogImage?: string;
  noindex?: boolean;
};

export type ImageAsset = {
  src: string;
  alt: LocalizedString;
  caption?: LocalizedString;
  type?: "hero" | "gallery" | "detail" | "process" | "client";
};

export type Product = {
  id: string;
  sku?: string;
  status: "draft" | "review" | "published" | "archived";
  slug: LocalizedString;
  title: LocalizedString;
  shortTitle?: LocalizedString;
  summary: LocalizedString;
  description: LocalizedRichText;
  categoryIds: string[];
  subcategoryIds?: string[];
  industryIds: string[];
  materialIds?: string[];
  brandingMethodIds?: string[];
  serviceIds?: string[];
  useCaseIds?: string[];
  dimensions?: string;
  moq?: string;
  productionTime?: string;
  priceMode: "quote" | "from-price" | "fixed" | "hidden";
  priceFrom?: number;
  currency?: "UZS" | "USD";
  images: ImageAsset[];
  relatedProductIds?: string[];
  relatedServiceIds?: string[];
  badges?: LocalizedString[];
  ctaLabel?: LocalizedString;
  seo: SeoMeta;
};

export type ProductCategory = {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  navigationTitle?: LocalizedString;
  summary: LocalizedString;
  description: LocalizedRichText;
  priority: "high" | "medium" | "low";
  parentId?: string;
  heroImage?: ImageAsset;
  featuredProductIds?: string[];
  relatedIndustryIds?: string[];
  relatedServiceIds?: string[];
  seo: SeoMeta;
};

export type Industry = {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedRichText;
  painPoints: LocalizedString[];
  recommendedCategoryIds: string[];
  featuredProductIds?: string[];
  serviceIds?: string[];
  proofClientIds?: string[];
  faqIds?: string[];
  heroImage?: ImageAsset;
  seo: SeoMeta;
};

export type Service = {
  id: string;
  slug: LocalizedString;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedRichText;
  compatibleMaterialIds?: string[];
  relatedCategoryIds?: string[];
  relatedProductIds?: string[];
  examples?: ImageAsset[];
  faqIds?: string[];
  seo: SeoMeta;
};
