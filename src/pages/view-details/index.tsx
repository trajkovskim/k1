import { Breadcrumb, Container, Divider, Image, Text, Title } from 'components/common';
import { WhiteBackgroundContainer } from 'components/layout';
import { useLanguage } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from 'services';
import { formatMoney } from 'utils';

const ViewDetails: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const product = getProduct(Number(id), language);

  return (
    <>
      <Container
        xs={0}
        md={PAGE_MAX_WIDTH}
        styleConfig={{ centered: true, padding: 'md' }}
        mdStyle={{ alignItems: 'start', padding: { top: 'xl' } }}
      >
        <Breadcrumb idLabel={product?.title} />
      </Container>
      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{ centered: true, direction: 'row', wrap: true, gap: '3rem', padding: { bottom: 'xl' } }}
        mdStyle={{ padding: { bottom: '2xl', left: 'md', right: 'md' } }}
      >
        <WhiteBackgroundContainer xs={12} md={6} lg={5}>
          <Image src={product?.image} preview objectFit="contain" width="100%" height="500px" />
        </WhiteBackgroundContainer>
        <Container xs={12} md={6} lg={5} styleConfig={{ padding: { left: 'md', right: 'md' } }}>
          <Title level={3} title={product?.title ?? ''} description={product?.description} gap="1rem" />
          <Divider />
          <Container styleConfig={{ alignSelf: 'end' }}>
            <Text size="xl" strong>
              {product?.price && formatMoney(product?.price)}
            </Text>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ViewDetails;
