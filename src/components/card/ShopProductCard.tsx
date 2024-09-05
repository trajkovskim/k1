import { StyledShopProductCard } from 'components/card/card.styled';
import ProductCardImages from 'components/card/ProductCardImages';
import ProductTitle from 'components/card/ProductTitle';
import { ProductProps } from 'components/card/types';
import { Container } from 'components/common';
import React from 'react';

const ShopProductCard: React.FC<ProductProps> = (props) => {
  const image = <ProductCardImages id={props.id} images={props.images} height={props.imageHeight ?? '300px'} />;

  const body = (
    <Container styleConfig={{ relative: true, padding: { bottom: 'md', left: 'md', right: 'md' } }}>
      <Container styleConfig={{ gap: '1rem', direction: 'row', justifyContent: 'space-between', alignItems: 'end' }}>
        <ProductTitle title={props.title} summary={props.summary} onView={props.onView} />
      </Container>
    </Container>
  );

  return (
    <StyledShopProductCard
      className={props.className}
      fullwidth={props.fullwidth}
      body={body}
      image={image}
      onClick={props.onView}
      styleConfig={{ bordered: true }}
    />
  );
};

export default ShopProductCard;
