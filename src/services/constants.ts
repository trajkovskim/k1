import { default as allProducts } from 'services/products.json';
import { Product, ProductType } from 'services/types';

export const products: Product[] = allProducts.map((product) => ({
  ...product,
  types: product.types as ProductType[],
}));
