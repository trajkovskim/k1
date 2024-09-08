import { ShopProductCard } from 'components/card';
import { Container, Input, Title } from 'components/common';
import { WhiteBackgroundContainer } from 'components/layout';
import PageHeader from 'components/PageHeader';
import { PAGE_MAX_WIDTH, products as cardsMock } from 'pages/constants';
import React from 'react';

const ListHeader: React.FC = () => {
  return (
    <WhiteBackgroundContainer
      style={{ boxShadow: '8px 13px 8px -19px #000' }}
      xs={PAGE_MAX_WIDTH}
      styleConfig={{ centered: true, padding: 'lg' }}
    >
      <Input label="Type" placeholder="Type" size="md" />
    </WhiteBackgroundContainer>
  );
};

const Shop: React.FC = () => {
  return (
    <Container styleConfig={{ gap: '3rem', padding: { bottom: 'xl' } }}>
      <PageHeader xs={12} styleConfig={{ direction: 'row', centered: true, padding: 'lg' }}>
        <Title title="Shop" />
      </PageHeader>

      <ListHeader />

      <Container xs={PAGE_MAX_WIDTH} styleConfig={{ wrap: true, direction: 'row', centered: true, gap: '20px' }}>
        {cardsMock.map((card) => (
          <Container key={card.id} xs={6} lg={4} xl={3}>
            <ShopProductCard
              key={card.id}
              id={card.id}
              title={card.title}
              amount={card.price.toString()}
              images={[card.image]}
              imageHeight="280px"
            />
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Shop;
