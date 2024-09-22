import { JsonFormsDispatch, withJsonFormsLayoutProps } from '@jsonforms/react';
import Container from 'components/common/Container';
import { LayoutProps } from 'components/common/jsonform/types';
import React from 'react';

type Props = React.ComponentProps<typeof Container> & LayoutProps;

const LayoutControl: React.FC<Props> = (props) => {
  const { uischema, visible, path, enabled, renderers, cells } = props;

  const jsonDispatchFormProps = {
    uischema,
    visible,
    path,
    enabled,
    renderers,
    cells,
  };

  return (
    <Container
      xs={12}
      styleConfig={{ direction: props.direction, gap: props.config?.gap, ...props.styleConfig }}
      {...props}
    >
      {visible &&
        'elements' in uischema &&
        Array.isArray(uischema.elements) &&
        uischema.elements.map((childUiSchema, index) => (
          <JsonFormsDispatch key={`${path}-${index}`} {...jsonDispatchFormProps} uischema={childUiSchema} />
        ))}
    </Container>
  );
};

export default withJsonFormsLayoutProps(LayoutControl);
