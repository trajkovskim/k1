import { Container } from 'components/common';
import styled from 'styled-components';

export const WhiteBackgroundContainer = styled(Container)`
  background-color: ${(props) => props.theme.antd.primaryToken.colorBgBase};
  color: ${(props) => props.theme.antd.primaryToken.colorText};
`;

export const DarkBackgroundContainer = styled(Container)`
  background-color: ${(props) => props.theme.antd.secondaryToken.colorBgBase};
  color: ${(props) => props.theme.antd.secondaryToken.colorText};
`;
