import { ProductProps } from 'components/card/types';
import { Container, Text } from 'components/common';
import React from 'react';
import styled from 'styled-components';

const ProductCardTitleWrapper = styled(Container)`
  button {
    overflow: hidden;
  }

  span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

type Props = Pick<ProductProps, 'title' | 'summary' | 'onView'>;

const ProductTitle: React.FC<Props> = (props) => {
  return (
    <ProductCardTitleWrapper styleConfig={{ overflow: 'hidden', alignItems: 'center', padding: { top: 'sm' } }}>
      <Text size="md">{props.title}</Text>
      {props.summary && (
        <Text size="sm" title={props.summary}>
          {props.summary}
        </Text>
      )}
    </ProductCardTitleWrapper>
  );
};

export default React.memo(ProductTitle);
