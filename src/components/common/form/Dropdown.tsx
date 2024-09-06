import { Select, SelectProps } from 'antd';
import { SIZE_MAP } from 'components/common/form/constants';
import {
  StyledContainer,
  StyledFormFieldContainer,
  StyledInputWithRightContainerProps,
} from 'components/common/form/Input.styled';
import FormFieldRightContainer from 'components/common/form/RightContainer';
import type { FormFieldProps } from 'components/common/form/types';
import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledSelect = styled(Select)<StyledInputWithRightContainerProps>``;

type Props = FormFieldProps<SelectProps>;

const Dropdown: React.FC<Props> = ({
  state,
  fullwidth,
  rightContainer,
  label,
  clearButton,
  validate,
  size,
  ...props
}) => {
  const rightContainerRef = useRef<HTMLSpanElement>(null);

  const rightContainerProps = {
    state,
    rightContainer,
    clearButton,
    validate: !!validate,
    size: size,
    onClear: props.onClear,
    value: props.value,
  };

  return (
    <StyledContainer fullwidth={fullwidth}>
      <StyledFormFieldContainer label={label} size={size}>
        <StyledSelect
          size={size && SIZE_MAP[size]}
          newSize={size}
          {...props}
          rightcontainerwidth={rightContainerRef.current?.offsetWidth}
        />
      </StyledFormFieldContainer>
      <FormFieldRightContainer ref={rightContainerRef} {...rightContainerProps} />
      {!state?.valid && state?.error && <div>{state.error}</div>}
    </StyledContainer>
  );
};

export default Dropdown;
