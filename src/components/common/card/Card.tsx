import { Card as AntdCard } from 'antd';
import Container from 'components/common/Container';
import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from 'theme';

export type BreakpointsProps<T> = {
  [key in Breakpoints]?: T;
};

type StyledCardProps = BreakpointsProps<'row' | 'column'> & {
  transparent?: boolean;
  shadow?: boolean;
};

const StyledCard = styled(AntdCard)<StyledCardProps>`
  background: ${(props) => props.transparent && 'transparent'};
  box-shadow: ${(props) => !props.shadow && 'none !important'};
  overflow: hidden;
`;

type Props = React.ComponentProps<typeof AntdCard> &
  StyledCardProps & {
    footer?: React.ReactNode;
    cover?: React.ReactNode;
    onImageContainer?: React.ReactNode;
    body?: React.ReactNode;
  };

const Card: React.FC<Props> = ({ footer, cover, onImageContainer, body, ...props }) => {
  props.shadow = props.shadow ?? true;
  props.sm = props.sm ?? props.xs;
  props.md = props.md ?? props.sm;
  props.lg = props.lg ?? props.md;
  props.xl = props.xl ?? props.lg;
  props['2xl'] = props['2xl'] ?? props.xl;
  props['3xl'] = props['3xl'] ?? props['2xl'];

  return (
    <StyledCard
      {...props}
      cover={
        <Container xs={12} styleConfig={{ relative: true }}>
          {cover}
          {onImageContainer}
        </Container>
      }
    >
      {body}
      {footer}
    </StyledCard>
  );
};

export default Card;
