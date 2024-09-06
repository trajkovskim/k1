import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import { SIZE_MAP } from 'components/common/form/constants';
import { ControlSize } from 'components/common/form/types';
import { createPropeties } from 'components/utils';
import React from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  newSize?: ControlSize;
};

const StyledButton = styled(AntdButton)<StyledButtonProps>`
  ${(props) =>
    props.theme.button &&
    props.type &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    props.theme.button[props.type] &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createPropeties(props.theme.button[props.type])};

  height: ${(props) => props.newSize && props.theme.controlHeight[props.newSize]};
`;

type Props = Omit<AntdButtonProps, 'size'> & { size?: ControlSize };

const Button: React.FC<Props> = ({ size, ...props }) => {
  return <StyledButton size={size && SIZE_MAP[size]} newSize={size} {...props} />;
};

export default Button;
