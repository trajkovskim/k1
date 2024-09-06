import { Input as AntdInput } from 'antd';
import { SIZE_MAP } from 'components/common/form/constants';
import { StyledContainer, StyledFormFieldContainer, StyledInput } from 'components/common/form/Input.styled';
import FormFieldRightContainer from 'components/common/form/RightContainer';
import { FormFieldProps } from 'components/common/form/types';
import React, { useRef } from 'react';

type Props = FormFieldProps<React.ComponentProps<typeof AntdInput>>;

const Input: React.FC<Props> = ({ state, label, fullwidth, rightContainer, clearButton, validate, size, ...props }) => {
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
        <StyledInput
          size={size && SIZE_MAP[size]}
          newSize={size}
          {...props}
          rightcontainerwidth={rightContainerRef.current?.offsetWidth}
        />
      </StyledFormFieldContainer>
      <FormFieldRightContainer ref={rightContainerRef} {...rightContainerProps} />
      {!state?.valid && state?.error && <div>{state?.error}</div>}
    </StyledContainer>
  );
};

export default Input;
