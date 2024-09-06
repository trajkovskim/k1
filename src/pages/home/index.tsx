import NoImageAvailable from 'assets/noimageavailable.jpg';
import { ShopProductCard } from 'components/card';
import { Button, Carousel, Container, HorizontalList, Image, Tabs, Title } from 'components/common';
import ImageContainer from 'components/layout/ImageContainer';
import { useTranslation } from 'hooks';
import { DarkBackgroundContainer } from 'pages/common.styled';
import { PAGE_MAX_WIDTH, productsMock } from 'pages/constants';
import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled(Title)`
  color: #fff;
`;

const Home: React.FC = () => {
  const t = useTranslation('home');

  const titleGap = '2rem';

  const createImageContentContainer = (imageSrc: string, content: React.ReactNode) => (
    <div>
      <Container styleConfig={{ wrap: true, direction: 'row', gap: '3rem' }}>
        <Container xs={12} lg={6} styleConfig={{ padding: 'lg' }}>
          <Image src={imageSrc} objectFit="cover" objectPosition="center" height="500px" />
        </Container>
        <Container xs={12} lg={6} lgStyle={{ padding: 'lg' }}>
          {content}
        </Container>
      </Container>
    </div>
  );

  /* Carousel */
  return (
    <Container styleConfig={{ gap: '4rem', padding: { bottom: 'xl' } }} lgStyle={{ gap: '9rem' }}>
      <Container>
        <Carousel arrows draggable>
          <div>
            <ImageContainer
              imageSrc={NoImageAvailable}
              styleConfig={{
                padding: 'lg',
                textAlign: 'center',
                alignItems: 'center',
                minHeight: '500px',
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
              <Button size="xl">{t('carousel.items.1.button')}</Button>
            </ImageContainer>
          </div>
          <div>
            <ImageContainer
              imageSrc={NoImageAvailable}
              styleConfig={{
                padding: 'lg',
                textAlign: 'center',
                alignItems: 'center',
                minHeight: '500px',
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
              <Button>{t('carousel.items.2.button')}</Button>
            </ImageContainer>
          </div>
        </Carousel>
      </Container>

      {/* Section 1 */}
      <Container xs={PAGE_MAX_WIDTH} styleConfig={{ wrap: true, direction: 'row', gap: '3rem', centered: true }}>
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
          <Image src={NoImageAvailable} objectFit="cover" objectPosition="center" height="500px" />
        </Container>
      </Container>

      {/* Section 2 */}
      <Container xs={`calc(100% - (100% - ${PAGE_MAX_WIDTH}) / 2)`} styleConfig={{ alignSelf: 'end', gap: '3rem' }}>
        <Container styleConfig={{ padding: 'md' }}>
          <Title title={t('section2.title')} size="lg" gap={titleGap} />
        </Container>
        <HorizontalList gap="15px" chunkSize={{ xs: 12, sm: 6, lg: 4, xl: 3 }} circular arrows>
          {productsMock.map((product) => (
            <ShopProductCard key={product.id} id={product.id} title={product.title} imageHeight="370px" />
          ))}
        </HorizontalList>
      </Container>

      {/* Section 3 */}
      <DarkBackgroundContainer>
        <Container xs={PAGE_MAX_WIDTH} styleConfig={{ centered: true, padding: { top: 'xl', bottom: 'xl' } }}>
          <Carousel dots arrows draggable>
            {createImageContentContainer(
              NoImageAvailable,
              <StyledTitle
                size="lg"
                gap={titleGap}
                title={t('section3.item.0.title')}
                description={t('section3.item.0.description')}
              />
            )}
            {createImageContentContainer(
              NoImageAvailable,
              <StyledTitle
                size="lg"
                gap={titleGap}
                title={t('section3.item.1.title')}
                description={t('section3.item.1.description')}
              />
            )}
          </Carousel>
        </Container>
      </DarkBackgroundContainer>

      {/* Section 4 */}
      <Container xs={PAGE_MAX_WIDTH} styleConfig={{ wrap: true, direction: 'row', gap: '3rem', centered: true }}>
        <Container xs={12} lg={6} styleConfig={{ padding: 'md' }}>
          <Title size="lg" gap={titleGap} title={t('section4.title')} description={t('section4.description')} />
        </Container>
        <Container xs={12} lg={6} lgStyle={{ padding: 'md' }}>
          <Image src={NoImageAvailable} objectFit="cover" objectPosition="center" height="500px" />
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
