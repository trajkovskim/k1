import { Checkbox as AntdCheckbox, CheckboxProps as AntdCheckboxProps } from 'antd';
import Container from 'components/common/Container';
import React from 'react';

type Props = Omit<AntdCheckboxProps, 'children'> & {
  label?: React.ReactNode;
  valueAsArray?: boolean;
};

const Checkbox: React.FC<Props> = ({ label, valueAsArray, ...props }) => {
  // const update = (targetChecked: boolean) => {
  //   const checkboxValue = props.value?.toString() ?? targetChecked;
  //   if (valueAsArray) {
  //     const fieldValueAsArray = Array.isArray(fieldValue) && fieldValue ? fieldValue : [];

  //     if (targetChecked) {
  //       change(name, [...fieldValueAsArray, checkboxValue] as FormFieldValue);
  //     } else if (fieldValueAsArray.length === 1) {
  //       change(name, undefined);
  //     } else {
  //       fieldValueAsArray.splice(fieldValueAsArray.indexOf(checkboxValue as never), 1);
  //       change(name, [...fieldValueAsArray] as FormFieldValue);
  //     }
  //   } else {
  //     change(name, targetChecked ? checkboxValue : undefined);
  //   }
  // };

  const events: {
    onChange: AntdCheckboxProps['onChange'];
  } = {
    onChange: (event) => {
      props.onChange && props.onChange(event);
      // update(event.target.checked);
    },
  };

  const id = `${props.name}_${props.value}`;
  return (
    <Container styleConfig={{ gap: '0.5rem', direction: 'row', alignItems: 'center', userSelect: 'none' }}>
      <AntdCheckbox id={id} {...props} {...events}>
        {label}
      </AntdCheckbox>
    </Container>
  );
};

export default Checkbox;
