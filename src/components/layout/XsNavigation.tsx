import { MenuOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import { Button, Container, Text } from 'components/common';
import Sidebar from 'components/common/Sidebar';
import LanguageChanger from 'components/LanguageChanger';
import LogoImage from 'components/layout/LogoImage';
import NavigationMenu from 'components/layout/NavigationMenu';
import { useSocialMedias, useTranslation } from 'hooks';
import React, { useState } from 'react';
import styled from 'styled-components';
import { goto } from 'utils';

const StyledSidebar = styled(Sidebar)`
  .ant-drawer-header {
    background-color: #232323;

    svg {
      color: #fff !important;
    }
  }

  .ant-drawer-header-title {
    flex-direction: row-reverse;
  }
`;

const MobileNavigation: React.FC = () => {
  const t = useTranslation();
  const [open, setOpen] = useState(false);

  const socialMedias = useSocialMedias();

  return (
    <>
      <StyledSidebar placement="left" open={open} onClose={() => setOpen(false)} title={<LogoImage />}>
        <LanguageChanger />
        <Divider />
        <NavigationMenu mode="vertical" />
        <Divider />
        <Container
          styleConfig={{
            gap: '1.2rem',
            direction: 'row',
          }}
        >
          <Text size="sm">{t('followUs')}</Text>
          {socialMedias.map((socialMedia, index) => (
            <Button key={index} icon={socialMedia.icon} size="xl" onClick={() => goto(socialMedia.href)} />
          ))}
        </Container>
      </StyledSidebar>

      <Button icon={<MenuOutlined />} type="text" onClick={() => setOpen(true)} />
    </>
  );
};

export default MobileNavigation;
