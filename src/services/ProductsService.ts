import { products } from 'services/constants';
import { ProductFilters, SortBy } from 'services/types';

export const searchProducts = (filters?: ProductFilters, sortBy?: SortBy) => {
  const filtered = products.filter((product) => {
    for (const [key, filter] of Object.entries(filters ?? {})) {
      const p =
        product[key as keyof typeof product] ?? product[key.substring(0, key.length - 1) as keyof typeof product];
      console.log(key, filter, p, filters);

      if (
        !filter ||
        (Array.isArray(filter) &&
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ((Array.isArray(p) && p.find((item) => filter.includes(item))) || filter.includes(p))) ||
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (Array.isArray(p) && p.includes(filter)) ||
        filter === p
      ) {
        continue;
      }

      return false;
    }

    return true;
  });

  return filtered.sort((product1, product2) => {
    switch (sortBy) {
      case SortBy.PRICE_ASC:
        return product1.price - product2.price;
      case SortBy.PRICE_DESC:
        return product2.price - product1.price;
      default:
        return 0;
    }
  });
};
