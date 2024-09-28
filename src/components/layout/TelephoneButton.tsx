import { PhoneFilled } from '@ant-design/icons';
import { Button } from 'components/common';
import { useTranslation } from 'hooks';
import React from 'react';
import { createTelLink } from 'utils';

type Props = React.ComponentProps<typeof Button> & {
  label?: boolean;
};

const TelephoneButton: React.FC<Props> = (props) => {
  const t = useTranslation();

  const telephone = t('telephone');
  return (
    <Button size="lg" type="link" icon={<PhoneFilled />} href={createTelLink(telephone)} {...props}>
      {props.label && telephone}
    </Button>
  );
};

export default TelephoneButton;
