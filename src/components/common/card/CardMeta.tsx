import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

type StyledCardMetaProps = {
  centeredContent?: boolean;
  row?: boolean;
  gap?: React.CSSProperties['gap'];
};

const StyledCardMeta = styled(Card.Meta)<StyledCardMetaProps>`
  display: flex;
  width: max-content;
  flex-direction: ${(props) => !props.row && 'column'};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.centeredContent && 'center'};
`;

type Props = React.ComponentProps<typeof Card.Meta> & StyledCardMetaProps;

const CardMeta: React.FC<Props> = (props) => {
  return <StyledCardMeta {...props} />;
};

export default CardMeta;
