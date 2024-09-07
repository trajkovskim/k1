import { Typography } from 'antd';
import Container from 'components/common/Container';
import Text from 'components/common/typography/Text';
import { FontSize, TitleAndDescription } from 'components/common/typography/types';
import React from 'react';
import styled from 'styled-components';

type Props = React.ComponentProps<typeof Typography.Title> & {
  title: string;
  description?: string;
  gap?: string;
  size?: FontSize | TitleAndDescription<FontSize>;
};

const StyledTitle = styled(Typography.Title)``;

const Title: React.FC<Props> = ({ className, title, description, gap, size, ...props }) => {
  return (
    <Container className={className} styleConfig={{ gap: gap ?? '0.5rem' }}>
      <StyledTitle {...props}>{title}</StyledTitle>
      {description && <Text size={typeof size === 'object' ? size.description : size}>{description}</Text>}
    </Container>
  );
};

export default React.memo(Title);
