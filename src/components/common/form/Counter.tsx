import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Container from 'components/common/Container';
import Button from 'components/common/form/Button';
import { StyledFormFieldContainer } from 'components/common/form/Input.styled';
import { ControlSize } from 'components/common/form/types';
import { triggerChange } from 'components/common/form/utils';
import { Text } from 'components/common/typography';
import React, { useRef, useState } from 'react';
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
  const [value, setValue] = useState<number>(props.defaultValue ? parseInt(props.defaultValue.toString()) : 0);
  const inputRef = useRef<HTMLInputElement>(null);
  props.defaultValue = props.defaultValue ?? '0';

  const validateChange = (nextValue: number) => {
    if (props.max && props.min) {
      return nextValue <= Number(props.max) && nextValue >= Number(props.min);
    }

    if (props.max) {
      return nextValue <= Number(props.max);
    }

    if (props.min) {
      return nextValue >= Number(props.min);
    }
  };

  const handleChange = (addValue: number) => {
    if (inputRef.current?.value) {
      const nextValue = Number(inputRef.current.value) + addValue;

      if (validateChange(nextValue)) {
        setValue(nextValue);
        triggerChange(inputRef.current, (Number(inputRef.current.value) + addValue).toString());
      }
    }
  };

  return (
    <StyledFormFieldContainer size={size}>
      {label && <Text size={size}>{label}</Text>}
      <Container styleConfig={{ direction: 'row', gap: '5px' }}>
        <Button
          size={size}
          type="text"
          icon={minusIcon ?? <MinusOutlined />}
          onClick={() => handleChange(-1)}
          disabled={typeof props.min === 'number' && Number(props.min) >= value}
        />
        <StyledInput {...props} ref={inputRef} readOnly type={undefined} />
        <Button
          size={size}
          type="text"
          icon={plusIcon ?? <PlusOutlined />}
          onClick={() => handleChange(1)}
          disabled={typeof props.max === 'number' && Number(props.max) <= value}
        />
      </Container>
    </StyledFormFieldContainer>
  );
};

export default Counter;
