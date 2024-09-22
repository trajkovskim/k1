export enum SortBy {
  UNSORTED = 'UNSORTED',
  PRICE_ASC = 'PRICE_ASC',
  PRICE_DESC = 'PRICE_DESC',
}

export enum Formula1Flavor {
  CHOCOLATE = 'CHOCOLATE',
}

export enum ProductType {
  PROTEIN_MIX = 'PROTEIN_MIX',
  THERMOJETICS = 'THERMOJETICS',
  DRINKS = 'DRINKS',
  VITAMIN = 'VITAMIN',
  PROTEIN_BARS = 'PROTEIN_BARS',
  SPORT = 'SPORT',
  PROGRAM = 'PROGRAM',
}

export type LocalizedText = {
  language: string;
  text: string;
};

export type ProductPrice = number | { from: number; to: number };

type ProductAttributeValue = {
  id: number;
  key: string;
  text: LocalizedText[];
};

type ProductAttribute = {
  id: number;
  key: string;
  name: LocalizedText[];
  values: ProductAttributeValue[];
};

export type Product = {
  id: number;
  title: LocalizedText[];
  description?: LocalizedText[];
  types: ProductType[];
  price?: ProductPrice;
  image: string;
  featured?: boolean;
  attributes?: ProductAttribute[];
  combinations?: ProductAttributeCombination[];
};

export type ConnectionNode = { attrId: number; attrValueId: number };

type ProductAttributeCombination = {
  attributes: ConnectionNode[];
  price: number;
};

type ProductAttributeValueDetailed = {
  id: number;
  key: string;
  text: string;
};

type ProductAttributeDetailed = {
  id: number;
  key: string;
  name: string;
  values: ProductAttributeValueDetailed[];
};

export type ProductDetailed = {
  id: number;
  title: string;
  description?: string;
  types: ProductType[];
  price?: ProductPrice;
  image: string;
  featured?: boolean;
  attributes?: ProductAttributeDetailed[];
  combinations?: ProductAttributeCombination[];
};

export type ProductFilters = {
  types?: ProductType[];
  featured?: boolean;
};

export type SearchProducts = {
  filters?: ProductFilters;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: SortBy;
  acceptLanguage?: string;
};
