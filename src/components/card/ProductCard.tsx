import ProductCardImages from 'components/card/ProductCardImages';
import { ProductProps } from 'components/card/types';
import { Card } from 'components/common';
import React from 'react';

const ProductCard: React.FC<ProductProps> = (props) => {
  return (
    <Card
      className={props.className}
      hoverable
      cover={
        <ProductCardImages
          images={props.images ?? []}
          height={props.imageHeight}
          width={props.imageWidth}
          objectFit="contain"
        />
      }
      onClick={props.onView}
    />
  );
};

export default ProductCard;
