import { ProductType } from 'services';

export enum ProductTypeFilterExtender {
  ALL = 'ALL',
}

export type ProductTypeFilter = ProductType | ProductTypeFilterExtender;

export type QueryParameters = 'types' | 'featured' | 'sortBy';
