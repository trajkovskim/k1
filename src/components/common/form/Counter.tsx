import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Container from 'components/common/Container';
import Button from 'components/common/form/Button';
import { StyledFormFieldContainer } from 'components/common/form/Input.styled';
import { ControlSize } from 'components/common/form/types';
import { triggerChange } from 'components/common/form/utils';
import { Text } from 'components/common/typography';
import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  background: inherit;
  max-width: 50px;
  text-align: center;
  outline: none;
  cursor: default;
`;

type Props = Omit<React.ComponentProps<'input'>, 'size'> & {
  label?: string;
  size?: ControlSize;
  plusIcon?: React.ReactNode;
  minusIcon?: React.ReactNode;
};

const Counter: React.FC<Props> = ({ size, plusIcon, label, minusIcon, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  props.defaultValue = props.defaultValue ?? '0';

  const handleChange = (addValue: number) => {
    if (inputRef.current?.value) {
      triggerChange(inputRef.current, (Number(inputRef.current.value) + addValue).toString());
    }
  };

  return (
    <StyledFormFieldContainer size={size}>
      {label && <Text size={size}>{label}</Text>}
      <Container styleConfig={{ direction: 'row', gap: '5px' }}>
        <Button size={size} type="text" icon={minusIcon ?? <MinusOutlined />} onClick={() => handleChange(-1)} />
        <StyledInput {...props} ref={inputRef} readOnly type={undefined} min={0} />
        <Button size={size} type="text" icon={plusIcon ?? <PlusOutlined />} onClick={() => handleChange(1)} />
      </Container>
    </StyledFormFieldContainer>
  );
};

export default Counter;
