import { TranslationFunction } from 'hooks/useTranslation';
import { ProductTypeFilter, ProductTypeFilterExtender } from 'pages/shop/types';
import { ProductType, SortBy } from 'services';

export const convertSortByToOptions = (t: TranslationFunction) =>
  Object.values(SortBy).map((sortBy) => ({
    value: sortBy,
    label: t(`templateapp.shop.pagination.sortByInput.${sortBy}`),
  }));

export const convertProductTypesToFilterOptions = (t: TranslationFunction) => {
  const filterProductTypeOptions: {
    key: ProductTypeFilter;
    value: ProductTypeFilter;
    label: string;
  }[] = Object.values(ProductType).map((type) => ({
    key: type,
    value: type,
    label: t(type),
  }));

  filterProductTypeOptions.unshift({
    key: ProductTypeFilterExtender.ALL,
    value: ProductTypeFilterExtender.ALL,
    label: t(ProductTypeFilterExtender.ALL),
  });

  return filterProductTypeOptions;
};
