import { CheckOutlined, CloseOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'components/common/form';
import { StyledRightContainer } from 'components/common/form/Input.styled';
import { ControlSize, FormFieldState } from 'components/common/form/types';
import StyledSpinner from 'components/common/Spinner';
import React from 'react';

type Props = {
  state?: FormFieldState<unknown>;
  validate?: boolean;
  size?: ControlSize;
  clearButton?: boolean;
  onClear?: () => void;
  rightContainer?: React.ReactNode;
  value?: unknown;
};

const FormFieldRightContainer = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
  const { state } = props;

  return (
    <StyledRightContainer ref={ref}>
      {state?.dirty && props.validate && (
        <span>
          {state.validating ? (
            <StyledSpinner />
          ) : state.valid ? (
            <CheckOutlined />
          ) : (
            <ExclamationCircleFilled title={state.error} />
          )}
        </span>
      )}
      {props.clearButton && !!props.value && (
        <Button size={props.size} type="link" icon={<CloseOutlined />} onClick={props.onClear} />
      )}
      {props.rightContainer}
    </StyledRightContainer>
  );
});

FormFieldRightContainer.displayName = 'FormFieldRightContainer';

export default FormFieldRightContainer;
