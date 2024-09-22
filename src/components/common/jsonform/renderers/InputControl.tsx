import { ControlProps } from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import Input from 'components/common/form/Input';
import { getCommonInputProps } from 'components/common/jsonform/renderers/utils';
import React, { useCallback } from 'react';

type Props = Omit<React.ComponentProps<typeof Input> & ControlProps, `data-${string}`>;

const InputControl: React.FC<Props> = (props) => {
  const { schema, handleChange, path } = props;
  const { type } = schema;

  const parseValue = useCallback(
    (value: string) => {
      if (type === 'integer') {
        return value.length ? Number(value) : undefined;
      }

      return value;
    },
    [type]
  );

  return (
    <Input
      type={type === 'integer' ? 'number' : undefined}
      {...props}
      {...getCommonInputProps(props)}
      onChange={(event) => {
        props.onChange?.(event);
        handleChange(path, parseValue(event.target.value));
      }}
    />
  );
};

export default withJsonFormsControlProps(InputControl);
