import { StyledCard } from 'components/card/card.styled';
import ProductCardImages from 'components/card/ProductCardImages';
import { ProductProps } from 'components/card/types';
import React from 'react';

const ProductCard: React.FC<ProductProps> = (props) => {
  const image = <ProductCardImages id={props.id} images={props.images} height="450px" />;

  return (
    <StyledCard
      className={props.className}
      fullwidth={props.fullwidth}
      image={image}
      onClick={props.onView}
      styleConfig={{ bordered: true }}
    />
  );
};

export default ProductCard;
