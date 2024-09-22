import {
  ControlElement,
  ControlProps as JsonFormsControlProps,
  LayoutProps as JsonFormsLayoutProps,
} from '@jsonforms/core';
import { ControlSize } from 'components/common/form/types';

export type JsonFormConfig = {
  placeholder?: boolean;
  label?: boolean;
  size?: ControlSize;
  gap?: string;
};

type JsonFormFieldUiSchemaOptions = JsonFormConfig & {
  fullwidth?: boolean;
};

export type JsonFormControlElement = Omit<ControlElement, 'options'> & {
  options?: JsonFormFieldUiSchemaOptions;
};

type CustomJsonFormsControlProps = {
  config?: JsonFormConfig;
  uischema: JsonFormControlElement;
};

export type ControlProps = Omit<JsonFormsControlProps, keyof CustomJsonFormsControlProps> & CustomJsonFormsControlProps;

type CustomJsonFormsLayoutProps = {
  config?: JsonFormConfig;
};
export type LayoutProps = Omit<JsonFormsLayoutProps, keyof CustomJsonFormsLayoutProps> & CustomJsonFormsLayoutProps;
