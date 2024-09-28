import { MenuProps } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { Text } from 'components/common';
import { StyledNavMenu } from 'components/layout/Layout.styled';
import { useNavigationOptions } from 'hooks';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  mode: MenuProps['mode'];
  onNavigate?: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createMenuOptions = (
  options: ReturnType<typeof useNavigationOptions>,
  mode: MenuProps['mode'],
  onNavigate?: () => void
): ItemType<MenuItemType>[] =>
  Object.values(options).map((option) => ({
    key: option.label,
    label: option.href ? (
      <Link to={option.href}>
        <Text>{option.label}</Text>
      </Link>
    ) : (
      <Text>{option.label}</Text>
    ),
    onClick: option.href && onNavigate,
    icon: option.icon,
    style: mode === 'horizontal' ? { paddingLeft: '15px', paddingRight: '15px' } : {},
    type: (option.options ? 'submenu' : 'item') as never,
    children: option.options ? createMenuOptions(option.options, mode, onNavigate) : undefined,
  }));

export const findActive = (options?: ReturnType<typeof useNavigationOptions>): string[] => {
  if (!options) {
    return [];
  }

  for (const value of Object.values(options)) {
    if (value.active) {
      return [value.label, ...findActive(value.options)];
    }
  }

  return [];
};

const NavigationMenu: React.FC<Props> = (props) => {
  const navOptions = useNavigationOptions();
  const selectedKeys = findActive(navOptions);

  return (
    <nav>
      <StyledNavMenu
        inlineIndent={15}
        items={createMenuOptions(navOptions, props.mode, props.onNavigate)}
        mode={props.mode}
        selectedKeys={selectedKeys}
      />
    </nav>
  );
};

export default NavigationMenu;
