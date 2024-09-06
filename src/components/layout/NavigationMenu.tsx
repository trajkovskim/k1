import { Menu, MenuProps } from 'antd';
import { Text } from 'components/common';
import { StyledNav } from 'components/layout/Layout.styled';
import { useNavigationOptions } from 'hooks';
import React from 'react';

type Props = {
  mode: MenuProps['mode'];
};

const NavigationMenu: React.FC<Props> = (props) => {
  const navOptions = useNavigationOptions();

  const selectedKeys = Object.values(navOptions)
    .filter((option) => option.active)
    .map((option) => option.label);

  const items: React.ComponentProps<typeof Menu>['items'] = Object.values(navOptions).map((option) => {
    return {
      key: option.label,
      label: <Text>{option.label}</Text>,
      onClick: option.navigate,
      icon: option.icon,
      type: 'item',
    };
  });

  return (
    <nav>
      <StyledNav items={items} mode={props.mode} selectedKeys={selectedKeys} />
    </nav>
  );
};

export default NavigationMenu;
