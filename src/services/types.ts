export enum SortBy {
  UNSORTED = 'UNSORTED',
  PRICE_ASC = 'PRICE_ASC',
  PRICE_DESC = 'PRICE_DESC',
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

export type Product = {
  id: number;
  title: LocalizedText[];
  description?: LocalizedText[];
  types: ProductType[];
  price: number;
  image: string;
  featured?: boolean;
};

export type ProductDetailed = {
  id: number;
  title: string;
  description?: string;
  types: ProductType[];
  price: number;
  image: string;
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
