import { withJsonFormsControlProps } from '@jsonforms/react';
import Textarea from 'components/common/form/Textarea';
import { getCommonInputProps } from 'components/common/jsonform/renderers/utils';
import { ControlProps } from 'components/common/jsonform/types';
import React from 'react';

type Props = Omit<React.ComponentProps<typeof Textarea> & ControlProps, `data-${string}`>;

const TextareaControl: React.FC<Props> = (props) => {
  const { handleChange, path } = props;
  return (
    <Textarea
      {...props}
      {...getCommonInputProps(props)}
      onChange={(event) => {
        props.onChange?.(event);
        handleChange(path, event.target.value);
      }}
    />
  );
};

export default withJsonFormsControlProps(TextareaControl);
