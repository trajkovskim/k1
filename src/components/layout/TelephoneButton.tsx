import { PhoneFilled } from '@ant-design/icons';
import { Button } from 'components/common';
import { useTranslation } from 'hooks';
import React from 'react';
import styled from 'styled-components';
import { call } from 'utils';

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row-reverse;
`;

type Props = React.ComponentProps<typeof Button> & {
  label?: boolean;
};

const TelephoneButton: React.FC<Props> = (props) => {
  const t = useTranslation();

  const telephone = t('telephone');
  return (
    <StyledButton size="lg" type="link" icon={<PhoneFilled />} onClick={() => call(telephone)} {...props}>
      {props.label && telephone}
    </StyledButton>
  );
};

export default TelephoneButton;
