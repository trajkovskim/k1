import { GlobalOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Container, Icon, Text } from 'components/common';
import { useLanguage, useTranslation } from 'hooks';
import React from 'react';

type Props = {
  label?: boolean;
};

const LanguageChanger: React.FC<Props> = (props) => {
  const t = useTranslation('languages');
  const { language, changeLanguage, languages } = useLanguage();

  const languageOptions = languages.map((value) => ({
    key: value,
    label: <Text onClick={() => changeLanguage(value)}>{t(value)}</Text>,
  }));

  return (
    <Dropdown
      menu={{ items: languageOptions, selectable: true, selectedKeys: [language] }}
      arrow
      placement="bottomLeft"
      trigger={['hover']}
    >
      <Container styleConfig={{ direction: 'row', alignItems: 'center', gap: '1rem' }}>
        <Icon icon={<GlobalOutlined />} size="lg" />
        {props.label && t(language)}
      </Container>
    </Dropdown>
  );
};

export default LanguageChanger;
