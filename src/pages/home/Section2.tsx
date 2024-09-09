import { RightCircleOutlined } from '@ant-design/icons';
import { Button, Container, ServiceCard, Title } from 'components/common';
import { useLanguage, useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createViewDetailsRoute, Routes } from 'routes';
import { ProductType, searchProducts } from 'services';

const Section2: React.FC = () => {
  const t = useTranslation('home');
  const navigate = useNavigate();
  const { language } = useLanguage();

  const programs = searchProducts({
    filters: { types: [ProductType.PROGRAM], featured: true },
    pageSize: 3,
    acceptLanguage: language,
  });

  return (
    <Container xs={PAGE_MAX_WIDTH} styleConfig={{ centered: true, gap: '2rem' }}>
      <Container
        styleConfig={{ gap: '10px', direction: 'row', alignItems: 'center', padding: { left: 'md', right: 'md' } }}
      >
        <Title level={2} title={t('section2.title')} size="lg" />
        <Button
          type="link"
          size="lg"
          icon={<RightCircleOutlined />}
          iconPosition="end"
          onClick={() => navigate(Routes.SHOP)}
        />
      </Container>
      <Container styleConfig={{ gap: '15px', direction: 'row', wrap: true, alignItems: 'center' }}>
        {programs.map((program) => (
          <Container key={program.id} xs={12} md={4}>
            <ServiceCard
              title={program.title}
              image={program.image}
              imageHeight="300px"
              onClick={() => navigate(createViewDetailsRoute(program.id.toString()))}
            />
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default Section2;
