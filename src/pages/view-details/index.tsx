import { ShopProductCard } from 'components/card';
import { Breadcrumb, Button, Container, Divider, Dropdown, Image, Input, Text, Title } from 'components/common';
import { WhiteBackgroundContainer } from 'components/layout';
import { useLanguage, useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createViewDetailsRoute } from 'routes';
import { getProduct, searchProducts } from 'services';
import styled from 'styled-components';
import { formatMoney } from 'utils';

const StyledShopproductCard = styled(ShopProductCard)`
  @media (max-width: ${(props) => props.theme.breakpoints.maxWidth.xs}) {
    .ant-image,
    img {
      height: 200px !important;
    }
  }
`;

const ViewDetails: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const product = getProduct(Number(id), language);
  const otherProducts = searchProducts({ pageSize: 4 });
  const t = useTranslation('viewDetails');
  const navigate = useNavigate();

  return (
    <Container
      xs={PAGE_MAX_WIDTH}
      styleConfig={{ centered: true, padding: { bottom: 'xl' } }}
      mdStyle={{ padding: { top: '2xl', bottom: '2xl', left: 'md', right: 'md' } }}
    >
      <Container styleConfig={{ direction: 'row', wrap: true, gap: '3rem', alignItems: 'start' }}>
        <WhiteBackgroundContainer xs={12} md={6} xl={5}>
          <Image src={product?.image} preview objectFit="contain" width="100%" height="500px" />
        </WhiteBackgroundContainer>
        <Container xs={12} md={6} xl={5} styleConfig={{ padding: { left: 'md', right: 'md' }, gap: '1rem' }}>
          <Container xs={0} md={12}>
            <Breadcrumb idLabel={product?.title} />
          </Container>
          <Title level={4} title={product?.title ?? ''} gap="1rem" />
          <Text size="xl" strong>
            {product?.price && formatMoney(product?.price)}
          </Text>
          <Divider />

          <Container styleConfig={{ wrap: true, direction: 'row', gap: '10px' }}>
            <Container xs={12}>
              <Dropdown
                fullwidth
                label="Flavor"
                placeholder="Flavor"
                size="lg"
                options={[{ label: 'Чоколадо', value: 'chocolate' }]}
              />
            </Container>

            <Container xs={12} md={3}>
              <Input type="number" size="lg" label="Quantity" fullwidth />
            </Container>
            <Container xs={12} md={9}>
              <Button type="primary" size="xl">
                Add to cart
              </Button>
            </Container>
          </Container>
          <Divider />
          <Text size="lg">{t('overview')}</Text>
          <Text>{product?.description}</Text>
        </Container>
      </Container>
      <Divider />
      <Container styleConfig={{ padding: { left: 'md', right: 'md' }, gap: '10px' }}>
        <Text size="xl">Other products</Text>
        <Container styleConfig={{ wrap: true, direction: 'row', gap: '10px' }}>
          {otherProducts.map((product) => (
            <Container key={product.id} xs={12} sm={6} lg={3}>
              <StyledShopproductCard
                key={product.id}
                id={product.id}
                title={product.title}
                amount={product.price.toString()}
                onView={() => navigate(createViewDetailsRoute(product.id.toString()))}
                images={[product.image]}
                imageHeight="200px"
              />
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default ViewDetails;
