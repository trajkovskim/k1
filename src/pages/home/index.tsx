import { Avatar } from 'antd';
import BusinessOpportunity from 'assets/business oppurtunity.jpg';
import DoTheChange from 'assets/do-the-change.png';
import FitMarathon from 'assets/fit-marathon.jpg';
import GirlHandHerbalifeShake from 'assets/girl-hand-herbalife-shake.jpg';
import HerbalifeShakes from 'assets/herbalife-shakes.png';
import NoImageAvailable from 'assets/noimageavailable.jpg';
import { ShopProductCard } from 'components/card';
import { Button, CardMeta, Carousel, Container, HorizontalList, Image, Text, Title } from 'components/common';
import { DarkBackgroundContainer } from 'components/layout';
import ImageContainer from 'components/layout/ImageContainer';
import { useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH, products } from 'pages/constants';
import React from 'react';

const Home: React.FC = () => {
  const t = useTranslation('home');

  const titleGap = '2rem';

  const createImageContentContainer = (imageSrc: string, content: React.ReactNode) => (
    <div>
      <Container styleConfig={{ wrap: true, direction: 'row', gap: '3rem' }}>
        <Container xs={12} lg={6} lgStyle={{ padding: 'lg' }}>
          <Image shadow src={imageSrc} objectFit="scale-down" objectPosition="center" width="100%" />
        </Container>
        <Container xs={12} lg={6} styleConfig={{ padding: 'lg' }}>
          {content}
        </Container>
      </Container>
    </div>
  );

  /* Carousel */
  return (
    <Container styleConfig={{ gap: '4rem' }} lgStyle={{ gap: '9rem' }}>
      <Container>
        <Carousel arrows draggable>
          <div>
            <ImageContainer
              imageSrc={HerbalifeShakes}
              styleConfig={{
                padding: 'lg',
                textAlign: 'center',
                alignItems: 'center',
                minHeight: '600px',
                gap: '2rem',
              }}
              lgStyle={{ padding: 'xl', textAlign: 'start', alignItems: 'start' }}
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
          </div>
          <div>
            <ImageContainer
              imageSrc={GirlHandHerbalifeShake}
              styleConfig={{
                padding: 'lg',
                textAlign: 'center',
                alignItems: 'center',
                minHeight: '600px',
                gap: '2rem',
              }}
              lgStyle={{ padding: 'xl', textAlign: 'start', alignItems: 'start' }}
            >
              <Title
                title={t('carousel.items.2.title')}
                description={t('carousel.items.2.description')}
                size="2xl"
                gap={titleGap}
              />
              <Button type="primary" size="xl">
                {t('carousel.items.2.button')}
              </Button>
            </ImageContainer>
          </div>
        </Carousel>
      </Container>

      {/* Section 1 */}
      {/* <Container xs={PAGE_MAX_WIDTH} styleConfig={{ wrap: true, direction: 'row', gap: '2rem', centered: true }}>
        <Container xs={12} styleConfig={{ padding: 'md' }}>
          <Tabs
            items={[
              { key: '1', label: 'Label 1' },
              { key: '2', label: 'Label 2' },
            ]}
          />
        </Container>
        <Container xs={12} lg={6} styleConfig={{ padding: 'md' }}>
          <Title size="lg" gap={titleGap} title={t('section1.title')} description={t('section1.description')} />
        </Container>
        <Container xs={12} lg={6} lgStyle={{ padding: 'md' }}>
          <Image shadow src={NoImageAvailable} objectFit="cover" objectPosition="center" height="500px" />
        </Container>
      </Container> */}

      {/* Section 2 */}
      <Container xs={`calc(100% - (100% - ${PAGE_MAX_WIDTH}) / 2)`} styleConfig={{ alignSelf: 'end', gap: '2rem' }}>
        <Container styleConfig={{ padding: 'md' }}>
          <Title title={t('section2.title')} size="lg" gap={titleGap} />
        </Container>
        <HorizontalList gap="15px" chunkSize={{ xs: 12, sm: 6, lg: 4, xl: 3 }} circular arrows>
          {products.map((product) => (
            <ShopProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              images={[product.image]}
              amount={product.price.toString()}
              imageHeight="370px"
            />
          ))}
        </HorizontalList>
      </Container>

      {/* Section 3 */}
      <DarkBackgroundContainer>
        <ImageContainer imageSrc={FitMarathon}>
          <Container xs={PAGE_MAX_WIDTH} styleConfig={{ centered: true, padding: { top: 'xl', bottom: 'xl' } }}>
            <Carousel dots arrows draggable autoplaySpeed={5000}>
              {createImageContentContainer(
                FitMarathon,
                <Title
                  size="lg"
                  gap={titleGap}
                  title={t('section3.item.0.title')}
                  description={t('section3.item.0.description')}
                />
              )}
              {createImageContentContainer(
                DoTheChange,
                <Title
                  size="lg"
                  gap={titleGap}
                  title={t('section3.item.1.title')}
                  description={t('section3.item.1.description')}
                />
              )}
            </Carousel>
          </Container>
        </ImageContainer>
      </DarkBackgroundContainer>

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
            row
            centeredContent
            avatar={
              <Avatar src={NoImageAvailable} size="large" style={{ height: '128px', width: '128px', margin: 'auto' }} />
            }
            title={<Text size="lg">Kostadinka Trajkovska</Text>}
            description={
              <Text size="md" type="secondary">
                Herbalife | Независен член
              </Text>
            }
          />
        </Container>
      </Container>

      {/* Section 5 */}
      <DarkBackgroundContainer>
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
      </DarkBackgroundContainer>
    </Container>
  );
};

export default Home;
