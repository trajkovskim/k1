import { ControlProps, OwnPropsOfEnum } from '@jsonforms/core';
import { withJsonFormsEnumProps } from '@jsonforms/react';
import Dropdown from 'components/common/form/Dropdown';
import { getCommonInputProps } from 'components/common/jsonform/renderers/utils';
import React from 'react';

type Props = Omit<React.ComponentProps<typeof Dropdown>, keyof ControlProps | keyof OwnPropsOfEnum> &
  ControlProps &
  OwnPropsOfEnum;

const DropdownControl: React.FC<Props> = (props) => {
  const { handleChange, path, ...otherProps } = props;

  console.log(props);

  return (
    <Dropdown
      {...otherProps}
      {...getCommonInputProps(props)}
      onChange={(value, options) => {
        props.onChange?.(value, options);
        handleChange(path, value);
      }}
    />
  );
};

export default withJsonFormsEnumProps(DropdownControl);
