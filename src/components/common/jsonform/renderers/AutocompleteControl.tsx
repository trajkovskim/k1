import { OwnPropsOfEnum } from '@jsonforms/core';
import { withJsonFormsEnumProps } from '@jsonforms/react';
import Autocomplete from 'components/common/form/Autocomplete';
import { getCommonInputProps } from 'components/common/jsonform/renderers/utils';
import { ControlProps } from 'components/common/jsonform/types';
import React from 'react';

type Props = Omit<React.ComponentProps<typeof Autocomplete>, keyof ControlProps | keyof OwnPropsOfEnum> &
  ControlProps &
  OwnPropsOfEnum;

const AutocompleteControl: React.FC<Props> = (props) => {
  const { handleChange, path, ...otherProps } = props;
  return (
    <Autocomplete
      {...otherProps}
      {...getCommonInputProps(props)}
      onChange={(value, option) => {
        props.onChange?.(value, option);
        handleChange(path, value);
      }}
    />
  );
};

export default withJsonFormsEnumProps(AutocompleteControl);
