import { Container, Line } from 'components/common';
import { StyledHeader } from 'components/layout/Layout.styled';
import LogoImage from 'components/layout/LogoImage';
import NavigationMenu from 'components/layout/NavigationMenu';
import MobileNavigation from 'components/layout/XsNavigation';
import React from 'react';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container
        styleConfig={{
          relative: true,
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '100%',
        }}
        lgStyle={{
          justifyContent: 'start',
          gap: '2rem',
          padding: { left: 'lg' },
        }}
      >
        <Container xs={1} lg={0} styleConfig={{ direction: 'row', gap: '0.5rem' }} />
        <LogoImage />
        <Container xs={0} lg="max-content" styleConfig={{ alignSelf: 'stretch', padding: { top: 15, bottom: 15 } }}>
          <Line type="vertical" />
        </Container>
        <Container xs={0} lg={12}>
          <NavigationMenu mode="horizontal" />
        </Container>

        <Container
          xs="max-content"
          lg={0}
          styleConfig={{
            direction: 'row',
            padding: { right: 'md' },
            gap: '1rem',
            alignItems: 'stretch',
          }}
        >
          <Line type="vertical" />
          <MobileNavigation />
        </Container>
      </Container>
    </StyledHeader>
  );
};

export default Header;
