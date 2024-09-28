import ProductCardImages from 'components/card/ProductCardImages';
import ProductTitle from 'components/card/ProductTitle';
import { ProductProps } from 'components/card/types';
import { Card, Text } from 'components/common';
import ImageLazyLoaded from 'components/ImageLazyLoaded';
import React from 'react';
import { Link } from 'react-router-dom';

const ShopProductCard: React.FC<ProductProps> = (props) => {
  const card = (
    <Card
      style={{ height: '100%' }}
      className={props.className}
      hoverable
      body={<ProductTitle title={props.title} summary={props.summary} onView={props.onView} />}
      footer={
        <Text size="lg" strong>
          {props.amount}
        </Text>
      }
      cover={
        props.images?.length === 1 ? (
          <ImageLazyLoaded src={props.images[0]} height={props.imageHeight} width={props.imageWidth} />
        ) : props.images ? (
          <ProductCardImages
            images={props.images ?? []}
            height={props.imageHeight}
            width={props.imageWidth}
            objectFit="contain"
          />
        ) : undefined
      }
      onClick={props.onView}
    />
  );

  if (props.href) {
    return (
      <Link
        style={{ display: 'block', height: '100%', userSelect: 'none' }}
        draggable={props.noDraggable ? 'false' : 'true'}
        to={props.href}
      >
        {card}
      </Link>
    );
  }

  return card;
};

export default ShopProductCard;
