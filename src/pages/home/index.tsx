import NoImageAvailable from 'assets/noimageavailable.jpg';
import { ShopProductCard } from 'components/card';
import { Carousel, Container, HorizontalList, Image, Title } from 'components/common';
import { useTranslation } from 'hooks';
import { DarkBackgroundContainer } from 'pages/common.styled';
import { PAGE_MAX_WIDTH, productsMock } from 'pages/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledTitle = styled(Title)`
  color: #fff;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const t = useTranslation('home');

  const createImageContentContainer = (imageSrc: string, content: React.ReactNode) => (
    <div>
      <Container styleConfig={{ wrap: true, direction: 'row', gap: '3rem', padding: 'lg' }}>
        <Container xs={12} lg={6}>
          <Image src={imageSrc} objectFit="cover" objectPosition="center" height="500px" />
        </Container>
        <Container xs={12} lg={6}>
          {content}
        </Container>
      </Container>
    </div>
  );

  return (
    <Container styleConfig={{ gap: '4rem', padding: { bottom: 'xl' } }} lgStyle={{ gap: '9rem' }}>
      <Container>
        <Carousel arrows dots={false} draggable>
          <Image src={NoImageAvailable} objectFit="cover" objectPosition="contain" height="550px" width="100%" />
          <Image src={NoImageAvailable} objectFit="cover" objectPosition="contain" height="550px" width="100%" />
        </Carousel>
      </Container>

      {/* Section 1 */}
      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{ wrap: true, direction: 'row', gap: '3rem', centered: true, padding: 'md' }}
      >
        <Container>
          <Title fontSize="lg" gap="2rem" title={t('section1.title')} description={t('section1.description')} />
        </Container>
        <Container xs={12} lg={6}>
          <Image src={NoImageAvailable} objectFit="cover" objectPosition="center" height="500px" />
        </Container>
      </Container>

      {/* Section 2 */}
      <Container
        xs={`calc(100% - (100% - ${PAGE_MAX_WIDTH}) / 2)`}
        styleConfig={{ alignSelf: 'end', padding: 'md', gap: '2rem' }}
      >
        <Title title={t('section2.title')} fontSize="lg" />
        <HorizontalList gap="15px" chunkSize={{ xs: 6, lg: 4, xl: 3 }} circular arrows>
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
                fontSize="lg"
                gap="2rem"
                title={t('section3.item.0.title')}
                description={t('section3.item.0.description')}
              />
            )}
            {createImageContentContainer(
              NoImageAvailable,
              <StyledTitle
                fontSize="lg"
                gap="2rem"
                title={t('section3.item.1.title')}
                description={t('section3.item.1.description')}
              />
            )}
          </Carousel>
        </Container>
      </DarkBackgroundContainer>

      {/* Section 4 */}
      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{ wrap: true, direction: 'row', gap: '3rem', centered: true, padding: 'md' }}
      >
        <Container>
          <Title fontSize="lg" gap="2rem" title={t('section4.title')} description={t('section4.description')} />
        </Container>
        <Container xs={12} lg={6}>
          <Image src={NoImageAvailable} objectFit="cover" objectPosition="center" height="500px" />
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
