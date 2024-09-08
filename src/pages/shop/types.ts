import { ProductType } from 'services';

export enum ProductTypeFilterExtender {
  ALL = 'ALL',
}

export type ProductTypeFilter = ProductType | ProductTypeFilterExtender;
