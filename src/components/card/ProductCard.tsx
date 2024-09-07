import ProductCardImages from 'components/card/ProductCardImages';
import { ProductProps } from 'components/card/types';
import { Card } from 'components/common';
import React from 'react';

const ProductCard: React.FC<ProductProps> = (props) => {
  return (
    <Card
      className={props.className}
      hoverable
      cover={<ProductCardImages id={props.id} images={props.images} height="450px" />}
      onClick={props.onView}
    />
  );
};

export default ProductCard;
