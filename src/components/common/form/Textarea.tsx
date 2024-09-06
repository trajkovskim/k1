import { Input as AntdInput } from 'antd';
import { SIZE_MAP } from 'components/common/form/constants';
import { StyledContainer, StyledTextarea, TextareaWrapper } from 'components/common/form/Input.styled';
import FormFieldRightContainer from 'components/common/form/RightContainer';
import { FormFieldProps } from 'components/common/form/types';
import React, { useRef } from 'react';

type TextareaProps = React.ComponentProps<typeof AntdInput.TextArea>;
type Props = FormFieldProps<TextareaProps>;

const Textarea: React.FC<Props> = ({
  state,
  label,
  fullwidth,
  rightContainer,
  clearButton,
  validate,
  size,
  ...props
}) => {
  const rightContainerRef = useRef<HTMLDivElement>(null);

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
      <TextareaWrapper label={label} size={size}>
        <StyledTextarea
          rightcontainerwidth={rightContainerRef.current?.offsetWidth}
          size={size && SIZE_MAP[size]}
          newSize={size}
          {...props}
        />
        <FormFieldRightContainer ref={rightContainerRef} {...rightContainerProps} />
      </TextareaWrapper>
      {!state?.valid && state?.error && <div>{state?.error}</div>}
    </StyledContainer>
  );
};

export default Textarea;
