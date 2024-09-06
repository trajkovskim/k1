import { Container, Line } from 'components/common';
import { StyledHeader } from 'components/layout/Layout.styled';
import NavigationMenu from 'components/layout/NavigationMenu';
import LogoImage from 'components/layout/LogoImage';
import MobileNavigation from 'components/layout/XsNavigation';
import React from 'react';
import { styled } from 'styled-components';

const StyledLineContainer = styled(Container)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container
        styleConfig={{
          relative: true,
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        lgStyle={{
          justifyContent: 'start',
          gap: '2rem',
        }}
      >
        <Container xs={1} lg={0} styleConfig={{ direction: 'row', gap: '0.5rem' }} />
        <LogoImage />
        <StyledLineContainer xs={0} lg="max-content" styleConfig={{ alignSelf: 'stretch' }}>
          <Line type="vertical" />
        </StyledLineContainer>
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
