import ProductCardImages from 'components/card/ProductCardImages';
import ProductTitle from 'components/card/ProductTitle';
import { ProductProps } from 'components/card/types';
import { Card, Text } from 'components/common';
import React from 'react';
import { formatMoney } from 'utils';

const ShopProductCard: React.FC<ProductProps> = (props) => {
  return (
    <Card
      className={props.className}
      hoverable
      body={<ProductTitle title={props.title} summary={props.summary} onView={props.onView} />}
      footer={
        <Text size="lg" strong>
          {formatMoney(props.amount ?? 0)}
        </Text>
      }
      cover={<ProductCardImages id={props.id} images={props.images} height={props.imageHeight ?? '300px'} />}
      onClick={props.onView}
    />
  );
};

export default ShopProductCard;
