import { RightCircleOutlined } from '@ant-design/icons';
import GirlHandHerbalifeShake from 'assets/girl-hand-herbalife-shake.jpg';
import HerbalifeShakes from 'assets/herbalife-shakes.png';
import { Button, Carousel, Container, Title } from 'components/common';
import ImageContainer from 'components/layout/ImageContainer';
import { useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import Section1 from 'pages/home/Section1';
import Section2 from 'pages/home/Section2';
import Section3 from 'pages/home/Section3';
import Section4 from 'pages/home/Section4';
import Section5 from 'pages/home/Section5';
import React from 'react';

const Home: React.FC = () => {
  const t = useTranslation('home');

  /* Carousel */
  return (
    <Container styleConfig={{ gap: '4rem' }} lgStyle={{ gap: '5rem' }} xlStyle={{ gap: '9rem' }}>
      <Container>
        <Carousel arrows draggable flexChildren>
          <ImageContainer imageSrc={HerbalifeShakes} styleConfig={{ minHeight: '500px' }}>
            <Container
              xs={PAGE_MAX_WIDTH}
              styleConfig={{
                centered: true,
                padding: { top: 'xl', bottom: 'xl', left: 'lg', right: 'lg' },
                gap: '1rem',
                textAlign: 'center',
                alignItems: 'center',
              }}
              mdStyle={{
                textAlign: 'start',
                alignItems: 'start',
              }}
            >
              <Container xs="600px">
                <Title
                  level={2}
                  title={t('carousel.items.0.title')}
                  description={t('carousel.items.0.description')}
                  size="xl"
                  afterTitle={<Button type="link" icon={<RightCircleOutlined />} size="xl" />}
                />
              </Container>
            </Container>
          </ImageContainer>
          <ImageContainer imageSrc={GirlHandHerbalifeShake} styleConfig={{ minHeight: '500px' }}>
            <Container
              xs={PAGE_MAX_WIDTH}
              styleConfig={{
                centered: true,
                padding: { top: 'xl', bottom: 'xl', left: 'lg', right: 'lg' },
                gap: '1rem',
                textAlign: 'center',
                alignItems: 'center',
              }}
              lgStyle={{
                textAlign: 'start',
                alignItems: 'start',
              }}
            >
              <Container xs="600px">
                <Title
                  level={2}
                  title={t('carousel.items.1.title')}
                  description={t('carousel.items.1.description')}
                  size="xl"
                  afterTitle={<Button type="link" icon={<RightCircleOutlined />} size="xl" />}
                />
              </Container>
            </Container>
          </ImageContainer>
        </Carousel>
      </Container>

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Container>
  );
};

export default Home;
