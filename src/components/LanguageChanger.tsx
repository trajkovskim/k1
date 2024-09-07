import { GlobalOutlined } from '@ant-design/icons';
import { Container, Dropdown, Icon, OptionType } from 'components/common';
import { Language } from 'context/base';
import { useLanguage, useTranslation } from 'hooks';
import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled(Dropdown)`
  /* background-color: transparent; */
  /* color: inherit; */
`;

const LanguageChanger: React.FC = () => {
  const t = useTranslation('languages');
  const { language, changeLanguage } = useLanguage();

  const languageOptions: OptionType[] = Object.values(Language).map((value) => ({
    value,
    label: t(value),
  }));

  return (
    <Container styleConfig={{ gap: '0.5rem', direction: 'row', alignItems: 'center' }}>
      <Icon icon={<GlobalOutlined />} size="lg" />
      <StyledDropdown
        noBorder
        value={language}
        onChange={(value) => {
          changeLanguage(value as Language);
        }}
        options={languageOptions}
      />
    </Container>
  );
};

export default LanguageChanger;
