import { AddToCartForm } from 'pages/view-details/types';
import { ProductDetailed } from 'services';
import { formatMoney } from 'utils';

const getAvailableCombinations = (product: ProductDetailed, formData?: AddToCartForm) => {
  if (!formData?.attributes) {
    return product.combinations;
  }

  const selectedAttributes = Object.entries(formData.attributes);
  return product.combinations?.filter((combination) => {
    for (const [attrId, attrValueId] of selectedAttributes) {
      if (Number.isNaN(Number(attrId)) || Number.isNaN(Number(attrValueId))) {
        continue;
      }

      const existInCombination = combination.attributes.find(
        (x) => x.attrId.toString() === attrId.toString() && x.attrValueId.toString() === attrValueId.toString()
      );

      if (!existInCombination) {
        return false;
      }
    }

    return true;
  });
};

export const getPrice = (product: ProductDetailed, formData?: AddToCartForm) => {
  if (product.price) {
    return formatMoney(product.price.toString());
  }

  const availableCombinations = getAvailableCombinations(product, formData);
  const prices = availableCombinations?.map((x) => x.price) ?? [];
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  if (minPrice === maxPrice) {
    return formatMoney(maxPrice);
  }

  return `${formatMoney(minPrice)} - ${formatMoney(maxPrice)}`;
};

export const findProductCombination = (product: ProductDetailed, formData: AddToCartForm) => {
  const availableCombinations = getAvailableCombinations(product, formData);

  if (availableCombinations?.length !== 1) {
    return undefined;
  }

  for (const attr of availableCombinations[0].attributes) {
    if (formData.attributes[attr.attrId.toString()].toString() !== attr.attrValueId.toString()) {
      return undefined;
    }
  }

  return availableCombinations[0];
};
