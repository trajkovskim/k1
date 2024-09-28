import { RightCircleOutlined } from '@ant-design/icons';
import DoTheChangeLogo from 'assets/do-the-change-logo-white.png';
import FitMarathonLogo from 'assets/fit-marathon-logo.png';
import { Button, Carousel, Container, Image, Title } from 'components/common';
import { ColoredContainer } from 'components/layout';
import { useTranslation } from 'hooks';
import { PAGE_LEFT_PADDING, PAGE_MAX_WIDTH, PAGE_RIGHT_PADDING } from 'pages/constants';
import React, { useState } from 'react';
import { Routes } from 'routes';

const Section3: React.FC = () => {
  const t = useTranslation('home');
  const [projectsSlide, setProjectsSlide] = useState(0);

  const createImageContentContainer = (imageSrc: string, content: React.ReactNode) => (
    <Container
      styleConfig={{
        wrap: true,
        direction: 'row',
        padding: { top: 'xl', bottom: 'xl', left: 'lg', right: 'lg' },
        alignItems: 'center',
        textAlign: 'center',
        userSelect: 'none',
      }}
      mdStyle={{
        gap: '3rem',
        textAlign: 'start',
      }}
    >
      <Container xs={12} md={5}>
        <Image shadow src={imageSrc} objectFit="scale-down" objectPosition="center" width="100%" height="220px" />
      </Container>
      <Container
        xs={12}
        md={7}
        styleConfig={{ gap: '2rem', alignItems: 'center' }}
        mdStyle={{ alignItems: 'start', gap: '1rem' }}
      >
        {content}
      </Container>
    </Container>
  );

  return (
    <ColoredContainer type={!projectsSlide ? 'primary' : 'secondary'}>
      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{ centered: true }}
        mdStyle={{ padding: { bottom: '2xl', top: '2xl', left: PAGE_LEFT_PADDING, right: PAGE_RIGHT_PADDING } }}
      >
        <Carousel flexChildren dots arrows draggable beforeChange={(_, next) => setProjectsSlide(next)}>
          {createImageContentContainer(
            FitMarathonLogo,
            <>
              <Title
                level={2}
                size="lg"
                title={t('section3.item.0.title')}
                description={t('section3.item.0.description')}
                afterTitle={<Button icon={<RightCircleOutlined />} type="link" size="lg" href={Routes.FIT_MARATHON} />}
              />
            </>
          )}
          {createImageContentContainer(
            DoTheChangeLogo,
            <>
              <Title
                level={2}
                size="lg"
                title={t('section3.item.1.title')}
                description={t('section3.item.1.description')}
                afterTitle={<Button icon={<RightCircleOutlined />} type="link" size="lg" href={Routes.DO_THE_CHANGE} />}
              />
            </>
          )}
        </Carousel>
      </Container>
    </ColoredContainer>
  );
};

export default Section3;
