import { Menu, MenuProps } from 'antd';
import { Text } from 'components/common';
import { StyledNav } from 'components/layout/Layout.styled';
import { useNavigationOptions } from 'hooks';
import React from 'react';
import { useTheme } from 'styled-components';

type Props = {
  mode: MenuProps['mode'];
};

const NavigationMenu: React.FC<Props> = (props) => {
  const navOptions = useNavigationOptions();
  const theme = useTheme();

  const items: React.ComponentProps<typeof Menu>['items'] = Object.values(navOptions).map((option) => ({
    key: option.label,
    label: <Text style={{ color: option.active ? theme.antd.colorPrimaryActive : undefined }}>{option.label}</Text>,
    onClick: option.navigate,
    icon: option.icon,
    type: 'item',
  }));

  return (
    <nav>
      <StyledNav items={items} mode={props.mode} />
    </nav>
  );
};

export default NavigationMenu;
