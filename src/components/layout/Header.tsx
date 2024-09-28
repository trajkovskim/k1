import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';
import { Button, Container, Input, Line, Transition, TransitionHandle } from 'components/common';
import LanguageChanger from 'components/LanguageChanger';
import { StyledHeader, WhiteBackgroundContainer } from 'components/layout/Layout.styled';
import LogoImage from 'components/layout/LogoImage';
import NavigationMenu from 'components/layout/NavigationMenu';
import TelephoneButton from 'components/layout/TelephoneButton';
import MobileNavigation from 'components/layout/XsNavigation';
import { useTranslation } from 'hooks';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`;

const MoreOptions: React.FC = () => {
  const transitionRef = useRef<TransitionHandle>(null);
  return (
    <Container styleConfig={{ relative: true }}>
      <Transition
        ref={transitionRef}
        duration="100ms"
        transition={{
          initial: css`
            bottom: -20px;
            left: 50%;

            transform: translate(-50%, 100%);
            opacity: 0;
            visibility: hidden;
          `,
          final: css`
            opacity: 1;
            visibility: visible;
          `,
        }}
      >
        <Container styleConfig={{ gap: '15px', absolute: true }}>
          <StyledButton type="default">
            <TelephoneButton iconPosition="end" />
          </StyledButton>
          <StyledButton type="default">
            <LanguageChanger />
          </StyledButton>
        </Container>
      </Transition>
      <Button type="link" icon={<MoreOutlined />} size="xl" onClick={() => transitionRef.current?.toggle()} />
    </Container>
  );
};

const SearchContainer: React.FC<{ show: boolean; close: () => void }> = ({ show, close }) => {
  const t = useTranslation('header');
  const [searchValue, setSearchValue] = useState<string>('');
  const transitionRef = useRef<TransitionHandle>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const outsideClickEventHandler = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (!containerRef.current?.contains(target)) {
      close();
      window.removeEventListener('click', outsideClickEventHandler);
    }
  };

  if (show) {
    transitionRef.current?.gotoFinalState();
  } else {
    transitionRef.current?.gotoInitialState();
  }

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <Transition
      ref={transitionRef}
      duration="200ms"
      onFinalEnd={() => {
        window.addEventListener('click', outsideClickEventHandler);
      }}
      onInitalEnd={() => {
        window.removeEventListener('click', outsideClickEventHandler);
      }}
      transition={{
        initial: css`
          opacity: 0;
          visibility: hidden;
        `,
        final: css`
          opacity: 1;
          visibility: visible;
        `,
      }}
    >
      <WhiteBackgroundContainer ref={containerRef} xs={12} styleConfig={{ absolute: true, maxHeight: '500px' }}>
        <Container
          xs={PAGE_MAX_WIDTH}
          styleConfig={{ centered: true, padding: { bottom: 'lg', top: 'lg', left: 'md', right: 'md' } }}
        >
          <Input
            fullwidth
            size="xl"
            placeholder={t('searchInput.placeholder')}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </Container>
      </WhiteBackgroundContainer>
    </Transition>
  );
};

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <StyledHeader>
      <Container
        styleConfig={{
          zIndex: 1,
          relative: true,
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '100%',
        }}
        lgStyle={{
          justifyContent: 'start',
          gap: '2rem',
          padding: { left: 'lg', right: 'lg' },
        }}
      >
        <Container
          xs="max-content"
          lg={0}
          styleConfig={{
            direction: 'row',
            padding: { left: 'md' },
            gap: '1rem',
            alignItems: 'stretch',
          }}
        >
          <MobileNavigation />
          <Line type="vertical" />
        </Container>

        <LogoImage />

        <Container xs={0} lg="max-content" styleConfig={{ alignSelf: 'stretch', padding: { top: 15, bottom: 15 } }}>
          <Line type="vertical" />
        </Container>
        <Container xs={0} lg={12} styleConfig={{ alignSelf: 'stretch', justifyContent: 'center' }}>
          <NavigationMenu mode="horizontal" />
        </Container>

        <Container xs={1} lg="max-content" styleConfig={{ direction: 'row', gap: '1rem', alignItems: 'center' }}>
          <Button icon={<SearchOutlined />} type="link" size="xl" onClick={() => setShowSearch((prev) => !prev)} />
        </Container>
        <Container xs={0} lg="max-content">
          <MoreOptions />
        </Container>
      </Container>
      <SearchContainer show={showSearch} close={() => setShowSearch(false)} />
    </StyledHeader>
  );
};

export default Header;
