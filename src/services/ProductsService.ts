import { products } from 'services/constants';
import { LocalizedText, Product, ProductDetailed, SearchProducts, SortBy } from 'services/types';

const findLocalizedTextByLanguage = (texts: LocalizedText[], language: string) =>
  texts.find((localized) => localized.language.toLowerCase().startsWith(language.toLowerCase()));

const mapToDetailed = (product: Product, acceptLanguage: string): ProductDetailed => ({
  ...product,
  title: findLocalizedTextByLanguage(product.title, acceptLanguage)?.text ?? '',
  description: findLocalizedTextByLanguage(product.description ?? [], acceptLanguage)?.text,
  attributes: product.attributes?.map((attribute) => ({
    ...attribute,
    name: findLocalizedTextByLanguage(attribute.name, acceptLanguage)?.text ?? '',
    values: attribute.values.map((value) => ({
      ...value,
      text: findLocalizedTextByLanguage(value.text, acceptLanguage)?.text ?? '',
    })),
  })),
});

const getSortPrice = (product: Product) =>
  typeof product.price === 'object' ? product.price.from : product.price ?? 0;

export const searchProducts = ({
  filters,
  sortBy,
  pageNumber = 0,
  pageSize = 100,
  acceptLanguage = 'en',
}: SearchProducts): ProductDetailed[] => {
  const filtered = products.filter((product) => {
    for (const [key, filter] of Object.entries(filters ?? {})) {
      const p =
        product[key as keyof typeof product] ?? product[key.substring(0, key.length - 1) as keyof typeof product];

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

  return filtered
    .sort((product1, product2) => {
      switch (sortBy) {
        case SortBy.PRICE_ASC:
          return getSortPrice(product1) - getSortPrice(product2);
        case SortBy.PRICE_DESC:
          return getSortPrice(product2) - getSortPrice(product1);
        default:
          return 0;
      }
    })
    .slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
    .map((product) => mapToDetailed(product, acceptLanguage));
};

export const getProduct = (id: number, acceptLanguage: string): ProductDetailed | undefined => {
  const found = products.find((product) => product.id === id);

  if (!found) {
    return undefined;
  }

  return mapToDetailed(found, acceptLanguage);
};
