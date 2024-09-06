import { Typography } from 'antd';
import { NEW_LINE_DELIMITER } from 'components/common/typography/constants';
import { FontSize } from 'components/common/typography/types';
import React from 'react';
import styled from 'styled-components';

type StyledTextProps = {
  nowrap?: boolean;
  size?: FontSize;
};

const StyledText = styled(Typography.Text)<StyledTextProps>`
  white-space: ${(props) => props.nowrap && 'nowrap'};
  font-size: ${(props) => props.size && props.theme.fontSize[props.size]} !important;
`;

type Props = React.ComponentProps<typeof Typography.Text> & StyledTextProps;

const Text = React.forwardRef<HTMLSpanElement, Props>(({ children, ...props }, ref) => {
  return (
    <StyledText ref={ref} {...props}>
      {typeof children === 'string' && children.includes(NEW_LINE_DELIMITER)
        ? children.split(NEW_LINE_DELIMITER).map((line, index, allLines) => (
            <span key={index}>
              {line}
              {index !== allLines.length - 1 && <br />}
            </span>
          ))
        : children}
    </StyledText>
  );
});

Text.displayName = 'Text';

export default React.memo(Text);
