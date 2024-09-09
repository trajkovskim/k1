import { RightCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import BusinessOpportunity from 'assets/business oppurtunity.jpg';
import DoTheChangeLogo from 'assets/do-the-change-logo-white.png';
import FitMarathonLogo from 'assets/fit-marathon-logo.png';
import GirlHandHerbalifeShake from 'assets/girl-hand-herbalife-shake.jpg';
import HerbalifeShakes from 'assets/herbalife-shakes.png';
import NoImageAvailable from 'assets/noimageavailable.jpg';
import Basic10DaysImage from 'assets/programs/basic-10-days.png';
import Detox10DaysImage from 'assets/programs/detox-10-days.png';
import Sport10DaysImage from 'assets/programs/sport-10-days.png';
import { ShopProductCard } from 'components/card';
import {
  Button,
  CardMeta,
  Carousel,
  Container,
  HorizontalList,
  Image,
  ServiceCard,
  Text,
  Title,
} from 'components/common';
import { ColoredContainer } from 'components/layout';
import ImageContainer from 'components/layout/ImageContainer';
import { useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';
import { searchProducts } from 'services';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const products = searchProducts();
  const t = useTranslation('home');
  const [projectsSlide, setProjectsSlide] = useState(0);

  const titleGap = '0rem';

  const createImageContentContainer = (imageSrc: string, content: React.ReactNode) => (
    <Container
      styleConfig={{
        wrap: true,
        direction: 'row',
        padding: 'lg',
        alignItems: 'center',
        textAlign: 'center',
        userSelect: 'none',
      }}
      lgStyle={{
        gap: '3rem',
        textAlign: 'start',
      }}
    >
      <Container xs={12} lg={6}>
        <Image shadow src={imageSrc} objectFit="scale-down" objectPosition="center" width="100%" height="300px" />
      </Container>
      <Container xs={12} lg={6} styleConfig={{ gap: '2rem', alignItems: 'center' }} lgStyle={{ alignItems: 'start' }}>
        {content}
      </Container>
    </Container>
  );

  /* Carousel */
  return (
    <Container styleConfig={{ gap: '4rem' }} lgStyle={{ gap: '9rem' }}>
      <Container>
        <Carousel arrows draggable flexChildren>
          <ImageContainer
            imageSrc={HerbalifeShakes}
            styleConfig={{
              padding: 'lg',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
            lgStyle={{
              minHeight: '500px',
              padding: 'xl',
              textAlign: 'start',
              alignItems: 'start',
              justifyContent: 'start',
            }}
          >
            <Title
              title={t('carousel.items.0.title')}
              description={t('carousel.items.0.description')}
              size="2xl"
              gap={titleGap}
            />
            <Button type="primary" size="xl">
              {t('carousel.items.0.button')}
            </Button>
          </ImageContainer>
          <ImageContainer
            imageSrc={GirlHandHerbalifeShake}
            styleConfig={{
              padding: 'lg',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
            }}
            lgStyle={{
              minHeight: '500px',
              padding: 'xl',
              textAlign: 'start',
              alignItems: 'start',
              justifyContent: 'start',
            }}
          >
            <Title
              title={t('carousel.items.1.title')}
              description={t('carousel.items.1.description')}
              size="2xl"
              gap={titleGap}
            />
            <Button type="primary" size="xl">
              {t('carousel.items.1.button')}
            </Button>
          </ImageContainer>
        </Carousel>
      </Container>

      {/* Section 1 */}
      <Container xs={`calc(100% - (100% - ${PAGE_MAX_WIDTH}) / 2)`} styleConfig={{ alignSelf: 'end', gap: '2rem' }}>
        <Container
          styleConfig={{ gap: '10px', direction: 'row', alignItems: 'center', padding: { left: 'md', right: 'md' } }}
        >
          <Title title={t('section1.title')} size="lg" gap={titleGap} />
          <Button
            type="link"
            size="lg"
            icon={<RightCircleOutlined />}
            iconPosition="end"
            onClick={() => navigate(Routes.SHOP)}
          />
        </Container>
        <HorizontalList gap="15px" chunkSize={{ xs: 12, sm: 6, lg: 4, xl: 3.5 }} circular arrows>
          {products.map((product) => (
            <ShopProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              images={[product.image]}
              amount={product.price.toString()}
              imageHeight="370px"
              onView={() => navigate(Routes.SHOP_VIEW_DETAILS.replace(':id', product.id.toString()))}
            />
          ))}
        </HorizontalList>
      </Container>

      {/* Section 2 */}
      <Container xs={PAGE_MAX_WIDTH} styleConfig={{ centered: true, gap: '2rem' }}>
        <Container
          styleConfig={{ gap: '10px', direction: 'row', alignItems: 'center', padding: { left: 'md', right: 'md' } }}
        >
          <Title title={t('section2.title')} size="lg" gap={titleGap} />
          <Button
            type="link"
            size="lg"
            icon={<RightCircleOutlined />}
            iconPosition="end"
            onClick={() => navigate(Routes.SHOP)}
          />
        </Container>
        <Container styleConfig={{ gap: '40px', direction: 'row', wrap: true, alignItems: 'center' }}>
          <Container xs={12} lg={4}>
            <ServiceCard
              title={t('section2.card.0.title')}
              description={t('section2.card.0.description')}
              image={Basic10DaysImage}
              imageHeight="300px"
              onClick={() => navigate(Routes.SHOP_VIEW_DETAILS.replace(':id', '0'))}
            />
          </Container>
          <Container xs={12} lg={4}>
            <ServiceCard
              title={t('section2.card.1.title')}
              description={t('section2.card.1.description')}
              image={Sport10DaysImage}
              imageHeight="300px"
              onClick={() => navigate(Routes.SHOP_VIEW_DETAILS.replace(':id', '0'))}
            />
          </Container>
          <Container xs={12} lg={4}>
            <ServiceCard
              title={t('section2.card.2.title')}
              description={t('section2.card.2.description')}
              image={Detox10DaysImage}
              imageHeight="300px"
              onClick={() => navigate(Routes.SHOP_VIEW_DETAILS.replace(':id', '0'))}
            />
          </Container>
        </Container>
      </Container>

      {/* Section 3 */}
      <ColoredContainer type={!projectsSlide ? 'primary' : 'secondary'}>
        <Container
          xs={PAGE_MAX_WIDTH}
          styleConfig={{ centered: true }}
          lgStyle={{ padding: { bottom: 'xl', top: 'xl', right: 'md', left: 'md' } }}
        >
          <Carousel flexChildren dots arrows draggable beforeChange={(_, next) => setProjectsSlide(next)}>
            {createImageContentContainer(
              FitMarathonLogo,
              <>
                <Title
                  size="lg"
                  gap={titleGap}
                  title={t('section3.item.0.title')}
                  description={t('section3.item.0.description')}
                />
                <Button type="primary" size="lg" onClick={() => navigate(Routes.FIT_MARATHON)}>
                  {t('section3.item.0.button')}
                </Button>
              </>
            )}
            {createImageContentContainer(
              DoTheChangeLogo,
              <>
                <Title
                  size="lg"
                  gap={titleGap}
                  title={t('section3.item.1.title')}
                  description={t('section3.item.1.description')}
                />
                <Button type="primary" size="lg" onClick={() => navigate(Routes.DO_THE_CHANGE)}>
                  {t('section3.item.1.button')}
                </Button>
              </>
            )}
          </Carousel>
        </Container>
      </ColoredContainer>

      {/* Section 4 */}
      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{
          wrap: true,
          direction: 'row',
          gap: '2rem',
          centered: true,
          padding: { top: 'xl', bottom: 'xl' },
        }}
      >
        <Container xs={12} lg={6} styleConfig={{ padding: 'md', gap: '2rem' }}>
          <Title size="lg" gap={titleGap} title={t('section4.title')} description={t('section4.description')} />
          <CardMeta
            gap="15px"
            centeredContent
            avatar={
              <Avatar src={NoImageAvailable} size="large" style={{ height: '128px', width: '128px', margin: 'auto' }} />
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

      {/* Section 5 */}
      <ColoredContainer>
        <Container
          xs={PAGE_MAX_WIDTH}
          styleConfig={{
            wrap: true,
            direction: 'row',
            gap: '2rem',
            centered: true,
            padding: { top: 'xl', bottom: 'xl' },
          }}
        >
          <Container xs={12} lg={6} styleConfig={{ padding: 'md' }}>
            <Title size="lg" gap={titleGap} title={t('section5.title')} description={t('section5.description')} />
          </Container>
          <Container xs={12} lg={6} lgStyle={{ padding: 'md' }}>
            <Image shadow src={BusinessOpportunity} objectFit="cover" objectPosition="center" height="500px" />
          </Container>
        </Container>
      </ColoredContainer>
    </Container>
  );
};

export default Home;
