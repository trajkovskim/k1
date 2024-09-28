import { Form } from 'antd';
import { ShopProductCard } from 'components/card';
import {
  Breadcrumb,
  Button,
  Container,
  Counter,
  Divider,
  FormItem,
  Image,
  Select,
  Text,
  Title,
} from 'components/common';
import { WhiteBackgroundContainer } from 'components/layout';
import { useLanguage, useTranslation } from 'hooks';
import { PAGE_LEFT_PADDING, PAGE_MAX_WIDTH, PAGE_RIGHT_PADDING } from 'pages/constants';
import { AddToCartForm } from 'pages/view-details/types';
import { findProductCombination, getPrice } from 'pages/view-details/utils';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createViewDetailsRoute } from 'routes';
import { getProduct, searchProducts } from 'services';
import styled from 'styled-components';

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
  const otherProducts = searchProducts({ pageSize: 4, acceptLanguage: language });
  const t = useTranslation('viewDetails');

  const [form] = Form.useForm<AddToCartForm>();
  const [formValues, setFormValues] = useState<AddToCartForm>({});

  if (!product) {
    throw new Error('Product not found');
  }

  useEffect(() => {
    form.resetFields();
  }, [form, id]);

  const handleFormChange = (_: unknown, values: AddToCartForm) => {
    setFormValues(values);
  };

  const handleAddToCart = (data: AddToCartForm) => {
    const selectedCombination = findProductCombination(product, data);

    console.log({
      productId: product.id,
      price: selectedCombination?.price,
      quantity: data.quantity,
      attributes: selectedCombination?.attributes,
    });
  };

  return (
    <Container
      xs={PAGE_MAX_WIDTH}
      styleConfig={{ centered: true, padding: { bottom: 'xl' }, gap: '1rem' }}
      mdStyle={{
        padding: { top: 'xl', bottom: 'xl', left: PAGE_LEFT_PADDING, right: PAGE_RIGHT_PADDING },
        gap: '3rem',
      }}
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
            {getPrice(product, formValues)}
          </Text>
          <Divider />
          <Form form={form} onFinish={handleAddToCart} onValuesChange={handleFormChange}>
            <Container styleConfig={{ wrap: true, direction: 'row', gap: '10px' }}>
              {product?.attributes?.map((attribute) => (
                <Container key={attribute.key} xs={12}>
                  <FormItem name={['attributes', attribute.id.toString()]}>
                    <Select
                      placeholder={attribute.name}
                      label={attribute.name}
                      options={attribute.values.map((value) => ({ value: value.id, label: value.text }))}
                      size="lg"
                      fullwidth
                    />
                  </FormItem>
                </Container>
              ))}
              <Container xs={12} sm={3.5}>
                <FormItem name="quantity" initialValue={1}>
                  <Counter size="xl" min={1} max={10} />
                </FormItem>
              </Container>
              <Container xs={12} sm={8.5}>
                <Button htmlType="submit" type="primary" size="xl">
                  {t('addToCartButton')}
                </Button>
              </Container>
            </Container>
          </Form>
          <Divider />
          <Text size="lg">{t('overview')}</Text>
          <Text>{product?.description}</Text>
        </Container>
      </Container>
      <Divider />
      <Container styleConfig={{ gap: '15px', padding: { left: PAGE_LEFT_PADDING, right: PAGE_RIGHT_PADDING } }}>
        <Text size="2xl" strong>
          {t('otherProducts.title')}
        </Text>
        <Container styleConfig={{ wrap: true, direction: 'row', gap: '10px' }}>
          {otherProducts.map((product) => (
            <Container key={product.id} xs={12} sm={6} lg={3}>
              <StyledShopproductCard
                key={product.id}
                id={product.id}
                title={product.title}
                amount={getPrice(product)}
                href={createViewDetailsRoute(product.id.toString())}
                images={[product.image]}
                imageHeight="270px"
                imageWidth="100%"
              />
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default ViewDetails;
