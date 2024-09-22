import { ControlProps } from 'components/common/jsonform/types';

export const getLabel = (props: ControlProps) => {
  const uiSchemaOptions = props.uischema.options;

  return (uiSchemaOptions?.label === undefined && props.config?.label) || uiSchemaOptions?.label
    ? props.label
    : undefined;
};

export const getPlaceholder = (props: ControlProps) => {
  const uiSchemaOptions = props.uischema.options;

  return (uiSchemaOptions?.placeholder === undefined && props.config?.placeholder) || uiSchemaOptions?.placeholder
    ? props.label
    : undefined;
};

export const getCommonInputProps = (props: ControlProps) => ({
  label: getLabel(props),
  placeholder: getPlaceholder(props),
  fullwidth: props.uischema.options?.fullwidth,
  size: props.config?.size,
  // name: props.path,
});
