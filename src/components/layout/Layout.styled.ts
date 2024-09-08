import { Layout, Menu } from 'antd';
import { Container } from 'components/common';
import { createPropeties } from 'components/utils';
import styled from 'styled-components';

export const StyledHeader = styled(Layout.Header)`
  ${(props) => createPropeties(props.theme.layout.header)};
`;

export const StyledNav = styled(Menu)`
  ${(props) => createPropeties(props.theme.layout.nav)};
`;

export const StyledContent = styled(Layout.Content)`
  ${(props) => createPropeties(props.theme.layout.content)};
`;

export const StyledFooter = styled(Layout.Footer)`
  ${(props) => createPropeties(props.theme.layout.footer)};
`;

export const WhiteBackgroundContainer = styled(Container)`
  background-color: ${(props) => props.theme.antd.primaryToken.colorBgBase};
  color: ${(props) => props.theme.antd.primaryToken.colorText};
`;

export const DarkBackgroundContainer = styled(Container)`
  background-color: ${(props) => props.theme.antd.secondaryToken.colorBgBase};
  color: ${(props) => props.theme.antd.secondaryToken.colorText};

  .slick-arrow::after {
    color: ${(props) => props.theme.antd.secondaryToken.colorText};
  }

  .slick-dots li.slick-active button,
  .slick-dots li button {
    background: ${(props) => props.theme.antd.secondaryToken.colorText};
  }
`;
