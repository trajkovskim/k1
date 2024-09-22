import { OwnPropsOfEnum } from '@jsonforms/core';
import { JsonFormsDispatch, withJsonFormsEnumProps } from '@jsonforms/react';
import { FormItem } from 'components/common/form';
import Autocomplete from 'components/common/form/Autocomplete';
import { renderers } from 'components/common/jsonform/constants';
import { ControlProps } from 'components/common/jsonform/types';
import React from 'react';

type Props = Omit<React.ComponentProps<typeof Autocomplete>, keyof ControlProps | keyof OwnPropsOfEnum> &
  ControlProps &
  OwnPropsOfEnum;

const AntdFormItemRenderer: React.FC<Props> = (props) => {
  const { path, uischema } = props;
  return (
    <FormItem name={path}>
      <JsonFormsDispatch uischema={uischema} renderers={renderers} />
    </FormItem>
  );
};

export default withJsonFormsEnumProps(AntdFormItemRenderer);
