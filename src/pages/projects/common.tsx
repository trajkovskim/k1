import { CheckOutlined } from '@ant-design/icons';
import { Container, Icon } from 'components/common';
import { PAGE_MAX_WIDTH } from 'pages/constants';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const StyledIcon = styled(Icon)<{ outside: boolean }>`
  @media (min-width: ${PAGE_MAX_WIDTH}) {
    ${(props) =>
      props.outside &&
      css`
        position: absolute;
        left: -10px;
        transform: translateX(-100%);
      `}
  }
`;

export const createList = (
  children: React.ReactNode[],
  outside = true,
  icons: React.ReactNode | ReactNode[] = <CheckOutlined />
) => {
  const createIcon = (icon: React.ReactNode) => <StyledIcon outside={outside} icon={icon} size="lg" />;

  return children.map((child, index) => (
    <Container key={index} styleConfig={{ direction: 'row', relative: true, alignItems: 'start', gap: '10px' }}>
      {Array.isArray(icons) ? createIcon(icons[index]) : createIcon(icons)}
      {child}
    </Container>
  ));
};
