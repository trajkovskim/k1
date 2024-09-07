import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import getDesignToken from 'antd/es/theme/getDesignToken';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { baseTokenConfig, default as customTheme, secondaryTokenConfig } from 'theme';

type Props = React.PropsWithChildren;

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { token } = antdTheme.useToken();

  const secondaryToken = getDesignToken(secondaryTokenConfig);

  const fontSizeScale = (token.fontSize / token.fontSizeSM - 1) / 2;
  const controlHeightScale = (token.controlHeight / token.controlHeightSM - 1) / 2;

  return (
    <StyledThemeProvider
      theme={{
        antd: {
          primaryToken: token,
          secondaryToken,
        },
        ...customTheme,
        fontSize: {
          xs: (fontSizeScale + 1) * token.fontSizeSM + 'px',
          sm: token.fontSizeSM + 'px',
          md: token.fontSize + 'px',
          lg: token.fontSizeLG + 'px',
          xl: token.fontSizeXL + 'px',
          '2xl': (fontSizeScale * 16 + 1) * token.fontSizeSM + 'px',
          '3xl': (fontSizeScale * 32 + 1) * token.fontSizeSM + 'px',
        },
        controlHeight: {
          xs: (controlHeightScale + 1) * token.controlHeightSM + 'px',
          sm: token.controlHeightSM + 'px',
          md: token.controlHeight + 'px',
          lg: token.controlHeightLG + 'px',
          xl: (controlHeightScale * 8 + 1) * token.controlHeightSM + 'px',
          '2xl': (controlHeightScale * 16 + 1) * token.controlHeightSM + 'px',
          '3xl': (controlHeightScale * 32 + 1) * token.controlHeightSM + 'px',
        },
      }}
    >
      {children}
    </StyledThemeProvider>
  );
};

export const BaseConfigProvider: React.FC<Props> = ({ children }) => {
  return (
    <AntdConfigProvider theme={baseTokenConfig}>
      <ThemeProvider>{children}</ThemeProvider>
    </AntdConfigProvider>
  );
};

export default BaseConfigProvider;
