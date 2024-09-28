import { RightCircleOutlined } from '@ant-design/icons';
import { ShopProductCard } from 'components/card';
import { Button, Container, Title } from 'components/common';
import { useLanguage, useTranslation } from 'hooks';
import { PAGE_LEFT_PADDING, PAGE_MAX_WIDTH, PAGE_RIGHT_PADDING } from 'pages/constants';
import { getPrice } from 'pages/view-details/utils';
import React from 'react';
import { createViewDetailsRoute, Routes } from 'routes';
import { ProductType, searchProducts } from 'services';
import styled from 'styled-components';

const StyledShopproductCard = styled(ShopProductCard)`
  @media (max-width: ${(props) => props.theme.breakpoints.maxWidth.xs}) {
    .ant-image,
    img {
      height: 200px !important;
    }
  }
`;

const Section2: React.FC = () => {
  const t = useTranslation('home');
  const { language } = useLanguage();

  const programs = searchProducts({
    filters: { types: [ProductType.PROGRAM], featured: true },
    pageSize: 3,
    acceptLanguage: language,
  });

  return (
    <Container
      xs={PAGE_MAX_WIDTH}
      styleConfig={{ centered: true, gap: '2rem', padding: { left: PAGE_LEFT_PADDING, right: PAGE_RIGHT_PADDING } }}
    >
      <Container styleConfig={{ gap: '10px', direction: 'row', alignItems: 'center' }}>
        <Title level={2} title={t('section2.title')} size="lg" />
        <Button type="link" size="lg" icon={<RightCircleOutlined />} iconPosition="end" href={Routes.SHOP} />
      </Container>
      <Container
        styleConfig={{
          gap: '15px',
          direction: 'row',
          wrap: true,
          alignItems: 'stretch',
        }}
      >
        {programs.map((program) => (
          <Container key={program.id} xs={12} md={4}>
            <StyledShopproductCard
              key={program.id}
              id={program.id}
              title={program.title}
              amount={getPrice(program)}
              images={[program.image]}
              imageHeight="270px"
              imageWidth="100%"
              href={createViewDetailsRoute(program.id.toString())}
            />
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Section2;
