import { Footer } from 'components/layout';
import { BackToTopButton } from 'components/layout/BackToTopButton';
import ApplicationContextProvider from 'context';
import ConfigProvider from 'providers/ConfigProvider';
import ThemeProvider from 'providers/ThemeProvider';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100dvh;

  > main {
    min-height: 100dvh;
  }
  background-color: white;
`;

const TemplateAppLayoutProvider: React.FC = () => {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <ApplicationContextProvider>
          <div>
            <StyledLayout>
              <main>
                <Outlet />
              </main>
              <Footer />
            </StyledLayout>
            <BackToTopButton />
          </div>
        </ApplicationContextProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default TemplateAppLayoutProvider;
