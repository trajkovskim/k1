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

export type Product = {
  id: number;
  title: string;
  types: ProductType[];
  price: number;
  image: string;
};

export type ProductFilters = {
  types?: ProductType[];
};
