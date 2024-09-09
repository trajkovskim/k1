import { Avatar } from 'antd';
import NoImageAvailable from 'assets/noimageavailable.jpg';
import { CardMeta, Container, Text, Title } from 'components/common';
import { useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React from 'react';

const Section4: React.FC = () => {
  const t = useTranslation('home');

  return (
    <Container
      xs={PAGE_MAX_WIDTH}
      styleConfig={{
        wrap: true,
        direction: 'row',
        gap: '2rem',
        centered: true,
        padding: 'md',
      }}
    >
      <Container xs={12} md={6}>
        <Title level={2} size="lg" title={t('section4.title')} description={t('section4.description')} />
      </Container>
      <Container xs={12} md={6} styleConfig={{ alignItems: 'center', textAlign: 'center' }}>
        <CardMeta
          gap="15px"
          centeredContent
          avatar={
            <Avatar src={NoImageAvailable} size="large" style={{ height: '256px', width: '256px', margin: 'auto' }} />
          }
          title={<Text size="lg">{t('section4.card.meta.title')}</Text>}
          description={
            <Text size="md" type="secondary" ellipsis>
              {t('section4.card.meta.description')}
            </Text>
          }
        />
      </Container>
    </Container>
  );
};

export default Section4;
