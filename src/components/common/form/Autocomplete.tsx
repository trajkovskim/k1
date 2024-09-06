import { AutoCompleteProps } from 'antd';
import { SIZE_MAP } from 'components/common/form/constants';
import { StyledAutocomplete, StyledContainer, StyledFormFieldContainer } from 'components/common/form/Input.styled';
import FormFieldRightContainer from 'components/common/form/RightContainer';
import { FormFieldProps } from 'components/common/form/types';
import React, { useRef } from 'react';

type Props = FormFieldProps<AutoCompleteProps>;

const Autocomplete: React.FC<Props> = ({
  state,
  size,
  label,
  fullwidth,
  clearButton = true,
  rightContainer,
  validate,
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
    value: props.searchValue,
  };

  return (
    <StyledContainer fullwidth={fullwidth}>
      <StyledFormFieldContainer label={label} size={size}>
        <StyledAutocomplete
          size={size && SIZE_MAP[size]}
          newSize={size}
          rightcontainerwidth={rightContainerRef.current?.offsetWidth}
          {...props}
        />
        <FormFieldRightContainer ref={rightContainerRef} {...rightContainerProps} />
      </StyledFormFieldContainer>
      {!state?.valid && state?.error && <div>{state.error}</div>}
    </StyledContainer>
  );
};

export default Autocomplete;
