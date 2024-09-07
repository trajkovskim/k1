import Container from 'components/common/Container';
import React from 'react';
import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

type StyledCardProps = {
  transparent?: boolean;
  shadow?: boolean;
};

const StyledCard = styled(AntdCard)<StyledCardProps>`
  background: ${(props) => props.transparent && 'transparent'};
  box-shadow: ${(props) => !props.shadow && 'none !important'};
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
