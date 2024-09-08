import { GlobalOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Container, Icon, Text } from 'components/common';
import { Language } from 'context/base';
import { useLanguage, useTranslation } from 'hooks';
import React from 'react';

type Props = {
  label?: boolean;
};

const LanguageChanger: React.FC<Props> = (props) => {
  const t = useTranslation('languages');
  const { language, changeLanguage } = useLanguage();

  const languageOptions = Object.values(Language).map((value) => ({
    key: value,
    label: <Text onClick={() => changeLanguage(value)}>{t(value)}</Text>,
  }));

  return (
    <Dropdown menu={{ items: languageOptions }} trigger={['click', 'hover']}>
      <Container styleConfig={{ direction: 'row', alignItems: 'center', gap: '1rem' }}>
        <Icon icon={<GlobalOutlined />} size="lg" />
        {props.label && t(language)}
      </Container>
    </Dropdown>
  );
};

export default LanguageChanger;
