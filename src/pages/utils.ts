import { TranslationFunction } from 'hooks/useTranslation';
import { pageSizes, SortBy, sortByToValue } from 'pages/shop/constants';

export const convertSortByToOptions = (t: TranslationFunction) =>
  Object.values(SortBy).map((sortBy) => ({
    value: sortByToValue[sortBy],
    label: t(`templateapp.pagination.sortByInput.${sortBy}`),
  }));

export const convertPageSizeToOptions = (t: TranslationFunction) =>
  pageSizes.map((pageSize) => ({
    value: pageSize.toString(),
    label: t(`templateapp.pagination.resultSizeInput.${pageSize}`),
  }));
