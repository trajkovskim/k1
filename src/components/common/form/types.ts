import { DefaultOptionType } from 'antd/es/select';
import { StyledContainerProps, StyledInputProps } from 'components/common/form/Input.styled';
import { Breakpoints } from 'theme';
import { Validator } from 'validators';

export type FormFieldValue = string | string[] | boolean | boolean[] | number | undefined | null;

export type FormContextType<T> = {
  values: T;
  change: (name: keyof T, value: FormFieldValue) => void;
  getValue: (name: keyof T) => FormFieldValue;
  setValues: (value: T | ((values: T) => T)) => void;
};

export type ControlSize = Breakpoints;
export type OptionType = DefaultOptionType;

export type FormFieldState<Value> = {
  error?: string;
  touched?: boolean;
  validating?: boolean;
  visited?: boolean;
  modified?: boolean;
  active?: boolean;
  dirty?: boolean;
  valid: boolean;
  initial: Value;
};

export type FormFieldProps<Props, Value = string> = Omit<Props, keyof StyledInputProps | 'size'> &
  StyledInputProps &
  StyledContainerProps & {
    label?: string;
    rightContainer?: React.ReactNode;
    validate?: Validator;
    clearButton?: boolean;
    size?: ControlSize;
    state?: FormFieldState<Value>;
  };
