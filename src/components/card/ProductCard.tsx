import ProductCardImages from 'components/card/ProductCardImages';
import { ProductProps } from 'components/card/types';
import { Card } from 'components/common';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<ProductProps> = (props) => {
  const card = (
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

  if (props.href) {
    return <Link to={props.href}>{card}</Link>;
  }

  return card;
};

export default ProductCard;
