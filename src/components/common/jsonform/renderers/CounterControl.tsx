import { withJsonFormsControlProps } from '@jsonforms/react';
import Counter from 'components/common/form/Counter';
import { getCommonInputProps } from 'components/common/jsonform/renderers/utils';
import { ControlProps } from 'components/common/jsonform/types';
import React from 'react';

type Props = Omit<React.ComponentProps<typeof Counter>, keyof ControlProps> & ControlProps;

const CounterControl = (props: Props) => {
  const { handleChange, path, ...otherProps } = props;
  return (
    <Counter
      {...otherProps}
      {...getCommonInputProps(props)}
      onChange={(value) => {
        props.onChange?.(value);
        handleChange(path, value);
      }}
    />
  );
};

export default withJsonFormsControlProps(CounterControl);
