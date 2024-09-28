import { RightCircleOutlined } from '@ant-design/icons';
import { ShopProductCard } from 'components/card';
import { Button, Container, HorizontalList, Title } from 'components/common';
import { useLanguage, useTranslation } from 'hooks';
import { PAGE_LEFT_PADDING, PAGE_MAX_WIDTH, PAGE_RIGHT_PADDING } from 'pages/constants';
import { getPrice } from 'pages/view-details/utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createViewDetailsRoute, Routes } from 'routes';
import { ProductType, searchProducts } from 'services';

const Section1: React.FC = () => {
  const t = useTranslation('home');
  const navigate = useNavigate();
  const { language } = useLanguage();

  const products = searchProducts({
    filters: {
      types: [ProductType.PROTEIN_MIX, ProductType.THERMOJETICS],
    },
    acceptLanguage: language,
  });

  return (
    <Container
      xs={`calc(100% - (100% - ${PAGE_MAX_WIDTH}) / 2)`}
      styleConfig={{ alignSelf: 'end', gap: '2rem', padding: { left: PAGE_LEFT_PADDING, right: PAGE_RIGHT_PADDING } }}
    >
      <Container styleConfig={{ gap: '10px', direction: 'row', alignItems: 'center' }}>
        <Title level={2} title={t('section1.title')} size="lg" />
        <Button
          type="link"
          size="lg"
          icon={<RightCircleOutlined />}
          iconPosition="end"
          onClick={() => navigate(Routes.SHOP)}
        />
      </Container>
      <HorizontalList gap="15px" chunkSize={{ xs: 12, sm: 6, lg: 4, xl: 2.7, '2xl': '400px' }} circular arrows>
        {products.map((product) => (
          <ShopProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            images={[product.image]}
            amount={getPrice(product)}
            imageHeight="270px"
            imageWidth="100%"
            href={createViewDetailsRoute(product.id.toString())}
            noDraggable
          />
        ))}
      </HorizontalList>
    </Container>
  );
};

export default Section1;
