import { Layout, Menu } from 'antd';
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
