import { JsonForms } from '@jsonforms/react';
import { antdFormItemRenderer, renderers } from 'components/common/jsonform/constants';
import { JsonFormConfig } from 'components/common/jsonform/types';
import { useLanguage, useTranslation } from 'hooks';
import React from 'react';

type Props = Omit<React.ComponentProps<typeof JsonForms>, 'renderers' | 'config'> & {
  tPrefix?: string;
  config?: JsonFormConfig;
};

const JsonForm: React.FC<Props> = ({ tPrefix, ...props }) => {
  const t = useTranslation(tPrefix);
  const { language } = useLanguage();

  return (
    <JsonForms
      i18n={{
        translate: (id) => t(id),
        locale: language,
      }}
      {...props}
      renderers={[...renderers, antdFormItemRenderer]}
    />
  );
};

export default JsonForm;
