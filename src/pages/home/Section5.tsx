import { Container, Image, Title } from 'components/common';
import { ColoredContainer } from 'components/layout';
import { useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import BusinessOpportunity from 'assets/business oppurtunity.jpg';
import React from 'react';

const Section5: React.FC = () => {
  const t = useTranslation('home');

  return (
    <ColoredContainer>
      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{
          wrap: true,
          direction: 'row',
          gap: '2rem',
          centered: true,
          padding: { top: 'xl' },
        }}
        mdStyle={{ padding: { bottom: 'xl' } }}
      >
        <Container xs={12} md={6} styleConfig={{ padding: 'md' }}>
          <Title level={2} size="lg" title={t('section5.title')} description={t('section5.description')} />
        </Container>
        <Container xs={12} md={6} mdStyle={{ padding: 'md' }}>
          <Image shadow src={BusinessOpportunity} objectFit="cover" objectPosition="center" width="100%" />
        </Container>
      </Container>
    </ColoredContainer>
  );
};

export default Section5;
