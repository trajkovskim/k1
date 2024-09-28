import { MailOutlined } from '@ant-design/icons';
import { Button } from 'components/common';
import { useTranslation } from 'hooks';
import React from 'react';
import { createMailToLink } from 'utils';

type Props = React.ComponentProps<typeof Button> & {
  label?: boolean;
};

const EmailButton: React.FC<Props> = (props) => {
  const t = useTranslation();

  const email = t('email');
  return (
    <Button type="link" size="lg" icon={<MailOutlined />} href={createMailToLink(email)} {...props}>
      {props.label && email}
    </Button>
  );
};

export default EmailButton;
