import { Menu } from 'antd';
import { Container, Text } from 'components/common';
import { createMenuOptions, findActive } from 'components/layout/NavigationMenu';
import { useNavigationOptions } from 'hooks';
import React from 'react';
import { Routes } from 'routes';

const ProjectsSidebar: React.FC = () => {
  const navOptions = useNavigationOptions();
  const selectedKeys = findActive(navOptions);

  return (
    <Container styleConfig={{ gap: '1rem' }}>
      <Text strong size="xl">
        Проекти
      </Text>
      <Menu items={createMenuOptions(navOptions[Routes.PROJECTS].options ?? {})} selectedKeys={selectedKeys} />
    </Container>
  );
};

export default ProjectsSidebar;
