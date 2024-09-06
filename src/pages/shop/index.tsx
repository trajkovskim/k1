import { ShopProductCard } from 'components/card';
import { Container, Text } from 'components/common';
import { PAGE_MAX_WIDTH, productsMock as cardsMock } from 'pages/constants';
import React from 'react';

const Shop: React.FC = () => {
  return (
    <Container styleConfig={{ gap: '3rem', padding: { bottom: 'xl' } }}>
      <Container xs={PAGE_MAX_WIDTH} styleConfig={{ centered: true, padding: 'md' }}>
        <Text size="md">Shop header</Text>
      </Container>
      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{ wrap: true, direction: 'row', centered: true, padding: 'md', gap: '20px' }}
      >
        {cardsMock.map((card) => (
          <Container key={card.id} xs={6} lg={4} xl={3}>
            <ShopProductCard key={card.id} id={card.id} title={card.title} imageHeight="280px" />
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Shop;
