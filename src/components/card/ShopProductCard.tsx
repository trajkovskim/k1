import ProductCardImages from 'components/card/ProductCardImages';
import ProductTitle from 'components/card/ProductTitle';
import { ProductProps } from 'components/card/types';
import { Card, Text } from 'components/common';
import ImageLazyLoaded from 'components/ImageLazyLoaded';
import { formatAmount } from 'formatters';
import React from 'react';

const ShopProductCard: React.FC<ProductProps> = (props) => {
  return (
    <Card
      className={props.className}
      hoverable
      body={<ProductTitle title={props.title} summary={props.summary} onView={props.onView} />}
      footer={
        <Text size="lg" strong>
          {formatAmount(props.amount)}
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
};

export default ShopProductCard;
