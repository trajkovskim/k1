import { Button, Container, Text } from 'components/common';
import { StyledFooter } from 'components/layout/Layout.styled';
import LogoImage from 'components/layout/LogoImage';
import { useSocialMedias, useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';
import styled from 'styled-components';

const SocialMedias = styled(Container)`
  > svg {
    height: 30px;
    width: 30px;
    filter: drop-shadow(0 0 0.1rem #aaa5a5);
  }
`;

const Footer: React.FC = () => {
  const t = useTranslation('footer');
  const tBase = useTranslation();
  const navigate = useNavigate();
  const socialMedias = useSocialMedias();

  return (
    <StyledFooter>
      <Container
        xs={PAGE_MAX_WIDTH}
        styleConfig={{
          centered: true,
          gap: '3rem',
          wrap: true,
          direction: 'row',
          padding: { top: 'lg', bottom: 'lg' },
        }}
      >
        <Container xs={12} lg={3.5} styleConfig={{ gap: '2rem' }}>
          <LogoImage />
          <Text>{t('description')}</Text>
          <SocialMedias styleConfig={{ gap: '1rem', direction: 'row', wrap: true, alignItems: 'center' }}>
            <Text size="sm">{tBase('followUs')}</Text>
            {socialMedias.map((socialMedia, index) => (
              <Button
                key={index}
                title={socialMedia.href}
                icon={socialMedia.icon}
                type="link"
                size="lg"
                href={socialMedia.href}
              />
            ))}
          </SocialMedias>
        </Container>
        <Container sm={4} lg={2.5} styleConfig={{ gap: '2rem' }}>
          <Text strong size="sm">
            {t('usefulLinks.title')}
          </Text>
          <Container styleConfig={{ gap: '0.5rem' }}>
            <Button size="md" type="link" onClick={() => navigate(Routes.INDEX)}>
              {t('usefulLinks.home')}
            </Button>
            <Button size="md" type="link" onClick={() => navigate(Routes.SHOP)}>
              {t('usefulLinks.shop')}
            </Button>
          </Container>
        </Container>
      </Container>
    </StyledFooter>
  );
};
export default Footer;
