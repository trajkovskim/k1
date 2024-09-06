import { Typography } from 'antd';
import Container from 'components/common/Container';
import Text from 'components/common/typography/Text';
import { FontSize, TitleAndDescription } from 'components/common/typography/types';
import React from 'react';

type Props = React.ComponentProps<typeof Typography.Title> & {
  title: string;
  description?: string;
  gap?: string;
  size?: FontSize | TitleAndDescription<FontSize>;
};

const Title: React.FC<Props> = (props) => {
  return (
    <Container className={props.className} styleConfig={{ gap: props.gap ?? '0.5rem' }}>
      <Typography.Title>{props.title}</Typography.Title>
      {props.description && (
        <Text size={typeof props.size === 'object' ? props.size.description : props.size}>{props.description}</Text>
      )}
    </Container>
  );
};

export default React.memo(Title);
