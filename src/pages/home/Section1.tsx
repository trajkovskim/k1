import { RightCircleOutlined } from '@ant-design/icons';
import { ShopProductCard } from 'components/card';
import { Button, Container, HorizontalList, Title } from 'components/common';
import { useLanguage, useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
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
      styleConfig={{ alignSelf: 'end', gap: '2rem', padding: { left: 'md', right: 'md' } }}
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
      <HorizontalList gap="15px" chunkSize={{ xs: 12, sm: 6, lg: 4, xl: 2.7 }} circular arrows>
        {products.map((product) => (
          <ShopProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            images={[product.image]}
            amount={product.price}
            imageHeight="270px"
            imageWidth="100%"
            onView={() => navigate(createViewDetailsRoute(product.id.toString()))}
          />
        ))}
      </HorizontalList>
    </Container>
  );
};

export default Section1;
