import { Product } from 'services/types';
import { formatMoney } from 'utils';

export const formatAmount = (price: Product['price']) =>
  typeof price === 'object' ? `${formatMoney(price.from)} - ${formatMoney(price.to)}` : price && formatMoney(price);
